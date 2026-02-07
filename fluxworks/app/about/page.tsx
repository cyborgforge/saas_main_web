"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I love working at CloudSite because of the people and the ability to work with multiple teams. Having the ability to work cross-functionally and being part of something growing is so exciting.",
      name: "Courtney Jamison",
      role: "Enterprise Customer Success Manager",
      location: "Cambridge",
    },
  ];

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pb-20"
        style={{
          background: "linear-gradient(180deg, #9CDBF5 0%, #B8E6F7 8.2%)",
        }}
      >
        {/* Header */}
        <header className="relative mx-6">
          <div className="bg-[#dbf4ff] mx-6 mt-4 rounded-full px-5 py-2.5 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/" className="text-base font-bold text-gray-900">
                FluxWorks
              </Link>
              <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                <Link
                  href="/"
                  className="text-[12px] text-gray-900 hover:text-gray-700 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className="text-[12px] text-gray-900 hover:text-gray-700 font-medium"
                >
                  Product
                </Link>
                <Link
                  href="/about"
                  className="text-[12px] text-gray-900 hover:text-gray-700 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-[12px] text-gray-900 hover:text-gray-700 font-medium"
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="text-[12px] border border-[#80A4A9] text-gray-900 hover:text-gray-700 flex items-center gap-1 px-4 py-1.5 hover:bg-black/5 rounded-full transition-colors font-medium"
                  >
                    Log In
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      <button className="w-full text-left px-4 py-2 text-[12px] text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                        Log In
                      </button>
                      <button className="w-full text-left px-4 py-2 text-[12px] text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
                <button className="bg-[#95C4DC] text-[12px] px-5 py-2 rounded-full hover:bg-[#3d7a8a] font-medium">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-12 pt-10 relative">
          {/* Megaphone Icon - Left Side */}
          <div className="absolute left-20 top-8/12 -translate-y-1/2 w-48 h-48 pointer-events-none">
            <img
              src="/cursor.png"
              alt="Cursor"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Chat Bubble Icon - Top Right */}
          <div className="absolute right-15 top-0 w-48 h-48 pointer-events-none">
            <img
              src="/message.png"
              alt="Message"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <span className="bg-[#0070A015] text-[#0070A0] text-xs font-medium px-4 py-1.5 rounded-full">
                About CloudSite
              </span>
            </div>

            <h1
              className="text-5xl -mt-3 md:text-6xl font-bold text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Building the future of <br /> business software
            </h1>

            <div className="max-w-105 -mt-5 mx-auto text-left">
              <p className="text-gray-600 text-[12px] mb-6">
                {
                  "We're a team of passionate engineers, designers, and business experts dedicated to creating software that makes a difference. Our mission is to empower businesses of all sizes with enterprise-grade tools that are accessible, affordable, and easy to use."
                }
              </p>
              <p className="text-gray-600 text-[12px]">
                {
                  "Founded in 2019, we've grown from a small startup to a trusted partner for over 1000 businesses worldwide. But we're just getting started."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section with Images */}
      <section className="py-16 bg-[#dce1ff] relative">
        {/* Wave Top */}
        <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-15"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 Q24,0 48,60 T96,60 T144,60 T192,60 T240,60 T288,60 T336,60 T384,60 T432,60 T480,60 T528,60 T576,60 T624,60 T672,60 T720,60 T768,60 T816,60 T864,60 T912,60 T960,60 T1008,60 T1056,60 T1104,60 T1152,60 T1200,60 T1248,60 T1296,60 T1344,60 T1392,60 T1440,60 L1440,120 L0,120 Z"
              fill="#dce1ff"
            />
          </svg>
        </div>
        <div className="max-w-6xl mx-6 px-12">
          <h2
            className="font-serif text-center text-4xl font-normal text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Our values
          </h2>
          <p className="text-gray-600 text-[12px] text-center mb-12 max-w-2xl mx-auto">
            {
              "These values guide how we work together every day. They don't just sit in a dusty document—they evolve and change as our company grows, and we love rewarding teammates who best exemplify them (with prizes 🏆)."
            }
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Values List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-900">
                    Take pride in your work
                  </h3>
                  <p className="text-gray-600 text-[13px]">
                    {
                      "Be bold and aspire for excellence. Let's build a lasting company."
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-900">
                    Be an owner
                  </h3>
                  <p className="text-gray-600 text-[13px]">
                    Owners sweep the floors and take out the trash. They do{" "}
                    {"what's"} best for the customer and company, and are always
                    accountable to their teammates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-900">
                    Always be learning
                  </h3>
                  <p className="text-gray-600 text-[13px]">
                    Improve every day; feedback and reflection will make us all
                    better.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-900">
                    Empower others
                  </h3>
                  <p className="text-gray-600 text-[13px]">
                    {
                      "We exist to empower customers; we'll succeed by empowering each other."
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-900">
                    Embrace the journey
                  </h3>
                  <p className="text-gray-600 text-[13px]">
                    Appreciate the entire experience, win as a team, and have
                    fun.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="rounded-md object-cover w-48 h-52"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                alt="Team meeting"
                className="rounded-md object-cover w-48 h-52"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Team discussion"
                className="rounded-md object-cover w-48 h-52"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                alt="Team working"
                className="rounded-md object-cover w-48 h-52"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#020c1c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#121627] rounded-2xl p-4 md:p-8">
            <div className="flex items-center justify-between gap-8">
              {/* Left Arrow */}
              <button
                onClick={handlePrevious}
                className="flex-shrink-0 hover:opacity-70 transition-opacity"
              >
                <svg
                  className="w-8 h-8 text-[#6366F1]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Center Content */}
              <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-50 md:h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4A261] to-[#E76F51]">
                    <img
                      src="/person_image.png"
                      alt={testimonials[testimonialIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML =
                          '<svg class="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mt-8 md:mt-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>';
                      }}
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 -mt-6 md:text-left">
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 text-[#6366F1] -ml-2 rotate-180"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="text-white text-base md:text-sm mb-6 leading-relaxed">
                    {testimonials[testimonialIndex].quote}
                  </p>
                  <div>
                    <div className="text-white font-semibold text-lg mb-2">
                      {testimonials[testimonialIndex].name}
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 text-[12px]">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-[#6366F1]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {testimonials[testimonialIndex].location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-[#6366F1]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {testimonials[testimonialIndex].role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="flex-shrink-0 hover:opacity-70 transition-opacity"
              >
                <svg
                  className="w-8 h-8 text-[#6366F1]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-12">
          <h2 className="font-serif text-4xl font-normal text-center text-gray-900 mb-3">
            Our Values
          </h2>
          <p className="text-center text-[14px] text-gray-600 mb-12">
            The principles that guide everything we do.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Customer First */}
            <div className="border bg-[#f7f9fa] border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e3eaee] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#5249e5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[14px] text-gray-900 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600 text-[12px]">
                Every decision we make starts with our customers. Their success
                is our success.
              </p>
            </div>

            {/* Innovation */}
            <div className="border bg-[#f7f9fa] border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e3eaee] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#5249e5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[14px] text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-[12px]">
                We constantly push boundaries to deliver cutting-edge solutions
                that solve real problems.
              </p>
            </div>

            {/* Collaboration */}
            <div className="border bg-[#f7f9fa] border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e3eaee] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#5249e5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[14px] text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 text-[12px]">
                {
                  "We believe in the power of teamwork—both within our company and with our partners."
                }
              </p>
            </div>

            {/* Excellence */}
            <div className="border bg-[#f7f9fa] border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e3eaee] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#5249e5]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[14px] text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-[12px]">
                We strive for excellence in everything we do, from code quality
                to customer support.
              </p>
            </div>

            {/* Integrity */}
            <div className="border bg-[#f7f9fa] border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e3eaee] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#5249e5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[14px] text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-[12px]">
                We operate with transparency and honesty, building trust with
                every interaction.
              </p>
            </div>

            {/* Passion */}
            <div className="border bg-[#f7f9fa] border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e3eaee] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#5249e5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[14px] text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600 text-[12px]">
                We love what we do, and that passion drives us to create
                exceptional products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 bg-[#ccefff] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-12">
          <h2 className="font-serif text-4xl font-normal text-center text-gray-900 mb-3">
            Our Journey
          </h2>
          <p className="text-center text-[14px] text-gray-600 mb-12">
            From a small startup to a global SaaS platform.
          </p>

          <div className="relative">
            {/* Pie Chart Image - Left */}
            <div className="absolute left-0 top-20 hidden md:block">
              <img
                src="/emojistar.png"
                alt="Pie Chart"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Gear Image - Right */}
            <div className="absolute right-0 bottom-0 hidden md:block">
              <img
                src="/helix.png"
                alt="Gear Icon"
                className="w-56 h-56 object-contain"
              />
            </div>

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#4a90a4]"></div>

              <div className="space-y-12">
                {/* 2019 - Left */}
                <div className="relative grid grid-cols-2 gap-8">
                  <div className="text-right pr-8 flex flex-col items-end">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block">2019</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      Company Founded
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      FluxWorks was born with a vision to simplify business operations.
                    </p>
                  </div>
                  <div></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>

                {/* 2020 - Right */}
                <div className="relative grid grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8 flex flex-col">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block self-start">2020</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      First Product Launch
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      Launched our flagship Pharmacy Management Suite.
                    </p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>

                {/* 2021 - Left */}
                <div className="relative grid grid-cols-2 gap-8">
                  <div className="text-right pr-8 flex flex-col items-end">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block">2021</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      100+ Customers
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      Reached our first 100 active business customers.
                    </p>
                  </div>
                  <div></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>

                {/* 2022 - Right */}
                <div className="relative grid grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8 flex flex-col">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block self-start">2022</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      Platform Expansion
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      Introduced modular architecture and centralized billing.
                    </p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>

                {/* 2023 - Left */}
                <div className="relative grid grid-cols-2 gap-8">
                  <div className="text-right pr-8 flex flex-col items-end">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block">2023</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      Series A Funding
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      Secured funding to accelerate product development.
                    </p>
                  </div>
                  <div></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>

                {/* 2024 - Right */}
                <div className="relative grid grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8 flex flex-col">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block self-start">2024</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      1000+ Businesses
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      Serving over 1000 businesses across multiple industries.
                    </p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
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
