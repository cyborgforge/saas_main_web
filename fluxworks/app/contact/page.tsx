"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-20"
        style={{
          background: "linear-gradient(180deg, #9CDBF5 0%, #B8E6F7 8.2%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
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
                      fluxworks.it@gmail.com
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
                      +91 9363400322
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
                      First Floor, No.176A, Palai Road, Thoothukudi District,
                      <br />
                      Tamil Nadu-628008
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
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            {/* Contact Form */}
            <motion.form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                setStatus('submitting');

                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    setStatus('success');
                    form.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                  } else {
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                  }
                } catch (error) {
                  console.error(error);
                  setStatus('error');
                  setTimeout(() => setStatus('idle'), 5000);
                }
              }}
              className="bg-white p-5 rounded-2xl shadow-sm relative"
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
                    name="name"
                    required
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
                    name="businessName"
                    required
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
                    name="phone"
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
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                  Product Interested In
                </label>
                <select name="product" className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent bg-white text-gray-500">
                  <option value="">Select a product</option>
                  <option value="Pharmacy Management Suite">Pharmacy Management Suite</option>
                  <option value="Retail Suite">Retail Suite</option>
                  <option value="Clinic Management Suite">Clinic Management Suite</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Tell us about your business and what you're looking for..."
                  className="w-full px-2.5 py-1.5 text-[12px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90a4] focus:border-transparent resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 text-[12px] rounded-lg border border-green-200 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message sent successfully! We&apos;ll be in touch soon.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-[12px] rounded-lg border border-red-200 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Failed to send message. Please try again later.
                </div>
              )}

              <button disabled={status === 'submitting'} type="submit" className="w-full mt-4 bg-[#4a90a4] text-[12px] text-white py-1.5 rounded-lg font-medium hover:bg-[#3d7a8a] disabled:bg-[#4a90a4]/70 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                {status !== 'submitting' && (
                  <svg
                    className="w-4 h-4 rotate-90"
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
                )}
              </button>

            </motion.form>
          </div>
        </div>
      </section>

    </div>
  );
}
