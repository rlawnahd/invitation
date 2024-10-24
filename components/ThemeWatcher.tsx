'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeWatcher() {
    const { theme, setTheme } = useTheme();
    console.log(theme);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(perfers-color-scheme:dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
        };
        setTheme(mediaQuery.matches ? 'dark' : 'light');
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [setTheme]);
    return null;
}
