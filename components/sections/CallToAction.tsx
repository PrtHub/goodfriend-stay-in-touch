import AppStoreButton from "@/components/AppStoreButton";

export default function CallToAction() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(150deg, #1C2D0E 0%, #2F4218 40%, #4A6228 100%)",
      }}
    >
      {/* Decorative ring */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{ border: "80px solid #C5D69C" }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(197,214,156,0.7)" }}>
          Stop waiting
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Stop losing touch.{" "}
          <span style={{ color: "#C5D69C" }}>Start catching up.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Most of us lose 80% of close friends by age 30. Kindred is the quiet, private tool that helps you fight that statistic, one catch up at a time.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppStoreButton light />
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            3-day free trial · No account needed · Private by default
          </p>
        </div>
      </div>
    </section>
  );
}
