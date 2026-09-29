import type { ServiceIcon as IconName } from "@/lib/content";

const PATHS: Record<IconName, React.ReactNode> = {
  construction: (
    <>
      <path d="M6 42V14l8-4v32M14 42V6h8v36M22 42V16h7v26M29 42V22h7v20" />
      <path d="M3 42h36" />
      <path d="M17 12v26M25 20v18M32 26v12" opacity=".5" />
    </>
  ),
  brokerage: (
    <>
      <path d="M5 21 21 7l16 14" />
      <path d="M9 18v22h24V18" />
      <path d="M17 40V28h8v12" />
      <path d="M29 9h4v6" />
    </>
  ),
  investment: (
    <>
      <path d="M6 40V30M13 40V24M20 40V26M27 40V18M34 40V12" />
      <path d="M5 26 14 17l7 5 13-13" />
      <path d="M28 9h6v6" />
      <path d="M3 42h36" />
    </>
  ),
  capital: (
    <>
      <circle cx="21" cy="23" r="16" />
      <ellipse cx="21" cy="23" rx="7" ry="16" />
      <path d="M5 23h32M8 15h26M8 31h26" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 42 46"
      fill="none"
      stroke="url(#gold-stroke)"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12"
      aria-hidden
    >
      <defs>
        <linearGradient id="gold-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecd9b4" />
          <stop offset=".55" stopColor="#c2a57a" />
          <stop offset="1" stopColor="#8a6d45" />
        </linearGradient>
      </defs>
      {PATHS[name]}
    </svg>
  );
}
