import { BRAND } from "@/lib/content";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="text-gold-sheen text-lg font-light tracking-[0.25em]">
        APR<span className="ml-1 text-sm tracking-[0.1em]">360°</span>
      </span>
      <span className="mt-1.5 text-[0.5rem] font-normal uppercase tracking-[0.55em] text-bone/70">
        {BRAND.group}
      </span>
    </span>
  );
}
