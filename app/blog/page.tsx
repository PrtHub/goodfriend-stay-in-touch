import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Blog — Friendship, Relationships & Social Wellness",
  description: "Practical guides on staying connected, maintaining friendships, and building a more intentional social life.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Relationships: { bg: "#EBF2E0", text: "#3D5A1C" },
  "Social Wellness": { bg: "#E2EDD8", text: "#4A6228" },
  Productivity: { bg: "#F0EBE0", text: "#6B5A2A" },
  "App Reviews": { bg: "#E0EAF0", text: "#2A4A6B" },
  Privacy: { bg: "#EDE0F0", text: "#5A2A6B" },
};

function CategoryBadge({ category }: { category: string }) {
  const colors = categoryColors[category] ?? { bg: "#F0EBE0", text: "#5C6B48" };
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-bold"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div style={{ backgroundColor: "#FDFAF4", color: "#1C2D0E" }}>
      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: "#F2EBE0" }}>
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#8A9E6C" }}>
              {SITE_NAME} Blog
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "#1C2D0E" }}>
              Relationships, Wellness &amp; Connection
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "#6B7A50" }}>
              Practical guides to staying connected, maintaining friendships, and building a more intentional social life.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group mb-14 grid items-center gap-8 overflow-hidden rounded-3xl p-8 transition-all hover:shadow-lg lg:grid-cols-2 lg:p-10"
            style={{ backgroundColor: "#1C2D0E" }}
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: "rgba(197,214,156,0.2)", color: "#C5D69C" }}
                >
                  {featured.category}
                </span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold leading-snug text-white transition-opacity group-hover:opacity-90 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {featured.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#C5D69C" }}>
                Read article <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div
              className="hidden h-64 items-center justify-center rounded-2xl lg:flex"
              style={{ backgroundColor: "rgba(197,214,156,0.08)", border: "1px solid rgba(197,214,156,0.15)" }}
            >
              <span className="text-6xl">🤝</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ backgroundColor: "#FDFAF4", border: "1.5px solid rgba(90,107,66,0.13)" }}
              >
                <div
                  className="flex h-36 items-center justify-center"
                  style={{ backgroundColor: "#F2EBE0" }}
                >
                  <span className="text-4xl">
                    {post.category === "Relationships" ? "💬" :
                     post.category === "Social Wellness" ? "🌿" :
                     post.category === "Productivity" ? "⚡" :
                     post.category === "App Reviews" ? "📱" :
                     post.category === "Privacy" ? "🔒" : "📝"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <CategoryBadge category={post.category} />
                    <span className="text-xs" style={{ color: "#A0A897" }}>{post.readTime}</span>
                  </div>
                  <h2
                    className="text-[15px] font-bold leading-snug transition-colors group-hover:opacity-80"
                    style={{ color: "#1C2D0E" }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-relaxed" style={{ color: "#6B7A50" }}>
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#4A6228" }}>
                    Read more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
