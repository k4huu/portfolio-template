"use client";

import React from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import { GridBackgroundDemo } from "../components/BackgroundGrid";
import { AnimatedPinDemo } from "../components/AnimatedPinDemo";
import { AccordionDemo } from "../components/AccordionDemo";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavbarDemo />
            </div>

            <GridBackgroundDemo />
            <AnimatedPinDemo />
            <AccordionDemo />
            <InfiniteMovingCardsDemo />
            <Footer />
        </div>
    );
}
