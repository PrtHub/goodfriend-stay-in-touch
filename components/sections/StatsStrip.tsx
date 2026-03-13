const stats = [
  { value: "80%", label: "Friends lost by 30" },
  { value: "3 to 7 days", label: "Free Trial" },
  { value: "100%", label: "Private & Local" },
  { value: "$19.99", label: "Per Year" },
];

export default function StatsStrip() {
  return (
    <div style={{ backgroundColor: "#1C2D0E" }}>
      <div className="mx-auto max-w-5xl px-6 py-7">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 md:gap-24">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-extrabold" style={{ color: "#C5D69C" }}>
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden h-8 w-px sm:block" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
