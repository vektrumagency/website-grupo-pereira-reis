"use client";

import { motion } from "motion/react";
import { NAV_LINKS } from "@/lib/content";
import { Logo } from "./logo";
import { EASE } from "./reveal";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 lg:px-20 lg:py-8"
    >
      <a href="#" aria-label="Início">
        <Logo />
      </a>
      <ul className="hidden gap-14 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link text-[0.65rem] font-medium uppercase tracking-[0.3em] text-bone/70 transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className="border border-gold/50 px-5 py-2.5 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
      >
        Falar connosco
      </a>
    </motion.nav>
  );
}
