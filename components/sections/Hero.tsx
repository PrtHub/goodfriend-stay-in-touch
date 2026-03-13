import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import AppStoreButton from "@/components/AppStoreButton";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-0"
      style={{
        background:
          "linear-gradient(160deg, #2A3D14 0%, #4A6228 28%, #7A9E50 58%, #BFD49A 78%, #EBE4D4 100%)",
      }}
    >
      {/* Subtle noise/texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
          style={{
            backgroundColor: "rgba(255,255,255,0.18)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <Sparkles className="h-3 w-3" />
          Available on iOS · 7-day free trial
        </div>

        {/* Stat hook */}
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Most of us lose 80% of close friends by age 30.
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-[2.8rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Never Forget{" "}
          <span className="italic" style={{ fontStyle: "italic" }}>
            a Catch Up.
          </span>
        </h1>

        <p
          className="mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          The anti-social network. An intentional, private-by-default app to
          help you nurture your inner circle, without the guilt or noise.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppStoreButton light />
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-100"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            See how it works <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Phone mockups */}
      <div className="relative mx-auto mt-16 flex max-w-5xl items-end justify-center gap-5 px-6 lg:gap-10">
        {/* Left phone */}
        <div
          className="relative hidden lg:block"
          style={{ transform: "rotate(-7deg) translateY(18px)" }}
        >
          <div
            className="w-44 overflow-hidden rounded-[2.2rem] shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          >
            <Image
              src="/01.png"
              alt="Onboarding screen"
              width={300}
              height={650}
              className="w-full"
            />
          </div>
          {/* Floating label */}
          <div
            className="absolute -top-4 -left-2 rounded-xl px-3 py-2 shadow-lg"
            style={{ backgroundColor: "#1C2D0E", color: "#fff" }}
          >
            <p className="text-[11px] font-bold">100% Private</p>
            <p className="text-[10px] opacity-60">No Cloud · No Tracking</p>
          </div>
        </div>

        {/* Center phone — prominent */}
        <div
          className="relative z-10"
          style={{ filter: "drop-shadow(0 28px 48px rgba(0,0,0,0.38))" }}
        >
          <div className="w-56 overflow-hidden rounded-[2.8rem] sm:w-64 lg:w-72">
            <Image
              src="/02.png"
              alt="Today tab action cards"
              width={300}
              height={650}
              className="w-full"
              priority
            />
          </div>
          {/* Center label */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold shadow-lg"
            style={{ backgroundColor: "#1C2D0E", color: "#C5D69C" }}
          >
            Today Tab
          </div>
        </div>

        {/* Right phone */}
        <div
          className="relative hidden lg:block"
          style={{ transform: "rotate(7deg) translateY(18px)" }}
        >
          <div
            className="w-44 overflow-hidden rounded-[2.2rem] shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          >
            <Image
              src="/06.png"
              alt="Notifications screen"
              width={300}
              height={650}
              className="w-full"
            />
          </div>
          {/* Floating label */}
          <div
            className="absolute -top-4 -right-2 rounded-xl px-3 py-2 text-right shadow-lg"
            style={{ backgroundColor: "#1C2D0E", color: "#fff" }}
          >
            <p className="text-[11px] font-bold">Zero Guilt</p>
            <p className="text-[10px] opacity-60">Just Gentle Nudges</p>
          </div>
        </div>
      </div>
    </section>
  );
}
