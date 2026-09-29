import { SERVICES } from "@/lib/content";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import { ServiceIcon } from "./service-icon";

export function Services() {
  return (
    <section id="servicos" className="bg-black px-6 py-24 lg:px-20 lg:py-36">
      <Reveal className="mb-16 lg:mb-24">
        <Eyebrow className="mb-6 text-gold">Serviços</Eyebrow>
        <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,3rem)] font-extralight leading-[1.15] text-bone">
          Quatro áreas, <span className="text-gold-sheen">uma só visão</span>{" "}
          sobre cada ativo.
        </h2>
      </Reveal>

      <div className="grid border-t border-gold/15 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.icon}
            delay={i * 0.1}
            className="group flex flex-col items-center border-b border-gold/15 px-6 py-14 text-center sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="transition-transform duration-700 group-hover:-translate-y-1">
              <ServiceIcon name={service.icon} />
            </div>
            <h3 className="mt-8 text-[0.72rem] font-normal uppercase leading-[1.8] tracking-[0.25em] text-bone">
              {service.title}
            </h3>
            <span className="my-5 h-px w-8 bg-gold/50 transition-all duration-700 group-hover:w-14" />
            <p className="text-[0.55rem] uppercase tracking-[0.3em] text-bone/40">
              {service.titleEn}
            </p>
            <p className="mt-6 max-w-[16rem] text-[0.8rem] font-light leading-[1.9] text-bone/60">
              {service.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
