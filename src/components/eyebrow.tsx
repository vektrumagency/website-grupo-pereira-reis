export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.4em]">
        {children}
      </span>
      <span className="h-px w-16 bg-current opacity-40" />
    </div>
  );
}
