"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BRAND, HERO_IMAGE, HERO_VIDEO } from "@/lib/content";
import { Eyebrow } from "./eyebrow";
import { EASE } from "./reveal";

const LINES = ["Visão global.", "Valor real."];

export function Hero() {
  return (
    <header className="relative flex h-[100svh] min-h-[640px] flex-col justify-end overflow-hidden bg-black">
      {HERO_VIDEO ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMAGE}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      <div className="relative z-10 px-6 pb-20 lg:px-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <Eyebrow className="mb-8 text-gold-light">{BRAND.tagline}</Eyebrow>
        </motion.div>
        <h1 className="flex flex-col text-[clamp(2.6rem,8vw,6.5rem)] font-extralight leading-[1.02] tracking-[-0.01em] text-bone">
          {LINES.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 + i * 0.12, ease: EASE }}
              className={i === 1 ? "text-gold-sheen" : undefined}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-8 max-w-md text-sm font-light leading-[1.9] text-bone/70"
        >
          Projetos e construção, mediação, investimento imobiliário e capital,
          reunidos num só grupo.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 z-10 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-gold/0 to-gold"
        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </header>
  );
}
