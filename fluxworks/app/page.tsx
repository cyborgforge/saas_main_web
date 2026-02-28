"use client";

import { motion } from "framer-motion";

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
        <div className="max-w-7xl mx-6 px-8 pt-10 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Blue Server Icon */}
              <div className="bg-[#4a90a4] p-3 rounded-2xl shadow-lg w-fit -mt-10 ml-[460px]">
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

              <h1 className="text-5xl lg:text-5xl -mt-12 font-extrabold text-gray-900 leading-none">
                We build scalable
                <br />
                SaaS products
                <br />
                for modern
                <br />
                businesses
              </h1>
              <div className="flex gap-3 pt-2">
                <button className="bg-white text-gray-900 text-sm px-5 py-1.5 rounded-lg font-medium hover:bg-gray-100 shadow-md border border-gray-200">
                  View Products
                </button>
                <button className="bg-transparent text-gray-900 text-sm px-5 py-1.5 rounded-lg font-medium hover:bg-black/5 border border-gray-400">
                  Book a Demo
                </button>
              </div>
            </motion.div>

            {/* Right Content - Hero Image and Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[450px]"
            >
              {/* Yellow/Teal Striped Background Circle */}
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] overflow-hidden rounded-full">
                <div className="absolute inset-0" style={{
                  background: 'repeating-linear-gradient(45deg, #e5d68a 0px, #e5d68a 25px, #5b9aa0 25px, #5b9aa0 50px)'
                }}>
                </div>
              </div> */}

              {/* Person Image */}
              <div className="absolute top-52 left-40 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-[280px] h-[350px] flex items-center justify-center relative">
                  <img
                    src="/Person.png"
                    alt="Person smiling"
                    className="w-full h-full object-cover rounded-b-full"
                  />
                </div>
              </div>

              {/* 5 Star Rating */}
              <motion.div
                className="absolute bottom-58 -left-12 bg-white px-4 py-2 rounded-xl shadow-xl z-30"
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
                className="absolute top-2 bg-white p-2 right-8 rounded-2xl shadow-xl w-36 z-30"
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
                className="absolute bottom-4 right-0 bg-white p-4 rounded-2xl shadow-xl w-52 z-30"
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
          className="w-[94%] ml-auto rounded-tl-[100px] px-6 pt-6 pb-24 relative"
          style={{
            background:
              "linear-gradient(to bottom, #e8f0ec 0%, #c8ddd2 40%, #a8ccbe 100%)",
          }}
        >
          <div className="flex justify-center">
            <h2
              style={{
                fontFamily: "var(--font-anton)",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "100px",
                lineHeight: "158px",
                WebkitTextStroke: "1.75px #8591FF",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              WE BUILD
            </h2>
          </div>

          {/* Blur fade effect at bottom extending into wave */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(184, 220, 232, 0.6) 50%, rgba(123, 168, 212, 0.9) 100%)",
              filter: "blur(24px)",
            }}
          ></div>

          <div className="grid md:grid-cols-4 -mt-18">
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
              d="M0,60 Q24,0 48,60 T96,60 T144,60 T192,60 T240,60 T288,60 T336,60 T384,60 T432,60 T480,60 T528,60 T576,60 T624,60 T672,60 T720,60 T768,60 T816,60 T864,60 T912,60 T960,60 T1008,60 T1056,60 T1104,60 T1152,60 T1200,60 T1248,60 T1296,60 T1344,60 T1392,60 T1440,60 L1440,120 L0,120 Z"
              fill="#06181E"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-medium text-center text-white mb-12"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Our Products
          </h2>

          {/* First Row - 2 Cards */}
          <div className="flex justify-center gap-6 mb-6">
            {/* Pharmacy Management Suite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#A6CAFE] rounded-lg"
              style={{ width: "460px", padding: "24px" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col" style={{ width: "65%" }}>
                  <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                    Active
                  </div>
                  <h3
                    className="text-2xl text-gray-900 mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    Pharmacy
                    <br />
                    Management Suite
                  </h3>
                  <p className="text-xs text-gray-700 mb-6">
                    Complete pharmacy solution with POS, inventory, online
                    ordering, and delivery
                  </p>
                  <button className="bg-gray-900 text-white py-2.5 px-6 rounded-4xl text-sm font-medium hover:bg-gray-800 mt-auto">
                    View Product
                  </button>
                </div>
                <div
                  className="flex flex-col justify-center"
                  style={{ width: "35%" }}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">HRMS</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">POS</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Inventory</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Online Ordering</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Delivery</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Retail Suite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#A6CAFE] rounded-lg"
              style={{ width: "460px", padding: "24px" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col" style={{ width: "65%" }}>
                  <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                    Soon
                  </div>
                  <h3
                    className="text-2xl text-gray-900 mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    Retail
                    <br />
                    Suite
                  </h3>
                  <p className="text-xs text-gray-700 mb-6">
                    Multi-store retail management with inventory sync and
                    customer analytics
                  </p>
                  <button className="bg-gray-900 text-white py-2.5 px-6 rounded-4xl text-sm font-medium hover:bg-gray-800 mt-auto">
                    Coming soon
                  </button>
                </div>
                <div
                  className="flex flex-col justify-center"
                  style={{ width: "35%" }}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Multi-Store</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">CRM</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Inventory</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Online Ordering</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Analytics</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 1 Card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#A6CAFE] rounded-lg"
              style={{ width: "460px", padding: "24px" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col" style={{ width: "65%" }}>
                  <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                    Active
                  </div>
                  <h3
                    className="text-2xl text-gray-900 mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    Clinic Management
                    <br />
                    Suite
                  </h3>
                  <p className="text-xs text-gray-700 mb-6">
                    Healthcare practice management with appointments and patient
                    records
                  </p>
                  <button className="bg-gray-900 text-white py-2.5 px-6 rounded-4xl text-sm font-medium hover:bg-gray-800 mt-auto">
                    View Product
                  </button>
                </div>
                <div
                  className="flex flex-col justify-center"
                  style={{ width: "35%" }}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">EMR</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Prescription</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Billing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-900">Appointments</span>
                    </div>
                  </div>
                </div>
              </div>
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
        <div className="flex items-center gap-16 animate-scroll">
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
        <div className="max-w-4xl mx-auto px-6 text-center">
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

          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
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
        <div className="max-w-4xl mx-auto px-6">
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
          <div className="grid grid-cols-4 gap-6 text-center">
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
        <div className="w-[94%] mr-auto rounded-tr-[100px] relative overflow-hidden">
          {/* Gradient area with heading and button */}
          <div
            className="relative py-20 px-6 pb-16 overflow-hidden"
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

            <div className="max-w-4xl ml-10 px-8 mx-auto relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-black mb-8">
                Ready to go? Start
                <br />
                Building together.
              </h2>
              <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors">
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
              </button>
            </div>
          </div>

          {/* Footer - white background */}
          <div className="bg-white py-16 px-20">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
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
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </div>
                </div>

                {/* Social Column */}
                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Social
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Discord
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Product Column */}
                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Product
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Overview
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Roadmap
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Changelog
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Book a demo
                    </a>
                  </div>
                </div>

                {/* Resources Column */}
                <div>
                  <h3 className="font-semibold text-[14px] text-gray-900 mb-3">
                    Resources
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="block text-[12px] text-gray-700 hover:text-gray-900"
                    >
                      Contact us
                    </a>
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
