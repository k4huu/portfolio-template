"use client";

import React, { useEffect, useState } from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import { GridBackgroundDemo } from "../components/BackgroundGrid";
import { AnimatedPinDemo } from "../components/AnimatedPinDemo";
import { AccordionDemo } from "../components/AccordionDemo";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import { Footer } from "../components/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // This ensures that components will only render after the page has been mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // You can return a loader or an empty div to avoid server-side errors
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Navbar przyklejony do góry */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarDemo />
      </div>

      {/* Pozostałe komponenty */}
      <GridBackgroundDemo />
      <AnimatedPinDemo />
      <AccordionDemo />
      <InfiniteMovingCardsDemo />
      
      {/* Stopka */}
      <Footer />
    </div>
  );
}
