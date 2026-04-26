import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2EBE0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
            Why Kindred
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1C2D0E" }}>
            Built differently, on purpose
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl p-8 transition-all hover:shadow-md"
              style={{
                backgroundColor: "#FDFAF4",
                border: "1.5px solid rgba(90,107,66,0.12)",
              }}
            >
              {/* Big stat in background */}
              <span
                className="absolute -right-2 -top-4 text-7xl font-black select-none leading-none"
                style={{ color: "rgba(90,107,66,0.07)" }}
              >
                {item.stat}
              </span>

              <p className="text-3xl font-extrabold" style={{ color: "#4A6228" }}>
                {item.stat}
              </p>
              <h3 className="mt-3 text-lg font-bold" style={{ color: "#1C2D0E" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B7A50" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
