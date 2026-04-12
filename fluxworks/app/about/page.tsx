/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ResponsiveWave } from "@/components/responsive-wave";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-24 md:pt-32 pb-20 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
        style={{
          background: "linear-gradient(180deg, #9CDBF5 0%, #B8E6F7 8.2%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 pt-10 relative">
          {/* Megaphone Icon - Left Side */}
          <div className="hidden md:block absolute left-20 top-8/12 -translate-y-1/2 w-48 h-48 pointer-events-none">
            <img
              src="/cursor.png"
              alt="Cursor"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Chat Bubble Icon - Top Right */}
          <div className="hidden md:block absolute right-15 top-0 w-48 h-48 pointer-events-none">
            <img
              src="/message.png"
              alt="Message"
              className="w-full h-full object-contain"
            />
          </div>

          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <span className="bg-[#0070A015] text-[#0070A0] text-xs font-medium px-4 py-1.5 rounded-full">
                About Fluxworks
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl -mt-1 md:-mt-3 font-bold text-gray-900 dark:text-white leading-tight mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Building the future of <br /> business software
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-105 -mt-5 mx-auto text-left"
            >
              <p className="text-gray-600 dark:text-muted-foreground text-[12px] mb-6">
                {
                  "We're a team of passionate engineers, designers, and business experts dedicated to creating software that makes a difference. Our mission is to empower businesses of all sizes with enterprise-grade tools that are accessible, affordable, and easy to use."
                }
              </p>
              <p className="text-gray-600 dark:text-muted-foreground text-[12px]">
                {
                  "Founded in 2019, we've grown from a small startup to a trusted partner for over 1000 businesses worldwide. But we're just getting started."
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section with Images */}
      <section className="py-16 bg-[#dce1ff] relative">
        {/* Wave Top */}
        <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
          <ResponsiveWave fill="#dce1ff" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
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

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Values List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
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
            </motion.div>

            {/* Team Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-4xl font-normal text-center text-gray-900 mb-3">
            Our Values
          </h2>
          <p className="text-center text-[14px] text-gray-600 mb-12">
            The principles that guide everything we do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      {/* <section className="py-16 bg-[#ccefff] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-serif text-4xl font-normal text-center text-gray-900 mb-3">
            Our Journey
          </h2>
          <p className="text-center text-[14px] text-gray-600 mb-12">
            From a small startup to a global SaaS platform.
          </p>

          <div className="relative">
            <div className="absolute left-0 top-20 hidden md:block">
              <img
                src="/emojistar.png"
                alt="Pie Chart"
                className="w-48 h-48 object-contain"
              />
            </div>

            <div className="absolute right-0 bottom-0 hidden md:block">
              <img
                src="/helix.png"
                alt="Gear Icon"
                className="w-56 h-56 object-contain"
              />
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#4a90a4]"></div>

              <div className="space-y-12">
                <div className="relative grid grid-cols-2 gap-8">
                  <div className="text-right pr-8 flex flex-col items-end">
                    <div className="bg-[#b8e3f6] text-gray-900 text-[12px] font-medium mb-2 px-3 py-0.5 rounded-full inline-block">2019</div>
                    <h3 className="font-semibold text-[14px] text-gray-900 mb-1">
                      Company Founded
                    </h3>
                    <p className="text-gray-600 text-[12px]">
                      Fluxworks was born with a vision to simplify business operations.
                    </p>
                  </div>
                  <div></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                </div>

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
      </section> */}

    </div>
  );
}
