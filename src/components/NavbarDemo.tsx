"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import config from '../../config.json';

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
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
