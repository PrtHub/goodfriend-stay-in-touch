import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import AppStoreButton from "@/components/AppStoreButton";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Pritam Ghosh"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ backgroundColor: "#FDFAF4", color: "#1C2D0E" }}>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-14 lg:py-18" style={{ backgroundColor: "#F2EBE0" }}>
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "#6B7A50" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs font-bold"
                style={{ backgroundColor: "#1C2D0E", color: "#C5D69C" }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#8A9E6C" }}>
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#8A9E6C" }}>
                <Calendar className="h-3 w-3" /> {formattedDate}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "#1C2D0E" }}>
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: "#6B7A50" }}>
              {post.description}
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="mx-auto max-w-3xl px-6 py-14">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2" style={{ borderTop: "1px solid rgba(90,107,66,0.12)", paddingTop: "2rem" }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: "#F2EBE0", color: "#6B7A50" }}
              >
                #{tag.replace(/\s+/g, "-")}
              </span>
            ))}
          </div>
        </article>

        {/* CTA banner */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(150deg, #1C2D0E 0%, #3A5520 100%)" }}
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(197,214,156,0.6)" }}>
              Good Friend for iOS
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to stop losing touch?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Private, local, no accounts needed. Try free for up to 7 days.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreButton light />
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16 lg:py-20" style={{ backgroundColor: "#FDFAF4" }}>
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-8 text-xl font-bold" style={{ color: "#1C2D0E" }}>
                More from the blog
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: "#F2EBE0", border: "1.5px solid rgba(90,107,66,0.1)" }}
                  >
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#8A9E6C" }}>
                      {p.category} · {p.readTime}
                    </p>
                    <h3 className="text-[15px] font-bold leading-snug" style={{ color: "#1C2D0E" }}>
                      {p.title}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "#4A6228" }}>
                      Read <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
