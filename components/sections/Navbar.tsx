import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { APP_STORE_URL } from "@/lib/data";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 z-50 w-full"
      style={{
        backgroundColor: "rgba(253,250,244,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(90,107,66,0.12)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
            style={{ backgroundColor: "#1C2D0E" }}
          >
            <Heart className="h-4 w-4 text-white" fill="white" />
          </div>
          <span className="text-[15px] font-bold tracking-tight" style={{ color: "#1C2D0E" }}>
            Good Friend
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors hover:text-[#1C2D0E]"
              style={{ color: "#5C6B48" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md"
          style={{ backgroundColor: "#1C2D0E" }}
        >
          Download
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
