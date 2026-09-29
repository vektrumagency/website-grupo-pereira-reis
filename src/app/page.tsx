"use client";

import { MotionConfig } from "motion/react";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </MotionConfig>
  );
}
