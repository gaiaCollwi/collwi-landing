'use client';

import { useState, useEffect } from 'react';

// Drop-in replacement for MUI's useMediaQuery — accepts a media query string
// (with or without the surrounding parentheses convention MUI uses).
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
