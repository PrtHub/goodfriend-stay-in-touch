import { CalendarCheck, Bell, Users, MessageSquare, Cake, Shield, Rocket, Heart, Laptop, PenTool } from "lucide-react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/goodfriend-stay-in-touch/id6758581803";
export const SUPPORT_EMAIL = "pritamfinds@gmail.com";
export const PRIVACY_URL = "https://www.notion.so/Privacy-Policy-Good-Friend-abc123";
export const TERMS_URL = "https://www.notion.so/Terms-of-Service-Good-Friend-abc123";

export const features = [
  {
    icon: CalendarCheck,
    label: "01",
    title: "The Action Dashboard",
    description: "A minimal Today screen that surfaces exactly who needs your attention. One tap to call, one tap to complete.",
  },
  {
    icon: Bell,
    label: "02",
    title: "Zero-Guilt Nudges",
    description: "Customizable reminder styles from Gentle to Accountability. Nudges that work with your mental bandwidth, not against it.",
  },
  {
    icon: Users,
    label: "03",
    title: "Inner Circle Priorities",
    description: "Organize friends into tiers. Keep your closest top-of-mind while maintaining a healthy cadence with everyone else.",
  },
  {
    icon: MessageSquare,
    label: "04",
    title: "Context is King",
    description: "A frictionless post-call workflow prompts you to jot quick notes, so you never forget the small details next time you talk.",
  },
  {
    icon: Cake,
    label: "05",
    title: "Important Dates",
    description: "Never miss a birthday, anniversary, or difficult milestone. Smart reminders so you show up when it counts.",
  },
  {
    icon: Shield,
    label: "06",
    title: "The Privacy Pledge",
    description: "100% local SQLite storage. No accounts, no servers, no data harvesting. Your relationships stay on your device. Always.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Build Your Inner Circle",
    description: "Add the people who actually matter, not your whole contacts list. Set interaction goals for each friend and organize them into tiers.",
  },
  {
    number: "02",
    title: "Get Gentle Nudges",
    description: "GoodFriend surfaces who needs your attention today. Choose your reminder style, from Gentle to full Accountability mode.",
  },
  {
    number: "03",
    title: "Capture the Context",
    description: "After every catch up, jot a quick note. 'Starting a new job Monday.' Those small details make every future conversation feel meaningful.",
  },
];

export const highlights = [
  {
    stat: "80%",
    title: "The Anti-Social Network",
    description: "No feeds, no likes, no doomscrolling. GoodFriend is a quiet, private space to intentionally manage the relationships that actually matter.",
  },
  {
    stat: "0",
    title: "Zero Data Harvesting",
    description: "No cloud databases, no servers, no accounts. Everything lives locally on your device via SQLite. Your relationships are yours alone.",
  },
  {
    stat: "1 tap",
    title: "Replaces Guilt with Action",
    description: "We replace the anxiety of 'I should really call them' with a gentle, actionable prompt to simply say hello. No pressure, just connection.",
  },
  {
    stat: "∞",
    title: "Built for the Long Game",
    description: "Most of us lose touch with 80% of close friends by age 30. GoodFriend is designed to quietly fight that statistic, one catch up at a time.",
  },
];

export const iconMap = {
  rocket: Rocket,
  heart: Heart,
  laptop: Laptop,
  pen: PenTool,
} as const;

export type IconKey = keyof typeof iconMap;

export const targetAudience = [
  {
    title: "Busy Founders & Creators",
    description: "You care about your friendships but get buried in work. Good Friend keeps you accountable without adding another task.",
    icon: "rocket" as IconKey,
  },
  {
    title: "Introverts & Remote Workers",
    description: "Connection doesn't always come naturally, but it matters. A gentle nudge to stay in touch with your inner circle.",
    icon: "heart" as IconKey,
  },
  {
    title: "Long-Distance Friends",
    description: "Miles apart but still close. Track important dates, birthdays, and keep a record of what's happening in each other's lives.",
    icon: "laptop" as IconKey,
  },
  {
    title: "People Who Value Privacy",
    description: "Done with apps that harvest your data. Good Friend respects your privacy. Everything stays on your device.",
    icon: "pen" as IconKey,
  },
];

export const plans = [
  {
    name: "Monthly",
    price: "$5.99",
    period: "month",
    highlight: false,
    badge: "3-day free trial",
    features: ["Full access to all features", "Unlimited circle size", "All reminder styles", "Cancel anytime"],
    cta: "Try Free for 3 Days",
  },
  {
    name: "Annual",
    price: "$19.99",
    period: "year",
    badge: "7-day free trial",
    highlight: true,
    features: ["Everything in Monthly", "Save 72% vs monthly", "7-day free trial", "Best long-term value"],
    cta: "Try Free for 7 Days",
  },
  {
    name: "Lifetime",
    price: "$59.99",
    period: "once",
    highlight: false,
    badge: null,
    features: ["Pay once, own forever", "All future features", "Founding member status"],
    cta: "Buy Lifetime",
  },
];

export const faq = [
  {
    question: "Is there a free trial?",
    answer: "Yes. Monthly subscribers get a 3-day free trial, and Annual subscribers get a 7-day free trial. No charges until the trial ends, and you can cancel anytime.",
  },
  {
    question: "How many friends can I add?",
    answer: "As many as you want. We recommend focusing on your closest 5 to 20 for the best experience. These are the people who matter most.",
  },
  {
    question: "Does Good Friend access my contacts?",
    answer: "Good Friend only accesses contacts you explicitly select during setup. We don't auto-import your entire contact list or sync anything to the cloud.",
  },
  {
    question: "What happens if I delete the app?",
    answer: "All your data is stored locally on your device. If you delete the app, your data is deleted too. We recommend staying subscribed so you never lose access.",
  },
  {
    question: "Can I export my data?",
    answer: "Good Friend stores everything locally on your device. Data export is on our roadmap and coming soon.",
  },
  {
    question: "Why no cloud sync?",
    answer: "We designed Good Friend to be private by default. No accounts, no servers, no tracking. Your friendships are yours alone. That's the whole point.",
  },
];
