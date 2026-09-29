import { BRAND, CONTACT } from "@/lib/content";
import { Eyebrow } from "./eyebrow";
import { Logo } from "./logo";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-black px-6 pt-24 pb-10 text-bone lg:px-20 lg:pt-36"
    >
      <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-gold/10" />

      <Reveal className="relative flex flex-col items-center text-center">
        <Eyebrow className="mb-8 text-gold">Contacto</Eyebrow>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.8rem)] font-extralight leading-[1.1]">
          Vamos falar sobre o{" "}
          <span className="text-gold-sheen">seu próximo projeto.</span>
        </h2>
        <div className="mt-14 flex flex-col items-center gap-4 text-sm font-light tracking-[0.1em] text-bone/80 sm:flex-row sm:gap-12">
          <a href={`mailto:${CONTACT.email}`} className="nav-link hover:text-gold-light">
            {CONTACT.email}
          </a>
          <span className="hidden h-4 w-px bg-gold/30 sm:block" />
          <a href={CONTACT.phoneHref} className="nav-link hover:text-gold-light">
            {CONTACT.phone}
          </a>
        </div>
        <p className="mt-6 text-[0.65rem] text-bone/30">
          (contactos de exemplo, a substituir pelos definitivos)
        </p>
      </Reveal>

      <footer className="relative mt-28 flex flex-col items-center justify-between gap-6 border-t border-gold/15 pt-8 sm:flex-row">
        <Logo />
        <span className="text-[0.55rem] uppercase tracking-[0.35em] text-bone/40">
          {BRAND.tagline}
        </span>
        <span className="text-[0.6rem] text-bone/40">
          © {new Date().getFullYear()} APR 360° Capital Group
        </span>
      </footer>
    </section>
  );
}
