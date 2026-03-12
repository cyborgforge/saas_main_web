/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-20"
        style={{
          background:
            "linear-gradient(180deg, #698f79 0%, #4a7e7c 30%, #2a6e7e 60%, #0e5e7f 100%)",
        }}
      >
        {/* Simple basic background glow designs correctly scaled to full section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute top-[-5%] left-[-10%] w-96 h-96 bg-[#85a794]/40 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-teal-200/20 blur-[80px] rounded-full"></div>

          {/* Background wireframe abstract circle */}
          <div className="absolute top-[10%] -right-10 w-[300px] h-[300px] rounded-full border border-white/10 md:hidden pointer-events-none z-0"></div>
          <div className="absolute top-[15%] -left-16 w-[200px] h-[200px] rounded-full border border-white/5 md:hidden pointer-events-none z-0"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10 relative">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-6 flex flex-col items-center md:items-start text-center md:text-left py-10 md:py-0 relative"
            >
              {/* Blue Server Icon */}
              <div className="hidden md:block bg-[#4a90a4] p-3 rounded-2xl shadow-lg w-fit -mt-10 md:ml-[260px] lg:ml-[460px]">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                  <circle cx="7" cy="7" r="1" fill="white" />
                  <circle cx="7" cy="12" r="1" fill="white" />
                  <circle cx="7" cy="17" r="1" fill="white" />
                </svg>
              </div>

              {/* Mobile-only background geometric elements (pure shapes, no text) */}
              {/* Top abstract shape grid */}
              <div className="absolute top-[-30px] right-4 md:hidden flex gap-2 pointer-events-none z-0 opacity-40">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              </div>

              {/* Above-text swoosh */}
              <div className="absolute top-[10%] left-[8%] w-12 h-1 bg-gradient-to-r from-teal-300/40 to-transparent rounded-full md:hidden pointer-events-none z-0 transform rotate-[-15deg]"></div>

              {/* Floating shapes behind text */}
              <div className="absolute top-[28%] right-[10%] w-16 h-16 rounded-full border-[2px] border-white/10 md:hidden pointer-events-none z-0"></div>
              <div className="absolute top-[45%] left-[5%] w-14 h-14 rounded-full bg-teal-300/20 blur-[14px] md:hidden pointer-events-none z-0"></div>
              <div className="absolute bottom-[25%] right-[2%] w-20 h-20 rounded-[14px] border-[1px] border-white/10 rotate-[25deg] md:hidden pointer-events-none z-0"></div>


              {/* Sparkle */}
              <div className="absolute top-[18%] left-[75%] md:hidden pointer-events-none z-0">
                <svg className="w-5 h-5 text-yellow-300/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.885 9.115L22 12L14.885 14.885L12 22L9.115 14.885L2 12L9.115 9.115L12 2Z" />
                </svg>
              </div>

              <h1 className="text-[44px] sm:text-5xl lg:text-5xl xl:text-6xl -mt-2 md:-mt-12 text-gray-900 leading-[1.05] tracking-tight relative z-10" style={{ fontFamily: "var(--font-anton)" }}>
                We build scalable
                <br />
                SaaS products
                <br />
                for modern
                <br />
                businesses
              </h1>
              <p className="text-gray-800 md:hidden text-[15px] font-medium px-4 leading-relaxed max-w-[320px]">
                Empower your business with our cutting-edge SaaS platforms designed for scalability and performance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 w-full sm:w-auto px-6 sm:px-0">
                <Link href="/product" className="w-full sm:w-auto text-center bg-white text-gray-900 text-sm px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] border border-gray-200 transition-all hover:scale-105 active:scale-95">
                  View Products
                </Link>
                <Link href="/contact" className="w-full sm:w-auto text-center bg-white/20 backdrop-blur-md text-gray-900 text-sm px-8 py-3.5 rounded-full font-bold hover:bg-white/30 border border-white/40 transition-all hover:scale-105 active:scale-95 shadow-sm">
                  Book a Demo
                </Link>
              </div>
            </motion.div>


            {/* Desktop Only Content - Hero Image and Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative h-[360px] sm:h-[420px] md:h-[450px] mt-6 md:mt-0 max-w-[400px] md:max-w-none mx-auto w-full z-20"
            >
              {/* Yellow/Teal Striped Background Circle */}
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] overflow-hidden rounded-full">
                <div className="absolute inset-0" style={{
                  background: 'repeating-linear-gradient(45deg, #e5d68a 0px, #e5d68a 25px, #5b9aa0 25px, #5b9aa0 50px)'
                }}>
                </div>
              </div> */}

              {/* Person Image */}

              <div className="absolute inset-0 flex items-center justify-center md:top-1/2 md:left-1/2 md:inset-auto md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                <div className="w-60 h-72 sm:w-[400px] sm:h-[500px] md:w-[480px] md:h-[600px] flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/Person.png"
                    alt="Person smiling"
                    className="w-full h-full object-contain object-bottom rounded-b-[40px] md:rounded-b-[60px]"
                  />
                </div>
              </div>

              {/* 5 Star Rating */}
              <motion.div
                className="absolute bottom-12 sm:bottom-20 left-0 sm:left-4 bg-white/70 backdrop-blur-xl saturate-150 border border-white/50 px-4 py-2.5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] z-30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex gap-0.5 text-yellow-400 text-lg">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </motion.div>

              {/* Total Projects Card */}
              <motion.div
                className="absolute top-0 right-0 sm:right-4 bg-white/70 backdrop-blur-xl saturate-150 border border-white/50 p-3 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] w-36 sm:w-40 z-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="space-y-2">
                  <div className="text-[12px] text-gray-600 font-medium">
                    Total Projects
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-1xl font-bold text-gray-900">38</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      <div className="w-1 h-1 -mt-1 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-[10px] -mt-3 text-gray-500">
                    <p>Views</p>
                  </div>
                  <div className="flex gap-1 h-12 items-end pt-2">
                    <div
                      className="w-4 bg-blue-600 rounded-t"
                      style={{ height: "35%" }}
                    ></div>
                    <div
                      className="w-4 bg-blue-400 rounded-t"
                      style={{ height: "55%" }}
                    ></div>
                    <div
                      className="w-4 bg-blue-600 rounded-t"
                      style={{ height: "25%" }}
                    ></div>
                    <div
                      className="w-4 bg-blue-600 rounded-t"
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className="w-4 bg-blue-400 rounded-t"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="w-4 bg-blue-600 rounded-t"
                      style={{ height: "65%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-700 flex items-center gap-1.5 pt-1 border-t border-gray-100">
                    <svg
                      className="w-3 h-3 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                    <span className="font-medium text-[10px]">
                      Projects Management
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Growth Chart Card */}
              <motion.div
                className="absolute bottom-4 -right-2 sm:right-0 bg-white/70 backdrop-blur-xl saturate-150 border border-white/50 p-4 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] w-48 sm:w-56 z-30"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-sm font-bold mb-2 text-gray-900">
                  Growth
                </div>
                <div className="h-16 relative mb-2">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 64"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#93c5fd"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#93c5fd"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 50 Q 30 45 60 40 Q 90 35 120 28 Q 150 20 180 15 L 200 12 L 200 64 L 0 64 Z"
                      fill="url(#gradient)"
                    />
                    <path
                      d="M 0 50 Q 30 45 60 40 Q 90 35 120 28 Q 150 20 180 15 L 200 12"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="28" r="3" fill="#3b82f6" />
                    <circle cx="180" cy="15" r="3" fill="#3b82f6" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between text-[9px] text-gray-400 font-medium">
                  <span>67</span>
                  <span>73</span>
                  <span>53</span>
                  <span>47</span>
                  <span>39</span>
                  <span>27</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WE BUILD Section */}
      <section
        className=" relative"
        style={{
          background:
            "linear-gradient(180deg, #0e5e7f 0%, #1a6e88 30%, #2a7e90 60%, #3a8e98 100%)",
        }}
      >
        {/* Wave Top */}
        {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-1">
          <svg
            className="relative block w-full h-12"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q300,40 600,20 T1200,0 L1200,0 L0,0 Z"
              fill="#a8d4c8"
            ></path>
          </svg>
        </div> */}

        <div
          className="w-full md:w-[94%] md:ml-auto rounded-tl-[60px] md:rounded-tl-[100px] px-4 sm:px-6 pt-10 pb-16 md:pt-6 md:pb-24 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, #e8f0ec 0%, #c8ddd2 40%, #a8ccbe 100%)",
          }}
        >
          <div className="flex justify-center relative z-0">
            <h2
              className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] leading-none pointer-events-none"
              style={{
                fontFamily: "var(--font-anton)",
                fontStyle: "normal",
                fontWeight: 400,
                WebkitTextStroke: "3px rgba(133, 145, 255, 0.6)",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                letterSpacing: "-0.02em"
              }}
            >
              WE BUILD
            </h2>
          </div>

          {/* Blur fade effect at bottom extending into wave */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(184, 220, 232, 0.6) 50%, rgba(123, 168, 212, 0.9) 100%)",
              filter: "blur(24px)",
            }}
          ></div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-6 mt-4 md:-mt-16 lg:-mt-24 xl:-mt-32 px-2 sm:px-4 relative z-10">
            {/* POS & Billing Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 text-center space-y-4"
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/we_build_1.png"
                  alt="POS & Billing Systems"
                  className="w-full h-52 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-4">
                POS & Billing
                <br />
                Systems
              </h3>
              <p className="text-[10px] text-gray-700">
                Complete point-of-sale solutions with integrated billing and
                invoicing
              </p>
            </motion.div>

            {/* Inventory Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 text-center space-y-4"
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/we_build_2.png"
                  alt="Inventory Management"
                  className="w-full h-52 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-4">
                Inventory
                <br />
                Management
              </h3>
              <p className="text-[10px] text-gray-700">
                Real-time stock tracking and automated reordering systems
              </p>
            </motion.div>

            {/* Online Ordering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 text-center space-y-4"
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/we_build_3.png"
                  alt="Online Ordering"
                  className="w-full h-52 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-4">
                Online
                <br />
                Ordering
              </h3>
              <p className="text-[10px] text-gray-700">
                E-commerce integration with web and mobile ordering platforms
              </p>
            </motion.div>

            {/* HRM's and User Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 text-center space-y-4"
            >
              <div className="flex justify-center mb-4">
                <img
                  src="/we_build_4.png"
                  alt="HRM's and User Management"
                  className="w-full h-52 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-4">
                {"HRM's and User"}
                <br />
                Management
              </h3>
              <p className="text-[10px] text-gray-700">
                Employee management, attendance, and role-based access control
              </p>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Our Products Section */}
      <section className="bg-[#06181E] py-16 relative">
        {/* Wave Top */}
        <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-15"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 Q90,0 180,60 T360,60 T540,60 T720,60 T900,60 T1080,60 T1260,60 T1440,60 L1440,120 L0,120 Z"
              fill="#06181E"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            className="text-4xl font-medium text-center text-white mb-12"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Our Products
          </h2>

          {/* First Row - 2 Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-1 mb-4">
            {/* Pharmacy Management Suite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#A4C8FF] rounded-xl w-full max-w-[500px] mx-auto flex flex-col justify-between"
              style={{ padding: "32px 32px 24px 32px" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col" style={{ width: "65%" }}>
                  <div className="inline-block border border-gray-600 px-4 py-1.5 rounded-[40px] text-[11px] font-semibold text-gray-700 tracking-wide mb-6 w-fit">
                    Active
                  </div>
                  <h3
                    className="text-[32px] text-gray-900 mb-6 leading-[1.1] tracking-tight"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    Pharmacy
                    <br />
                    Management Suite
                  </h3>
                  <p className="text-[12px] text-[#2d3748] mb-8 pr-4">
                    Complete pharmacy solution with POS, inventory, online
                    ordering, and delivery
                  </p>
                </div>
                <div
                  className="flex flex-col pt-12"
                  style={{ width: "35%" }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">HRMS</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">POS</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Inventory</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Online Ordering</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Billing</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/product" className="w-full block text-center bg-[#0a1922] text-[#f4f4f4] py-3 rounded-full text-xs font-semibold hover:bg-black transition-colors mt-auto shadow-md">
                View Product
              </Link>
            </motion.div>

            {/* Retail Suite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#A4C8FF] rounded-xl w-full max-w-[500px] mx-auto flex flex-col justify-between"
              style={{ padding: "32px 32px 24px 32px" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col" style={{ width: "65%" }}>
                  <div className="inline-block border border-gray-600 px-4 py-1.5 rounded-[40px] text-[11px] font-semibold text-gray-700 tracking-wide mb-6 w-fit">
                    Soon
                  </div>
                  <h3
                    className="text-[32px] text-gray-900 mb-6 leading-[1.1] tracking-tight"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    Retail
                    <br />
                    Suite
                  </h3>
                  <p className="text-[12px] text-[#2d3748] mb-8 pr-4">
                    Multi-store retail management with inventory sync and
                    customer analytics
                  </p>
                </div>
                <div
                  className="flex flex-col pt-12"
                  style={{ width: "35%" }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Multi-Store</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">CRM</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Inventory</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Online Ordering</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Billing</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#0a1922] text-[#f4f4f4] py-3 rounded-full text-xs font-semibold hover:bg-black transition-colors mt-auto shadow-md">
                Coming soon
              </button>
            </motion.div>
          </div>

          {/* Second Row - 1 Card */}
          <div className="flex justify-center mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#A4C8FF] rounded-xl w-full max-w-[600px] mx-auto flex flex-col justify-between"
              style={{ padding: "32px 32px 24px 32px" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col" style={{ width: "65%" }}>
                  <div className="inline-block border border-gray-600 px-4 py-1.5 rounded-[40px] text-[11px] font-semibold text-gray-700 tracking-wide mb-6 w-fit">
                    Active
                  </div>
                  <h3
                    className="text-[32px] text-gray-900 mb-6 leading-[1.1] tracking-tight"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    Clinic Management
                    <br />
                    Suite
                  </h3>
                  <p className="text-[12px] text-[#2d3748] mb-8 pr-4">
                    Healthcare practice management with appointments and patient
                    records
                  </p>
                </div>
                <div
                  className="flex flex-col pt-12"
                  style={{ width: "35%" }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">EMR</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Prescription</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Billing</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <svg className="w-3.5 h-3.5 text-blue-600/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d3748] font-medium">Appointments</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/product" className="w-full block text-center bg-[#0a1922] text-[#f4f4f4] py-3 rounded-full text-xs font-semibold hover:bg-black transition-colors mt-auto shadow-md">
                View Product
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="bg-[#06181E] py-8 overflow-hidden">
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
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex items-center gap-10 sm:gap-16 animate-scroll px-6">
          <div className="flex-shrink-0">
            <img src="/item_1.png" alt="Partner 1" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_2.png" alt="Partner 2" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_3.png" alt="Partner 3" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_4.png" alt="Partner 4" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_5.png" alt="Partner 5" className="h-8 w-auto" />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex-shrink-0">
            <img src="/item_1.png" alt="Partner 1" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_2.png" alt="Partner 2" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_3.png" alt="Partner 3" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_4.png" alt="Partner 4" className="h-8 w-auto" />
          </div>
          <div className="flex-shrink-0">
            <img src="/item_5.png" alt="Partner 5" className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-[#06181E] py-16">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#06181E] py-16">
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500"
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
                  <h3 className="font-semibold text-sm mb-1 text-gray-900">
                    Modular Product Architecture
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Pick and choose the modules you need. Scale up as your
                    business grows without disrupting existing workflows.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Centralized Billing & Subscriptions */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500"
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
                  <h3 className="font-semibold text-sm mb-1 text-gray-900">
                    Centralized Billing & Subscriptions
                  </h3>
                  <p className="text-gray-600 text-xs">
                    One dashboard to manage all your subscriptions, payments,
                    and invoices across all products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Activation-Based Access Control */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900">
                    Activation-Based Access Control
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Secure, role-based access system that puts you in control of
                    who can use what and when.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Scalable & Future-Ready */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-gray-900">
                    Scalable & Future-Ready
                  </h3>
                  <p className="text-gray-600 text-xs">
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
              <div className="text-3xl font-bold text-teal-500 mb-1">50+</div>
              <div className="text-gray-500 text-[12px]">Modules Available</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="text-3xl font-bold text-teal-500 mb-1">99.9%</div>
              <div className="text-gray-500 text-[12px]">Uptime SLA</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="text-3xl font-bold text-amber-500 mb-1">
                {"<"}2min
              </div>
              <div className="text-gray-500 text-[12px]">Avg. Response Time</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="text-3xl font-bold text-amber-500 mb-1">24/7</div>
              <div className="text-gray-500 text-[12px]">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden"
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
              className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
              style={{
                background: "radial-gradient(circle at 70% 70%, #D4A0D8 0%, #B87AD4 30%, transparent 65%)",
                opacity: 0.5,
              }}
            />
            {/* White gradient at the bottom to merge seamlessly with the footer */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            <div className="max-w-4xl md:ml-10 md:px-8 mx-auto relative z-10">
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-black mb-6 md:mb-8">
                Ready to go? Start
                <br />
                Building together.
              </h2>
              <Link href="/contact" className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                <span className="font-semibold text-[14px]">Request Demo</span>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Footer - white background */}
          <div className="bg-white py-12 md:py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
                {/* Newsletter Column */}
                <div className="col-span-2">
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Newsletter
                  </h3>
                  <p className="text-[12px] text-gray-700 mb-4">
                    {
                      "We'd love to share our love for engineering with you in our monthly newsletter."
                    }
                  </p>
                  <div className="flex items-center gap-0.5">
                    <input
                      type="email"
                      placeholder="jane@domain.com"
                      className="flex-1 pl-2 py-1.5 bg-gray-800/20 rounded-l-md text-[11px] text-gray-900 placeholder:text-gray-600 focus:outline-none"
                    />
                    <button className="px-1 py-1.5 bg-gray-800/20 rounded-r-md text-[11px] font-semibold text-gray-900 hover:bg-gray-800/30">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Company Column */}
                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Company
                  </h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-[12px] text-gray-700 hover:text-gray-900">Blog</a>
                    <a href="#" className="block text-[12px] text-gray-700 hover:text-gray-900">Careers</a>
                    <Link href="/contact" className="block text-[12px] text-gray-700 hover:text-gray-900">Contact</Link>
                  </div>
                </div>

                {/* Social Column */}
                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Social
                  </h3>
                  <div className="space-y-2">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="block text-[12px] text-gray-700 hover:text-gray-900">Twitter</a>
                    <a href="https://discord.com" target="_blank" rel="noreferrer" className="block text-[12px] text-gray-700 hover:text-gray-900">Discord</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block text-[12px] text-gray-700 hover:text-gray-900">LinkedIn</a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Product
                  </h3>
                  <div className="space-y-2">
                    <Link href="/product" className="block text-[12px] text-gray-700 hover:text-gray-900">Overview</Link>
                    <a href="#" className="block text-[12px] text-gray-700 hover:text-gray-900">Roadmap</a>
                    <a href="#" className="block text-[12px] text-gray-700 hover:text-gray-900">Changelog</a>
                    <Link href="/contact" className="block text-[12px] text-gray-700 hover:text-gray-900">Book a demo</Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Resources
                  </h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-[12px] text-gray-700 hover:text-gray-900">Documentation</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="block text-[12px] text-gray-700 hover:text-gray-900">GitHub</a>
                    <Link href="/contact" className="block text-[12px] text-gray-700 hover:text-gray-900">Contact us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
