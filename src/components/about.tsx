import Image from "next/image";
import { ABOUT_IMAGE, ABOUT_STATS } from "@/lib/content";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section
      id="sobre"
      className="grid gap-12 bg-bone px-6 py-24 text-ink lg:grid-cols-2 lg:items-stretch lg:gap-20 lg:px-20 lg:py-36"
    >
      <Reveal className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[560px]">
        <Image
          src={ABOUT_IMAGE}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-4 border border-gold/40" />
      </Reveal>

      <div className="flex flex-col justify-center">
        <Reveal delay={0.1}>
          <Eyebrow className="mb-6 text-gold-dark">Sobre</Eyebrow>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-[1.15]">
            André Pereira dos Reis
          </h2>
          <p className="mt-8 max-w-lg text-[0.85rem] font-light leading-[2] text-ink/65">
            André Pereira dos Reis construiu o seu percurso em torno de um
            princípio simples: cada projeto merece o mesmo rigor do primeiro
            ao último dia. Passou pela mediação imobiliária e pela gestão de
            obra e hoje reúne, no APR 360° Capital Group, o projeto, a
            construção, o investimento e o capital de cada operação.
          </p>
          <p className="mt-4 text-[0.65rem] text-ink/35">
            (texto de exemplo, a substituir pelo conteúdo definitivo; o retrato do André entra no lugar da imagem)
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/25 pt-10"
        >
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-[2.4rem] font-extralight leading-none text-gold-dark lg:text-[3.2rem]">
                {stat.value}
              </div>
              <div className="mt-3 text-[0.55rem] uppercase tracking-[0.2em] text-ink/50">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
