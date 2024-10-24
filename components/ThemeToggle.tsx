// components/ThemeToggle.tsx
'use client';

import { Dot, LucideIcon, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const Item = ({ t, label, Icon }: { t: string; label: string; Icon: LucideIcon }) => (
        <div onClick={() => setTheme(t)} className="group-hover:flex hidden p-2">
            <div className="flex items-center gap-2 cursor-pointer">
                <Icon width={14} /> {label}
            </div>
            {theme === t && <Dot />}
        </div>
    );

    return (
        <div className="group w-14 text-center">
            <Button variant="ghost" size="icon" className="">
                <Sun />
                <Moon />
                <span className="sr-only">Toggle theme</span>
            </Button>
            <Item t="light" label="Light" Icon={Sun} />
            <Item t="dark" label="Dark" Icon={Moon} />
            <Item t="system" label="System" Icon={Monitor} />
        </div>
    );
}
