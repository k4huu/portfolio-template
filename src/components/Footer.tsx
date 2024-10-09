"use client";

import React from "react";

export function Footer() {
    return (
        <footer className="w-full bg-gray-900 dark:bg-black py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-gray-300 text-sm">
                    This website was built using components from{" "}
                    <a
                        href="https://ui.aceternity.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        ui.aceternity.com
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://shadcn.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        shadcn/ui
                    </a>.
                </p>

                <p className="text-gray-400 text-sm">
                    Designed and developed by{" "}
                    <span className="text-white font-semibold">Kahu</span>
                </p>
            </div>

            <div className="w-full mt-4 border-t border-gray-700 dark:border-gray-800 pt-4">
                <p className="text-gray-500 text-xs text-center">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
