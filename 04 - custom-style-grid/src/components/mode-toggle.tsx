"use client";

import React, { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from './icons'
import { useTheme } from 'next-themes';

export const ModeToggle = () => {
    const {theme, setTheme} = useTheme();

    const [systemTheme, setSystemTheme] = useState<"light" | "dark" > ("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemTheme(mediaQuery.matches ? "dark" : "light");

        const handleChange = (e: MediaQueryListEvent) => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const SWITCH_THEME = () => {
        switch (theme) {
            case "light":
                setTheme("dark");
                return;
            case "dark":
                setTheme("light");
                return;
            case "system":
                setTheme(systemTheme === "dark" ? "light" : "dark");
                return;
        }
    }

  return (
    <button
    onClick={SWITCH_THEME}
    className="absolute size-8 border border-neutral-200 dark:border-neutral-800 rounded-md flex items-center justify-center top-4 right-4"
    >
        <SunIcon className="absolute inset-0 size-4 shrink-0 text-neutral-500 dark:scale-0 scale-100 dark:rotate-45 transition-all duration-300 m-auto" />
        <MoonIcon className="absolute inset-0 size-4 shrink-0 text-neutral-200 dark:scale-100 scale-0 dark:rotate-45 transition-all duration-300 m-auto"/>
    </button>
  )
}