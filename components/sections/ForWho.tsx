import { targetAudience, iconMap } from "@/lib/data";

export default function ForWho() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
            Who It&apos;s For
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1C2D0E" }}>
            Built for people who care
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#6B7A50" }}>
            Whether you&apos;re across the room or across the world, Kindred helps you stay close.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {targetAudience.map((a) => {
            const Icon = iconMap[a.icon];
            return (
              <div
                key={a.title}
                className="rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: "#F2EBE0",
                  border: "1.5px solid rgba(90,107,66,0.1)",
                }}
              >
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#C5D69C", color: "#1C2D0E" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold leading-snug" style={{ color: "#1C2D0E" }}>
                  {a.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "#6B7A50" }}>
                  {a.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
