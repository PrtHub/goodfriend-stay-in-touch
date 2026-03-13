import Image from "next/image";

const screenshots = [
  { url: "/01.png", alt: "Onboarding" },
  { url: "/02.png", alt: "Today Tab" },
  { url: "/03.png", alt: "Circle View" },
  { url: "/04.png", alt: "Friend Details" },
  { url: "/05.png", alt: "Stats Dashboard" },
  { url: "/06.png", alt: "Notifications" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="overflow-hidden py-20 lg:py-28" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
          The App
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1C2D0E" }}>
          Beautifully simple, by design
        </h2>
        <p className="mt-3 text-base" style={{ color: "#6B7A50" }}>
          Every screen is designed to get you back to your friends, not keep you in the app.
        </p>
      </div>

      {/* Scrollable strip */}
      <div
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:justify-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {screenshots.map((s) => (
          <div
            key={s.url}
            className="w-44 flex-none snap-center overflow-hidden rounded-[1.8rem] transition-transform hover:scale-[1.03] sm:w-52"
            style={{
              boxShadow: "0 8px 32px rgba(28,45,14,0.14)",
              border: "1.5px solid rgba(90,107,66,0.15)",
            }}
          >
            <Image src={s.url} alt={s.alt} width={300} height={650} className="w-full" />
            <div className="py-2 text-center text-xs font-semibold" style={{ color: "#8A9E6C", backgroundColor: "#FDFAF4" }}>
              {s.alt}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
