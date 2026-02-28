"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-20"
        style={{
          background: "linear-gradient(180deg, #9CDBF5 0%, #B8E6F7 8.2%)",
        }}
      >
        <div className="max-w-7xl mx-6 py-16 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-xl text-[12px] mx-auto px-6">
            Have questions about our products? Want to schedule a demo? {"We'd"}{" "}
            love to hear from you. Fill out the form below and {"we'll"} get
            back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#f5f9fa]">
        <div className="max-w-7xl mx-12 px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-normal text-gray-900 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600 text-[12px] mb-8">
                Reach out to us through any of these channels.
                <br />
                Our team is ready to help.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#e0f0f4] p-3 rounded-full">
                    <svg
                      className="w-4 h-4 text-[#4a90a4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[13px] text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600 text-[13px]">
                      hello@Cloud-saas.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#e0f0f4] p-3 rounded-full">
                    <svg
                      className="w-4 h-4 text-[#4a90a4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[13px] text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-[13px]">
                      +1 (800) 123-4567
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#e0f0f4] p-3 rounded-full">
                    <svg
                      className="w-4 h-4 text-[#4a90a4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[13px] text-gray-900">
                      Office
                    </h3>
                    <p className="text-gray-600 text-[13px]">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 bg-[#f0f5f7] p-6 rounded-2xl">
                <h3 className="font-semibold text-[12px] text-gray-900 mb-3">
                  Working Hours
                </h3>
                <div className="space-y-1 text-[12px] text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-5 rounded-2xl shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                  Product Interested In
                </label>
                <select className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent bg-white text-gray-500">
                  <option>Select a product</option>
                  <option>Pharmacy Management Suite</option>
                  <option>Retail Suite</option>
                  <option>Clinic Management Suite</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your business and what you're looking for..."
                  className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent resize-none"
                />
              </div>

              <button className="w-full mt-4 bg-[#4a90a4] text-[12px] text-white py-1.5 rounded-lg font-medium hover:bg-[#3d7a8a] flex items-center justify-center gap-2">
                Send Message
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>

              <p className="text-center text-[11px] text-gray-500 mt-3">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-[#4a90a4] hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#4a90a4] hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f4f2ef] py-16 px-20 border-t border-gray-100 relative">
        {/* Wave Top */}
        <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-15"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 Q24,0 48,60 T96,60 T144,60 T192,60 T240,60 T288,60 T336,60 T384,60 T432,60 T480,60 T528,60 T576,60 T624,60 T672,60 T720,60 T768,60 T816,60 T864,60 T912,60 T960,60 T1008,60 T1056,60 T1104,60 T1152,60 T1200,60 T1248,60 T1296,60 T1344,60 T1392,60 T1440,60 L1440,120 L0,120 Z"
              fill="#f4f2ef"
            />
          </svg>
        </div>
        <div className="max-w-4xl px-20 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Newsletter Column */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[14px] text-black mb-3">
                Newsletter
              </h3>
              <p className="text-[12px] text-gray-600 mb-4">
                {
                  "We'd love to share our love for engineering with you in our monthly newsletter."
                }
              </p>
              <div className="flex items-center gap-0.5">
                <input
                  type="email"
                  placeholder="jane@domain.com"
                  className="flex-1 pl-2 py-1.5 bg-[#ebeae9] rounded-l-md text-[11px] placeholder:text-gray-400 focus:outline-none"
                />
                <button className="px-1 py-1.5 bg-[#ebeae9] rounded-r-md text-[11px] font-semibold hover:bg-gray-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-[14px] text-black mb-3">
                Company
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Privacy
                </a>
              </div>
            </div>

            {/* Social Column */}
            <div>
              <h3 className="font-semibold text-[14px] text-black mb-3">
                Social
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-[14px] text-black mb-3">
                Product
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Overview
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Changelog
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Book a demo
                </a>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-[14px] text-black mb-3">
                Resources
              </h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="block text-[12px] text-gray-600 hover:text-black"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
