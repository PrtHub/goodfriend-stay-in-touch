import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1C2D0E" }}>
            Up and running in minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#6B7A50" }}>
            Three steps to never lose touch with the people who matter most.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex gap-5 lg:flex-col lg:gap-0">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[2.6rem] top-7 hidden h-px lg:block"
                  style={{
                    width: "calc(100% - 2rem)",
                    left: "calc(50% + 2rem)",
                    backgroundColor: "#C5D69C",
                  }}
                />
              )}

              {/* Number badge */}
              <div
                className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white lg:mb-6"
                style={{ backgroundColor: "#1C2D0E" }}
              >
                {step.number}
              </div>

              <div className="lg:mt-0">
                <h3 className="text-lg font-bold" style={{ color: "#1C2D0E" }}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6B7A50" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
