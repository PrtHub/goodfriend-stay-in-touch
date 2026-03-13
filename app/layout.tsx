import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SEO_KEYWORDS } from "@/lib/seo";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Pritam Ghosh", url: `mailto:${SUPPORT_EMAIL}` }],
  creator: "Pritam Ghosh",
  publisher: SITE_NAME,
  category: "lifestyle",
  applicationName: SITE_NAME,

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Good Friend — Never Forget a Catch Up. Private iOS app for staying connected.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@iPritamX",
    creator: "@iPritamX",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  other: {
    "apple-itunes-app": `app-id=6758581803, app-argument=${APP_STORE_URL}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Social Networking",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  screenshot: [`${SITE_URL}/01.png`, `${SITE_URL}/02.png`, `${SITE_URL}/03.png`],
  offers: [
    { "@type": "Offer", name: "Monthly", price: "5.99", priceCurrency: "USD", description: "Monthly subscription with 3-day free trial" },
    { "@type": "Offer", name: "Annual", price: "19.99", priceCurrency: "USD", description: "Annual subscription with 7-day free trial" },
    { "@type": "Offer", name: "Lifetime", price: "59.99", priceCurrency: "USD", description: "One-time lifetime purchase" },
  ],
  author: { "@type": "Person", name: "Pritam Ghosh", email: SUPPORT_EMAIL },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", ratingCount: "11" },
  featureList: ["Private local storage", "No account required", "Birthday reminders", "Conversation notes", "Customizable nudges", "Friend circle priorities"],
  softwareVersion: "1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PQC9WZB2RK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PQC9WZB2RK');
          `}
        </Script>
      </body>
    </html>
  );
}
