'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import ThemeWatcher from '@/components/ThemeWatcher';
import { type ThemeProviderProps } from 'next-themes/dist/types';
export default function ThemeProviders({ children, ...props }: ThemeProviderProps) {
    const [isMount, setIsMount] = useState(false);
    useEffect(() => {
        setIsMount(true);
    }, []);
    if (!isMount) {
        return null;
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} {...props}>
            {/* <ThemeWatcher /> */}
            {children}
        </ThemeProvider>
    );
}
