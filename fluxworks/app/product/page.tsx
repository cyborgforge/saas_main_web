/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductPage() {
  const productScreens = [
    {
      src: "/laptop.png",
      title: "Operations Dashboard",
    },
    {
      src: "/system.png",
      title: "Insights & Reports",
    },
    {
      src: "/we_build_1.png",
      title: "Module Management",
    },
  ] as const;

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveScreenIndex((current) => (current + 1) % productScreens.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [productScreens.length]);

  const modules = [
    {
      name: "HRMS",
      description: "Fully integrated with the platform",
      icon: "users",
    },
    {
      name: "POS",
      description: "Fully integrated with the platform",
      icon: "credit-card",
    },
    {
      name: "Online Ordering & Delivery",
      description: "Fully integrated with the platform",
      icon: "truck",
    },
    {
      name: "Inventory Management",
      description: "Fully integrated with the platform",
      icon: "box",
    },
    {
      name: "Vendor Management",
      description: "Fully integrated with the platform",
      icon: "building",
    },
    {
      name: "User Management",
      description: "Fully integrated with the platform",
      icon: "user-check",
    },
    {
      name: "Employee Management",
      description: "Fully integrated with the platform",
      icon: "users",
    },
    {
      name: "Invoice & Billing",
      description: "Fully integrated with the platform",
      icon: "file-text",
    },
    {
      name: "Modern Website",
      description: "Fully integrated with the platform",
      icon: "globe",
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      users: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      "credit-card": (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      truck: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
      box: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      building: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      "user-check": (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      "file-text": (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      globe: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    };
    return icons[iconName] || icons["users"];
  };

  return (
    <div className="min-h-screen dark:bg-[#04070d]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-20"
        style={{
          background: "var(--marketing-hero-gradient)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-0.5 bg-[#0070A015] px-2 py-1 rounded-full text-xs mb-6">
                <span
                  className="text-yellow-600 inline-block"
                  style={{ transform: "rotate(270deg)" }}
                >
                  💊
                </span>
                <span className="text-[#0070A0] text-[11px]">
                  Available Now
                </span>
              </div>

              <h1
                className="text-4xl -mt-4 md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                Pharmacy
                <br />
                Management Suite
              </h1>

              <p className="text-gray-600 mb-8 text-[12px]">
                Complete pharmacy management solution with POS, inventory,
                online ordering, and delivery management. Streamline your
                pharmacy operations with our all-in-one platform.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-[#0070A0] text-[12px] text-white px-5 py-1.5 rounded-lg font-medium hover:bg-[#3d7a8a] flex items-center gap-2">
                  Request Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              className="relative mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl">
                {/* Browser Dots */}
                <div className="flex gap-1 p-3 bg-[#0070A0] rounded-t-2xl">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>

                <div className="p-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-[#F7F9FA] rounded-lg py-3">
                      <div className="text-xl font-bold text-gray-900">
                        2,847
                      </div>
                      <div className="text-xs text-gray-500">Orders</div>
                    </div>
                    <div className="text-center bg-[#F7F9FA] rounded-lg py-3">
                      <div className="text-xl font-bold text-gray-900">
                        $84.2K
                      </div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                    <div className="text-center bg-[#F7F9FA] rounded-lg py-3">
                      <div className="text-xl font-bold text-gray-900">
                        1,234
                      </div>
                      <div className="text-xs text-gray-500">Customers</div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-32 flex items-end bg-[#E8F5FA] p-3 rounded-lg gap-1.5 sm:gap-2">
                    {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-[#0070A0] rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Real-time Sync Badge - Positioned absolutely to overflow */}
                  <div className="absolute bottom-3 right-0 sm:-right-4">
                <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100">
                  <div className="bg-[#0070A0] p-1.5 rounded">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[13px] text-gray-900">
                      Real-time Sync
                    </div>
                    <div className="text-[10px] -mt-0.5 text-gray-500">
                      Across all devices
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Product Gallery */}
      <section className="py-16 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
            Product Gallery
          </h2>
          <p className="text-center text-[14px] text-gray-600 dark:text-gray-400 mb-10">
            Real screens from the suite, auto-playing for a quick preview.
          </p>

          <div className="rounded-3xl border border-[#D5E8F0] dark:border-white/10 bg-white dark:bg-[#0f0f0f] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,40,60,0.12)] dark:shadow-none">
            <div className="relative h-[240px] sm:h-[330px] md:h-[420px] overflow-hidden rounded-2xl bg-[#09273A]">
              {productScreens.map((screen, index) => (
                <motion.div
                  key={screen.src}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: activeScreenIndex === index ? 1 : 0,
                    scale: activeScreenIndex === index ? 1 : 1.04,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src={screen.src}
                    alt={screen.title}
                    className="w-full h-full object-contain bg-[#09273A]"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {screen.title}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {productScreens.map((screen, index) => (
                <button
                  key={screen.title}
                  type="button"
                  aria-label={`Go to ${screen.title}`}
                  onClick={() => setActiveScreenIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeScreenIndex === index
                      ? "w-8 bg-[#0070A0]"
                      : "w-2.5 bg-[#A9C5D1] hover:bg-[#88B1C2]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
            Modules Included
          </h2>
          <p className="text-center text-[14px] text-gray-600 dark:text-gray-400 mb-12">
            Everything you need to run your business, all in one place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="border border-[#F7F9FA] dark:border-white/10 bg-[#F7F9FA] dark:bg-[#0f0f0f] rounded-xl p-4 hover:border-[#4a90a4] dark:hover:border-cyan-500 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-[#4a90a4] dark:text-cyan-400 bg-[#CCEFF633] dark:bg-cyan-500/10 p-2 rounded-lg">
                    {getIcon(module.icon)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-[13px] text-gray-900 dark:text-white -mt-0.5">
                      {module.name}
                    </h5>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50 dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-3">
            How It Works
          </h2>
          <p className="text-center text-[14px] text-gray-600 dark:text-gray-400 mb-12">
            Get started in minutes with our simple onboarding process.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 relative">
            {[
              {
                step: "1",
                title: "Subscribe",
                description:
                  "Choose a plan that fits your business needs and subscribe.",
              },
              {
                step: "2",
                title: "Get Access",
                description:
                  "Receive your activation code instantly after payment.",
              },
              {
                step: "3",
                title: "Activate",
                description:
                  "Enter the code in the product to unlock full access.",
              },
              {
                step: "4",
                title: "Grow",
                description: "Start using all modules and scale as you grow.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#0070A0] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10">
                  {item.step}
                </div>
                {/* Connecting Line between steps */}
                {index < 3 && (
                  <div
                    className="absolute top-6 left-1/2 h-0.5 hidden md:block z-0"
                    style={{
                      background:
                        "linear-gradient(to right, #00719f 0%, #f5f9fb 100%)",
                      width: "calc(100% + 2rem)",
                    }}
                  ></div>
                )}
                <h3 className="font-semibold text-[13px] text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-[12px]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 mb-12 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-1">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
            Choose the plan that works best for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              className="bg-[#F7F9FA] dark:bg-[#0f0f0f] dark:border dark:border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">Starter</h3>
              <p className="text-gray-600 dark:text-gray-400 text-[10px] mb-4">
                Perfect for small businesses getting started
              </p>
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Contact Us
                </span>
                {/* <span className="text-gray-500 text-sm"> /per month</span> */}
              </div>
              <div className="space-y-1.5 mb-6">
                {[
                  "Up to 3 users",
                  "Core modules included",
                  "Email support",
                  "Basic analytics",
                  "Standard integrations",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[12px] text-gray-700 dark:text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 text-[#4a90a4] dark:text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block w-full bg-[#0070A0] hover:bg-[#005a8a] dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white py-1.5 text-sm rounded-lg font-medium text-center transition-colors">
                Get Started
              </Link>
            </motion.div>

            {/* Growth Plan */}
            <motion.div
              className="rounded-2xl -mt-6 p-6 relative bg-gray-900 dark:bg-[#1a1a1a] dark:border dark:border-cyan-600/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 dark:bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="font-bold text-xl text-white mb-1">Growth</h3>
              <p className="text-gray-400 dark:text-gray-400 text-[10px] mb-4">
                For growing businesses with expanding needs
              </p>
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">
                  Contact Us
                </span>
                {/* <span className="text-gray-400 text-sm"> /per month</span> */}
              </div>
              <div className="space-y-1.5 mb-6">
                {[
                  "Up to 15 users",
                  "All modules included",
                  "Priority support",
                  "Advanced analytics",
                  "Custom integrations",
                  "API access",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[12px] text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block w-full bg-white dark:bg-cyan-500 hover:bg-gray-100 dark:hover:bg-cyan-600 py-1.5 text-sm rounded-lg font-medium text-center text-gray-900 dark:text-white transition-colors">
                Most Popular
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              className="bg-[#F7F9FA] dark:bg-[#0f0f0f] dark:border dark:border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                Enterprise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-[10px] mb-4">
                Custom solutions for large organizations
              </p>
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Contact Us
                </span>
                {/* <span className="text-gray-500 text-sm"> /custom</span> */}
              </div>
              <div className="space-y-1.5 mb-6">
                {[
                  "Unlimited users",
                  "Custom modules",
                  "24/7 dedicated support",
                  "White-label options",
                  "On-premise deployment",
                  "SLA guarantee",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[12px] text-gray-700 dark:text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 text-[#4a90a4] dark:text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block w-full bg-[#0070A0] hover:bg-[#005a8a] dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white py-1.5 rounded-lg text-sm font-medium text-center transition-colors">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
