"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import config from "../../config.json";

export function AnimatedPinDemo() {
    return (
        <div className="h-screen w-full flex items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="flex flex-col items-center space-y-8 relative z-20">
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-8">
                    Projects
                </h1>

                <div className="flex flex-wrap justify-center space-x-4">
                    {config.animatedPinDemo.pins.map((pin, index) => (
                        <PinContainer key={index} title={pin.title} href={pin.href}>
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                    {pin.title} {/* Dynamiczny tytuł */}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500">
                                        {pin.description}
                                    </span>
                                </div>
                                <div
                                    className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${pin.image})` }}
                                />
                            </div>
                        </PinContainer>
                    ))}
                </div>
            </div>
        </div>
    );
}
