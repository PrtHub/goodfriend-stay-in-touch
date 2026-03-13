import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28" style={{ backgroundColor: "#F2EBE0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1C2D0E" }}>
            Everything you need to stay connected
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#6B7A50" }}>
            Thoughtfully designed to help you nurture your most important relationships, without the noise.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "#FDFAF4",
                border: "1.5px solid rgba(90,107,66,0.12)",
              }}
            >
              {/* Number watermark */}
              <span
                className="absolute right-5 top-4 text-5xl font-black select-none"
                style={{ color: "rgba(90,107,66,0.07)" }}
              >
                {f.label}
              </span>

              {/* Icon */}
              <div
                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#1C2D0E", color: "#C5D69C" }}
              >
                <f.icon className="h-5 w-5" />
              </div>

              <h3 className="text-[15px] font-bold" style={{ color: "#1C2D0E" }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B7A50" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
