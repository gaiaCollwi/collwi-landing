// API utility for CollWi backend authentication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://collwi.com/api';

export class APIError extends Error {
  constructor(message, status, errors = {}) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add auth token if present
  const token = localStorage.getItem('collwi_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(
        data.message || 'Request failed',
        response.status,
        data.errors || {}
      );
    }

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error', 0, {});
  }
}

export const auth = {
  async login(email, password) {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (data.token) {
      localStorage.setItem('collwi_token', data.token);
      localStorage.setItem('collwi_user', JSON.stringify(data.user));
    }

    return data;
  },

  async register(userData) {
    const data = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (data.token) {
      localStorage.setItem('collwi_token', data.token);
      localStorage.setItem('collwi_user', JSON.stringify(data.user));
    }

    return data;
  },

  async googleAuth(credential) {
    const data = await apiRequest('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ credential }),
    });

    if (data.token) {
      localStorage.setItem('collwi_token', data.token);
      localStorage.setItem('collwi_user', JSON.stringify(data.user));
    }

    return data;
  },

  logout() {
    localStorage.removeItem('collwi_token');
    localStorage.removeItem('collwi_user');
  },

  getUser() {
    const userStr = localStorage.getItem('collwi_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated() {
    return !!localStorage.getItem('collwi_token');
  },
};
