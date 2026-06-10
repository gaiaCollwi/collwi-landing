/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Legacy brand tokens (used by blog/details/faq/privacy pages)
        brand: {
          teal: '#4ECDC4',
          'teal-dark': '#3BAFA8',
          'teal-light': '#E0F7F5',
          purple: '#7C5CBF',
          'purple-dark': '#6347A0',
          'purple-light': '#F0EAFF',
          gold: '#F7C948',
          'gold-light': '#FFF8E1',
          coral: '#F4845F',
          'coral-light': '#FFF0EB',
          navy: '#1A1F36',
          'navy-light': '#2D3250',
        },
        // Revamp tokens (merged with legacy surface values)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          DEFAULT: '#FFFFFF',
          hover: '#F8F7F4',
          warm: '#FAF8F5',
          cool: '#F0F9F8',
          muted: '#F8F9FC',
        },
        accent: '#4ECDC4',
        primary: {
          DEFAULT: '#7C3AED',
          extralight: 'rgba(176, 106, 255, 0.16)',
          light: 'rgba(176, 106, 255, 0.35)',
          dark: '#7C3AED',
          button: 'rgba(162, 88, 255, 0.6)',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          light: '#E0F7F5',
          dark: '#2BA89F',
          extradark: '#1A7A73',
          button: '#B7E9EA',
        },
        tertiary: {
          DEFAULT: '#FF6B35',
          light: '#FFF0EA',
          extralight: '#FFF8F0',
          dark: '#E55A28',
          button: '#FA9F57',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        landingpurple: '#EDE7F8',
        landingorange: '#FFE4D2',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        body: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xst': '0.85rem',
        'xs': '0.8rem',
        'xxs': '0.625rem',
        'xxxs': '0.5rem',
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #97C9CA, #AE6EDE, #FA9F56, #FA9F56)',
        'custom-gradient': 'linear-gradient(to right, #B3E2E3, #DB98EB, #FA9F56)',
        'dialog-gradient': 'linear-gradient(to bottom, #77D5D7, #FFFFFF 30%, #FFFFFF)',
        'radial-gradient': 'radial-gradient(ellipse 100% 100% at center top, #FFFBF4, #FFFBF4, #FFFBF4,rgba(249, 129, 49, 0.67))',
        'image-gradient': 'linear-gradient(to bottom, #70F1F247, #3A6C6D18)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(78, 205, 196, 0.08), transparent 70%)',
        'hero-glow': 'radial-gradient(circle at 30% 50%, rgba(78, 205, 196, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(78, 205, 196, 0.05) 0%, rgba(255, 107, 53, 0.03) 100%)',
        'auth-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.12)',
        'medium': '0 4px 30px rgba(0, 0, 0, 0.06)',
        'heavy': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
        'teal': '0 8px 30px -4px rgba(78, 205, 196, 0.35)',
        'purple': '0 8px 30px -4px rgba(124, 92, 191, 0.3)',
        'glow-teal': '0 0 40px rgba(78, 205, 196, 0.15)',
        'glow-coral': '0 0 40px rgba(255, 107, 53, 0.15)',
        'glow-purple': '0 0 40px rgba(124, 92, 191, 0.2)',
      },
      screens: {
        '3xl': '1800px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}
