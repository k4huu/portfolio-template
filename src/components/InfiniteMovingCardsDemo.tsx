"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import config from "../../config.json";

export function InfiniteMovingCardsDemo() {
    const { testimonials } = config;

    return (
        <section className="flex flex-col items-center justify-center bg-white dark:bg-black dark:bg-grid-white/[0.05] py-12 mt-[300px]">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Opinions
            </h1>

            <div className="h-[40rem] w-full max-w-7xl overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
}
