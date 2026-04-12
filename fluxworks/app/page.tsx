/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  Blocks,
  Cloud,
  Database,
  Headset,
  LayoutDashboard,
  Pill,
  Rocket,
  Stethoscope,
  Layers3,
  Store,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ResponsiveWave } from "@/components/responsive-wave";

const LOGO_CAROUSEL_IDS = [1, 2, 3, 4] as const;
/** One full cycle for translateX(-50%) seamless loop */
const LOGO_CAROUSEL_SEAMLESS_BLOCK = [...LOGO_CAROUSEL_IDS, ...LOGO_CAROUSEL_IDS];
/** Repeated so the strip is wider than any viewport (no dead gap on the right) */
const LOGO_CAROUSEL_TRACK = Array.from({ length: 6 }, () => LOGO_CAROUSEL_SEAMLESS_BLOCK).flat();

const PRODUCT_SUITE_CARDS = [
  {
    title: "Pharmacy Management Suite",
    description: "Complete pharmacy solution with POS, inventory, online ordering, and delivery.",
    features: ["HRMS", "POS", "Inventory"],
    icon: Pill,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Retail Suite",
    description: "Multi-store retail management with inventory sync and customer analytics.",
    features: ["Multi-Store", "CRM", "Analytics"],
    icon: Store,
    status: "Soon",
    cta: "Coming soon",
  },
  {
    title: "Commerce Transaction Suite",
    description: "Retail POS, inventory, and multi-store transaction management in one flow.",
    features: ["Retail POS", "Inventory", "Multi-store"],
    icon: LayoutDashboard,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Customer Engine",
    description: "CRM, loyalty, and support tools to improve customer retention and growth.",
    features: ["CRM", "Loyalty", "Support"],
    icon: Workflow,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Operations Suite",
    description: "Streamline HR, finance, people operations, and vendor lifecycle management.",
    features: ["HR", "Finance", "Vendors"],
    icon: Blocks,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Analytical Insights Engine",
    description: "Forecasting and real-time intelligence to power faster strategic decisions.",
    features: ["Forecasting", "Dashboards", "Insights"],
    icon: BarChart3,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Core Platform Suite",
    description: "Cloud-ready foundation with APIs, integrations, and centralized controls.",
    features: ["Cloud", "APIs", "Integrations"],
    icon: Layers3,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Cloud Deployment & Management",
    description: "Deploy, scale, and maintain workloads reliably across modern environments.",
    features: ["Hosting", "Scaling", "Maintenance"],
    icon: Cloud,
    status: "Active",
    cta: "View Product",
  },
  {
    title: "Clinic Management Suite",
    description: "Healthcare practice management with appointments and patient records.",
    features: ["EMR", "Prescription", "Billing"],
    icon: Stethoscope,
    status: "Active",
    cta: "View Product",
  },
] as const;

const SERVICE_CARDS: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Retail Technology Solutions",
    description: "Complete digital transformation for retail chains.",
    icon: LayoutDashboard,
  },
  {
    title: "Business Process Automation",
    description: "Automating billing, inventory, reporting, and operations.",
    icon: Workflow,
  },
  {
    title: "Custom Software Development",
    description: "Built-to-fit solutions based on client workflows.",
    icon: Blocks,
  },
  {
    title: "System Integration Services",
    description: "Connecting POS, CRM, accounting, and third-party tools.",
    icon: Database,
  },
  {
    title: "Data Analytics & Reporting",
    description: "Dashboards, KPIs, and business insights for decision-making.",
    icon: BarChart3,
  },
  {
    title: "Cloud Deployment & Management",
    description: "Hosting, scaling, and maintaining applications.",
    icon: Cloud,
  },
  {
    title: "SaaS Implementation & Onboarding",
    description: "Setting up systems across multiple stores.",
    icon: Headset,
  },
  {
    title: "System Integration & Data Sync",
    description: "Third-party integrations, APIs, real-time data flow between systems.",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    description: "Continuous updates, issue handling, and improvements.",
    icon: ShieldCheck,
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-20 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
        style={{
          background:
            "linear-gradient(180deg, #081826 0%, #0b2234 40%, #0f3350 72%, #12415f 100%)",
        }}
      >
        {/* Simple basic background glow designs correctly scaled to full section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute top-[-8%] left-[-12%] w-96 h-96 bg-cyan-400/20 blur-[110px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-sky-400/20 blur-[90px] rounded-full"></div>

          {/* Background wireframe abstract circle */}
          <div className="absolute top-[10%] -right-10 w-75 h-75 rounded-full border border-white/10 md:hidden pointer-events-none z-0"></div>
          <div className="absolute top-[15%] -left-16 w-50 h-50 rounded-full border border-white/5 md:hidden pointer-events-none z-0"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-6 md:pt-10 relative">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-6 flex flex-col items-center md:items-start text-center md:text-left py-10 md:py-0 relative"
            >
              {/* Software signal badge */}
              <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 shadow-lg backdrop-blur-md mb-3 md:mb-5 relative z-20">
                <LayoutDashboard className="h-4 w-4 text-cyan-300" />
                SaaS systems built for scale
              </div>

              {/* Mobile-only background geometric elements (pure shapes, no text) */}
              {/* Top abstract shape grid */}
              <div className="absolute -top-7.5 right-4 md:hidden flex gap-2 pointer-events-none z-0 opacity-40">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              </div>

              {/* Above-text swoosh */}
              <div className="absolute top-[10%] left-[8%] w-12 h-1 bg-linear-to-r from-teal-300/40 to-transparent rounded-full md:hidden pointer-events-none z-0 transform -rotate-15"></div>

              {/* Floating shapes behind text */}
              <div className="absolute top-[28%] right-[10%] w-16 h-16 rounded-full border-2 border-white/10 md:hidden pointer-events-none z-0"></div>
              <div className="absolute top-[45%] left-[5%] w-14 h-14 rounded-full bg-teal-300/20 blur-[14px] md:hidden pointer-events-none z-0"></div>
              <div className="absolute bottom-[25%] right-[2%] w-20 h-20 rounded-[14px] border border-white/10 rotate-25 md:hidden pointer-events-none z-0"></div>


              {/* Sparkle */}
              <div className="absolute top-[18%] left-[75%] md:hidden pointer-events-none z-0">
                <svg className="w-5 h-5 text-cyan-300/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.885 9.115L22 12L14.885 14.885L12 22L9.115 14.885L2 12L9.115 9.115L12 2Z" />
                </svg>
              </div>

              <h1 className="text-[44px] sm:text-5xl lg:text-5xl xl:text-6xl -mt-2 md:mt-0 text-white leading-[1.05] tracking-tight relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]" style={{ fontFamily: "var(--font-anton)" }}>
                We build scalable
                <br />
                software platforms
                <br />
                for modern
                <br />
                businesses
              </h1>
              <p className="text-slate-200 md:hidden text-[15px] font-medium px-4 leading-relaxed max-w-[320px]">
                SaaS platforms for retail, operations, and customer workflows built to scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 w-full sm:w-auto px-6 sm:px-0">
                <Link href="/product" className="w-full sm:w-auto text-center bg-white text-slate-950 text-sm px-8 py-3.5 rounded-full font-bold hover:bg-cyan-50 shadow-[0_10px_24px_0_rgba(0,0,0,0.18)] border border-white/20 transition-all hover:scale-105 active:scale-95">
                  View Products
                </Link>
                <Link href="/contact" className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-md text-white text-sm px-8 py-3.5 rounded-full font-bold hover:bg-white/20 border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-sm">
                  Book a Demo
                </Link>
              </div>
            </motion.div>


            {/* Desktop Only Content - Hero Image and Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative h-90 sm:h-105 md:h-112.5 mt-6 md:mt-0 max-w-100 md:max-w-none mx-auto w-full z-20"
            >
              <div className="absolute inset-0 rounded-[34px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm" />
              <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute inset-y-16 left-0 w-24 rounded-full bg-sky-400/10 blur-3xl" />

              <div className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-white/80 uppercase backdrop-blur-md">
                Cloud-ready operations suite
              </div>

              <motion.div
                className="absolute top-6 right-6 z-30 rounded-2xl border border-white/15 bg-[#0c2130]/85 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/70">
                  Live modules
                </div>
                <div className="mt-2 flex items-center gap-2 text-white">
                  <LayoutDashboard className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-semibold">Retail, CRM, analytics</span>
                </div>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center md:top-1/2 md:left-1/2 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                <div className="relative w-full max-w-140 px-6 pt-12">
                  <img
                    src="/laptop.png"
                    alt="Software dashboard on a laptop"
                    className="w-full h-full object-contain object-center"
                  />
                  <motion.div
                    className="absolute -right-2 top-14 w-36 sm:w-44 rounded-3xl border border-white/15 bg-white/10 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <img
                      src="/system.png"
                      alt="Analytics dashboard"
                      className="h-auto w-full rounded-[18px] object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute left-6 bottom-6 rounded-2xl border border-white/15 bg-[#081826]/90 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/70">
                      Deployment health
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-white">
                      <ShieldCheck className="h-4 w-4 text-emerald-300" />
                      <span className="text-sm font-semibold">99.9% uptime</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/80">APIs</span>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/80">Billing</span>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/80">Sync</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services And Product Suite Section */}
      <section
        className="relative py-16 md:py-20 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-700"
        style={{
          background:
            "linear-gradient(180deg, #0e5e7f 0%, #1a6e88 30%, #2a7e90 60%, #3a8e98 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/30 bg-white/85 dark:bg-card dark:border-white/10 backdrop-blur-sm p-6 md:p-10"
          >
            <h2
              className="text-3xl md:text-4xl text-gray-900 dark:text-white mb-2"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Our Services
            </h2>
            <p className="text-sm text-gray-700 dark:text-muted-foreground mb-6">
              What we do for clients
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CARDS.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.title} className="group rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-secondary p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-cyan-400 dark:hover:border-cyan-500">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-600 dark:bg-accent p-3 text-white dark:text-accent-foreground shadow-lg transition-colors group-hover:bg-cyan-700 dark:group-hover:bg-cyan-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{service.title}</h3>
                        <p className="text-xs leading-relaxed text-gray-700 dark:text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-[#06181E] dark:bg-slate-900 py-16 relative">
        {/* Wave Top */}
        <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
          <ResponsiveWave fill="#06181E" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            className="text-4xl font-medium text-center text-white mb-12"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Our Products
          </h2>

          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1 mt-1">
            {PRODUCT_SUITE_CARDS.map((suite, index) => {
              const SuiteIcon = suite.icon;
              const isComingSoon = suite.status.toLowerCase() === "soon";

              return (
                <motion.div
                  key={suite.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * index }}
                  className="bg-cyan-300 dark:bg-[#1e293b] rounded-xl w-full max-w-125 mx-auto flex flex-col justify-between hover:shadow-lg transition-shadow"
                  style={{ padding: "32px 32px 24px 32px" }}
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col" style={{ width: "65%" }}>
                      <div className="mb-6 flex items-center justify-between gap-3">
                        <div className="inline-block border border-gray-600 dark:border-slate-500 px-4 py-1.5 rounded-[40px] text-[11px] font-semibold text-gray-700 dark:text-slate-300 tracking-wide w-fit">
                          {suite.status}
                        </div>
                      </div>
                      <div className="mb-6 flex items-start gap-3">
                        <div className="rounded-2xl bg-[#0a1922] dark:bg-slate-700 p-2 text-cyan-300 shadow-md shrink-0 mt-1">
                          <SuiteIcon className="h-4 w-4" />
                        </div>
                        <h3
                          className="text-[32px] text-gray-900 dark:text-white leading-[1.1] tracking-tight"
                          style={{ fontFamily: "var(--font-anton)" }}
                        >
                          {suite.title}
                        </h3>
                      </div>
                      <p className="text-[12px] text-[#2d3748] dark:text-slate-300 mb-8 pr-4">
                        {suite.description}
                      </p>
                    </div>
                    <div className="flex flex-col pt-12" style={{ width: "35%" }}>
                      <div className="space-y-3">
                        {suite.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-[11px]">
                            <svg className="w-3.5 h-3.5 text-blue-600/80 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#2d3748] dark:text-slate-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href="/product" className="w-full block text-center bg-[#0a1922] dark:bg-accent text-[#f4f4f4] dark:text-accent-foreground py-3 rounded-full text-xs font-semibold hover:bg-black dark:hover:bg-accent/90 transition-colors mt-auto shadow-md">
                    {isComingSoon ? "Coming soon" : suite.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="bg-[#06181E] dark:bg-slate-800 py-8 overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 90s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex w-max items-center gap-10 sm:gap-16 animate-scroll px-6">
          {LOGO_CAROUSEL_TRACK.map((id, index) => (
            <div key={index} className="shrink-0">
              <img src={`/item_${id}.png`} alt={`Partner ${id}`} className="h-8 w-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="bg-[#06181E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-2xl mb-3">
            Trusted By Many Organizations and
            <br />
            Businesses
          </h2>
          <p className="text-gray-400 text-sm mb-12">
            Join over 800 institutions and Organizations
            <br />
            and optimize your Software.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">450+</div>
              <div className="text-gray-600 text-sm">Clients</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">45k+</div>
              <div className="text-gray-600 text-sm">users</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600 text-sm">Softwares shipped</div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="bg-[#06181E] dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-3">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            {
              "We don't just build software—we build partnerships. Our platform is designed"
            }
            <br />
            with your growth in mind.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {/* Modular Product Architecture */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white dark:bg-secondary p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 dark:bg-slate-700 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500 dark:text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">
                    Modular Product Architecture
                  </h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-xs">
                    Pick and choose the modules you need. Scale up as your
                    business grows without disrupting existing workflows.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Centralized Billing & Subscriptions */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white dark:bg-secondary p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 dark:bg-slate-700 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500 dark:text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path
                      d="M7 8h10M7 12h10M7 16h6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">
                    Centralized Billing & Subscriptions
                  </h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-xs">
                    One dashboard to manage all your subscriptions, payments,
                    and invoices across all products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Activation-Based Access Control */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white dark:bg-secondary p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 dark:bg-slate-700 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500 dark:text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">
                    Activation-Based Access Control
                  </h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-xs">
                    Secure, role-based access system that puts you in control of
                    who can use what and when.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Scalable & Future-Ready */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white dark:bg-secondary p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 dark:bg-slate-700 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500 dark:text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">
                    Scalable & Future-Ready
                  </h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-xs">
                    Built on modern cloud infrastructure that grows with your
                    business, ensuring 99.9% uptime.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
              <div className="text-slate-400 text-[12px]">Modules Available</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
              <div className="text-slate-400 text-[12px]">Uptime SLA</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="text-3xl font-bold text-sky-400 mb-1">
                {"<"}2min
              </div>
              <div className="text-slate-400 text-[12px]">Avg. Response Time</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="text-3xl font-bold text-sky-400 mb-1">24/7</div>
              <div className="text-slate-400 text-[12px]">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
        style={{
          background:
            "linear-gradient(180deg, #06181E 0%, #FFFFFF 100%)",
        }}
      >
        {/* Gradient Background - only covers CTA heading area */}
        <div className="w-full md:w-[94%] md:mr-auto rounded-tr-[60px] md:rounded-tr-[100px] relative overflow-hidden">
          {/* Gradient area with heading and button */}
          <div
            className="relative py-16 md:py-20 px-4 sm:px-6 pb-12 md:pb-16 overflow-hidden"
            style={{
              background:
                "linear-gradient(150deg, #3A7A8C 0%, #4A78A8 25%, #6B6EBC 50%, #9B6EB8 75%, #C490C8 100%)",
            }}
          >
            {/* Purple/pink glow in bottom-right */}
            <div
              className="absolute bottom-0 right-0 w-125 h-125 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 70% 70%, #D4A0D8 0%, #B87AD4 30%, transparent 65%)",
                opacity: 0.5,
              }}
            />
            {/* White gradient at the bottom to merge seamlessly with the footer */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent pointer-events-none" />

            <div className="max-w-4xl md:ml-10 md:px-8 mx-auto relative z-10">
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-black dark:text-white mb-6 md:mb-8">
                Ready to go? Start
                <br />
                Building together.
              </h2>
              <Link href="/contact" className="flex items-center gap-2 bg-black dark:bg-primary text-white dark:text-primary-foreground px-5 py-2 rounded-lg hover:bg-gray-900 dark:hover:bg-primary/90 transition-colors">
                <span className="font-semibold text-[14px]">Request Demo</span>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
