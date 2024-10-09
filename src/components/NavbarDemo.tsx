"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import config from '../../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export function NavbarDemo() {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <div className="relative w-full">
            <button
                onClick={toggleTheme}
                className="absolute top-4 right-4 p-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
            >
                <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} className="text-gray-800 dark:text-gray-200" />
            </button>

            <div className="flex items-center justify-center w-full h-full mt-6"> 
                <Navbar className="top-2 max-w-lg" />
            </div>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("max-w-lg mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                {config.navbar.items.map((item, index) => {
                    if (!item.enabled) return null;

                    return (
                        <MenuItem key={index} setActive={setActive} active={active} item={item.title}>
                            {item.expandable && item.links ? (
                                <div className="flex flex-col space-y-4 text-sm font-inter">
                                    {item.links.map((link, linkIndex) => (
                                        <HoveredLink
                                            key={linkIndex}
                                            href={link.href}
                                            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors font-bold"
                                        >
                                            {link.title}
                                        </HoveredLink>
                                    ))}
                                </div>
                            ) : (
                                <HoveredLink
                                    href={item.href}
                                    className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors font-bold"
                                >
                                    {item.title}
                                </HoveredLink>
                            )}
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
}
