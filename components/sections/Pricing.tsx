import { Check } from "lucide-react";
import { plans, APP_STORE_URL } from "@/lib/data";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F2EBE0" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#8A9E6C" }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#1C2D0E" }}
          >
            Simple, transparent pricing
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "#6B7A50" }}
          >
            Start free. Upgrade when you&apos;re ready. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-7"
              style={
                plan.highlight
                  ? {
                      backgroundColor: "#1C2D0E",
                      boxShadow: "0 16px 48px rgba(28,45,14,0.35)",
                    }
                  : {
                      backgroundColor: "#FDFAF4",
                      border: "1.5px solid rgba(90,107,66,0.14)",
                    }
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold text-white"
                  style={{ backgroundColor: "#4A6228" }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{
                  color: plan.highlight ? "rgba(255,255,255,0.45)" : "#8A9E6C",
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: plan.highlight ? "#fff" : "#1C2D0E" }}
                >
                  {plan.price}
                </span>
                {plan.period !== "forever" && plan.period !== "once" && (
                  <span
                    className="text-sm"
                    style={{
                      color: plan.highlight
                        ? "rgba(255,255,255,0.4)"
                        : "#8A9E6C",
                    }}
                  >
                    /{plan.period}
                  </span>
                )}
                {plan.period === "once" && (
                  <span
                    className="text-sm"
                    style={{
                      color: plan.highlight
                        ? "rgba(255,255,255,0.4)"
                        : "#8A9E6C",
                    }}
                  >
                    one-time
                  </span>
                )}
              </div>

              {/* Divider */}
              <div
                className="my-5 h-px"
                style={{
                  backgroundColor: plan.highlight
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(90,107,66,0.1)",
                }}
              />

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm"
                    style={{
                      color: plan.highlight
                        ? "rgba(255,255,255,0.7)"
                        : "#6B7A50",
                    }}
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                      style={{ color: plan.highlight ? "#C5D69C" : "#4A6228" }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold transition-all hover:opacity-90"
                style={
                  plan.highlight
                    ? { backgroundColor: "#C5D69C", color: "#1C2D0E" }
                    : { backgroundColor: "#1C2D0E", color: "#fff" }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p
          className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed"
          style={{ color: "#A0A897" }}
        >
          Payment charged to your Apple ID at purchase confirmation.
          Subscriptions auto-renew unless cancelled at least 24 hours before the
          period ends. Manage subscriptions in your App Store settings.
        </p>
      </div>
    </section>
  );
}
