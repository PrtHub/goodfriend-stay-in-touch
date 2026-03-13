import { Heart } from "lucide-react";
import { SUPPORT_EMAIL, PRIVACY_URL, TERMS_URL, APP_STORE_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C2D0E" }}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Heart className="h-4 w-4" style={{ color: "#C5D69C" }} fill="#C5D69C" />
              </div>
              <span className="text-[15px] font-bold text-white">Good Friend</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              The anti-social network. An intentional, private-by-default app to help you nurture your inner circle.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                App
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Download", href: APP_STORE_URL },
                  { label: "Features", href: "#features" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                Legal
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Privacy Policy", href: PRIVACY_URL },
                  { label: "Terms of Service", href: TERMS_URL },
                  { label: "Support", href: `mailto:${SUPPORT_EMAIL}` },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 pt-8 text-xs sm:flex-row"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Good Friend. All rights reserved.</p>
          <p>Made with care · 100% Private · iOS only</p>
        </div>
      </div>
    </footer>
  );
}
