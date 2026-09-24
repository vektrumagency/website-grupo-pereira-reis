"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#negocios", label: "Negócios" },
  { href: "#contacto", label: "Contacto" },
];

const HERO_WORDS = ["Grupo", "Pereira", "dos Reis"];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1757359056339-22968344cce6?q=80&w=2000&auto=format&fit=crop";
const PORTRAIT_IMAGE =
  "https://images.unsplash.com/photo-1758518729058-b158e71c5a9b?q=80&w=1200&auto=format&fit=crop";

const VENTURES = [
  {
    name: "Obra e Construção",
    description: "Acompanhamento de obra, do planeamento à entrega.",
    image:
      "https://images.unsplash.com/photo-1644221150167-fb4fafa7f411?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-2 row-span-2",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    name: "Arquitetura",
    description: "Projetos de arquitetura residencial e comercial.",
    image:
      "https://images.unsplash.com/photo-1759193529611-40ef867726fd?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    name: "Investimento Imobiliário",
    description: "Identificação e gestão de oportunidades de investimento.",
    image:
      "https://images.unsplash.com/photo-1771450092348-5f33e2cc2963?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1 row-span-1",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    name: "Mediação IAD",
    description: "Compra, venda e arrendamento através da rede IAD.",
    image:
      "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-2 row-span-1",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
];

const PHOTO_GRADE =
  "grayscale-[20%] sepia-[5%] contrast-110 saturate-105 brightness-95";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div>
        <header className="relative flex min-h-screen flex-col bg-bone">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="absolute inset-x-0 top-0 z-20 flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-10"
          >
            <span className="font-display text-base tracking-tight text-bone">
              Grupo Pereira dos Reis
            </span>
            <div className="flex gap-6 text-sm text-bone md:gap-10 md:text-ink">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>

          <div className="relative flex flex-1 flex-col md:flex-row">
            <div className="relative h-[48vh] min-h-[340px] shrink-0 overflow-hidden md:h-auto md:min-h-0 md:flex-[1.15]">
              <Image
                src={HERO_IMAGE}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 55vw, 100vw"
                className={`ken-burns object-cover ${PHOTO_GRADE}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-transparent md:hidden" />
            </div>

            <div className="relative flex flex-1 flex-col justify-center gap-6 px-4 py-16 md:px-14 md:py-0">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="font-display text-xs uppercase tracking-[0.25em] text-bronze"
              >
                Obra · Arquitetura · Investimento · Mediação IAD
              </motion.span>

              <h1 className="flex flex-col font-display text-4xl font-light leading-[0.95] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                {HERO_WORDS.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: EASE }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + HERO_WORDS.length * 0.1 + 0.15, ease: EASE }}
                className="max-w-sm text-base text-ink-soft md:text-lg"
              >
                Obra e construção, arquitetura, investimento imobiliário e
                mediação IAD.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="absolute bottom-6 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-bone/60 md:bottom-10"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </header>

        <div className="overflow-hidden border-y border-line bg-bone py-5 text-ink">
          <div className="marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-10 pr-10">
                {VENTURES.map((v) => (
                  <span
                    key={v.name}
                    className="flex items-center gap-10 font-display text-2xl font-light md:text-4xl"
                  >
                    {v.name}
                    <span className="text-bronze">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section
          id="sobre"
          className="relative overflow-hidden px-4 py-28 md:px-8 md:py-40"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              aria-hidden
              className="pointer-events-none select-none font-display text-[22vw] leading-[0.75] tracking-tight text-ink/[0.06] md:text-[12rem]"
            >
              André
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative -mt-[16vw] flex flex-col gap-10 md:-mt-36 md:flex-row md:items-end md:gap-16"
            >
              <div className="relative aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden shadow-[0_30px_60px_-20px_rgba(28,25,23,0.35)] md:w-[340px]">
                <Image
                  src={PORTRAIT_IMAGE}
                  alt="André Pereira dos Reis"
                  fill
                  sizes="(min-width: 768px) 340px, 100vw"
                  className={`object-cover ${PHOTO_GRADE}`}
                />
              </div>
              <div className="md:pb-6">
                <h3 className="font-display text-3xl font-light md:text-4xl">
                  André Pereira dos Reis
                </h3>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  André Pereira dos Reis constrói a sua carreira em torno de
                  um princípio simples: cada projeto merece o mesmo rigor do
                  primeiro ao último dia. Ao longo do seu percurso passou
                  pela mediação imobiliária, pela gestão de obra e, mais
                  recentemente, pelo investimento e desenvolvimento de
                  projetos próprios — sempre com uma visão de longo prazo
                  sobre o território e as pessoas que nele vivem.
                </p>
                <p className="mt-3 text-xs text-ink-soft/60">
                  (texto e retrato de exemplo — a substituir pelo conteúdo definitivo)
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="negocios"
          className="border-t border-line bg-bone py-28 md:py-40"
        >
          <div className="px-4 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-display text-4xl font-light md:text-6xl"
            >
              Os negócios
            </motion.h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 px-4 [grid-auto-rows:11rem] sm:[grid-auto-rows:13rem] md:grid-cols-4 md:gap-6 md:px-8 md:[grid-auto-rows:15rem] lg:[grid-auto-rows:17rem]">
            {VENTURES.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
                className={`group relative overflow-hidden ${venture.span}`}
              >
                <Image
                  src={venture.image}
                  alt={venture.name}
                  fill
                  sizes={venture.sizes}
                  className={`object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-100 ${PHOTO_GRADE}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-bone md:p-7">
                  <h3 className="font-display text-xl font-light md:text-2xl">
                    {venture.name}
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-bone/75">
                    {venture.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="border-t border-line bg-bone px-4 py-28 text-center text-ink md:px-8 md:py-40"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-4xl font-light md:text-6xl"
          >
            Contacto
          </motion.h2>
          <div className="mt-10 flex flex-col items-center gap-3 text-lg">
            <a href="mailto:geral@grupopereiradosreis.pt" className="nav-link">
              geral@grupopereiradosreis.pt
            </a>
            <a href="tel:+351912345678" className="nav-link">
              +351 91 234 56 78
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-soft/70">
            (contactos de exemplo — a substituir pelos definitivos)
          </p>

          <footer className="mt-24 text-xs text-ink-soft/60">
            © {new Date().getFullYear()} Grupo Pereira dos Reis
          </footer>
        </section>
      </div>
    </MotionConfig>
  );
}
