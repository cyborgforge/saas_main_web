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
    title: "Security & Compliance",
    description: "Enterprise-grade security, compliance audits, and data protection.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20">
        <div 
          className="absolute inset-0 opacity-100 dark:opacity-40"
          style={{
            background: "var(--gradient-primary)",
          }}
        />
        <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Build Your Business <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                at Scale
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-200 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Enterprise-grade SaaS solutions designed for retail, pharmacy, and healthcare. Built to scale with your business, trusted by market leaders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent hover:bg-accent-dark text-accent-foreground font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Request Demo
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold border border-white/20 transition-all duration-200"
              >
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-surface-light dark:bg-surface-medium transition-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-anton)" }}>
              Our Services
            </h2>
            <p className="text-muted-foreground text-base">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICE_CARDS.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group bg-card dark:bg-card border border-border dark:border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-accent/10 dark:bg-accent/20 p-3 text-accent group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-anton)" }}>
              Our Product Suite
            </h2>
            <p className="text-muted-foreground text-base">
              Modular, scalable platforms for every business function
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PRODUCT_SUITE_CARDS.map((suite, index) => {
              const SuiteIcon = suite.icon;
              const isComingSoon = suite.status === "Soon";

              return (
                <motion.div
                  key={suite.title}
                  variants={itemVariants}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-cyan-300 to-blue-300 dark:from-slate-700 dark:to-slate-800 text-gray-900 dark:text-white"
                      : "bg-gradient-to-br from-blue-300 to-purple-300 dark:from-slate-800 dark:to-slate-700 text-gray-900 dark:text-white"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-start justify-between">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white">
                        {suite.status}
                      </span>
                    </div>

                    <div className="mb-4 flex items-start gap-3">
                      <div className="rounded-xl bg-white/30 dark:bg-white/10 p-2.5">
                        <SuiteIcon className="w-5 h-5" />
                      </div>
                      <h3
                        className="text-xl font-bold leading-tight"
                        style={{ fontFamily: "var(--font-anton)" }}
                      >
                        {suite.title}
                      </h3>
                    </div>

                    <p className="text-sm mb-6 opacity-90">
                      {suite.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {suite.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
                          <span className="text-xs font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={isComingSoon ? "#" : "/product"}
                    className={`block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      isComingSoon
                        ? "bg-white/20 dark:bg-white/10 opacity-50 cursor-not-allowed"
                        : "bg-white/30 dark:bg-white/20 hover:bg-white/40 dark:hover:bg-white/30"
                    }`}
                  >
                    {suite.cta}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-surface-light dark:bg-surface-medium transition-theme">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-anton)" }}>
              Why Choose Fluxworks
            </h2>
            <p className="text-muted-foreground">
              Industry-leading technology and unmatched support
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Modular Architecture",
                description: "Pick and choose modules that fit your business without unnecessary complexity.",
                icon: Blocks,
              },
              {
                title: "Centralized Billing",
                description: "One dashboard for all subscriptions, payments, and invoices.",
                icon: BarChart3,
              },
              {
                title: "Role-Based Access",
                description: "Secure, granular access control puts you in complete command.",
                icon: ShieldCheck,
              },
              {
                title: "Cloud-Native",
                description: "Built on modern infrastructure with 99.9% uptime guarantee.",
                icon: Cloud,
              },
            ].map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-card dark:bg-card p-6 rounded-xl border border-border dark:border-border hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 dark:bg-accent/20 p-3 text-accent mt-1">
                      <FeatureIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 border-y border-border dark:border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join hundreds of businesses using Fluxworks to scale efficiently and stay ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent hover:bg-accent-dark text-accent-foreground font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Schedule Demo
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-card dark:bg-card hover:bg-surface-light dark:hover:bg-surface-medium text-foreground font-semibold border border-border dark:border-border transition-all duration-200"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
