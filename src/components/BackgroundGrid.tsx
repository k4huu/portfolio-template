import React from "react";
import config from "../../config.json";
import { FlipWords } from "./ui/flip-words";

export function GridBackgroundDemo() {
    return (
        <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400"> {/* Zmienione z text-4xl na text-5xl */}
                {config.nickname}
                <FlipWords words={config.words} />
                <br />
                {config.gridText}
            </div>
        </div>
    );
}
