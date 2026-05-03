"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export function SiteFooter() {
   const { theme } = useTheme();
  return (
<>
     
    {/* CTA Section */}
      <section
        //className="relative overflow-hidden dark:bg-[#050505]"
        style={{
          background:
          theme === "dark"
          ? "linear-gradient(180deg, #050505 0%, #222222 100%)"
          :  "linear-gradient(180deg, #06181E 0%, #FFFFFF 100%)",
        }}
      >
        {/* <section className="relative overflow-hidden bg-linear-to-b from-[#06181E] to-white dark:bg-[#050505]"> */}
        {/* Gradient Background - only covers CTA heading area */}
        {/* <div className="w-full relative overflow-hidden"> */}
        <div className="w-full md:w-[94%] md:mr-auto rounded-tr-[60px] md:rounded-tr-[100px] relative overflow-hidden">
          {/* Gradient area with heading and button */}
          <div
            className="relative py-16 md:py-20 px-4 sm:px-6 pb-12 md:pb-16 overflow-hidden"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(150deg, #1a1a1a 0%, #2d1b3d 25%, #3d2d5c 50%, #4d3d6c 75%, #5d4d7c 100%)"
                  : "linear-gradient(150deg, #3A7A8C 0%, #4A78A8 25%, #6B6EBC 50%, #9B6EB8 75%, #C490C8 100%)",
            }}
          >
            {/* Purple/pink glow in bottom-right */}
            <div
              className="absolute bottom-0 right-0 w-125 h-125 pointer-events-none"
              style={{
                background:
                  theme === "dark"
                    ? "radial-gradient(circle at 70% 70%, #5d3d7d 0%, #4d2d6d 30%, transparent 65%)"
                    : "radial-gradient(circle at 70% 70%, #D4A0D8 0%, #B87AD4 30%, transparent 65%)",
                opacity: 0.5,
              }}
            />
            {/* Gradient at the bottom to merge seamlessly with the footer */}
            <div
              className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(to top, #0a0a0a, transparent)"
                    : "linear-gradient(to top, #ffffff, transparent)",
              }}
            />

            <div className="max-w-4xl md:ml-10 md:px-8 mx-auto relative z-10">
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-black dark:text-white mb-6 md:mb-8">
                Ready to go? Start
                <br />
                Building together.
              </h2>
              <Link href="/contact" className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-gray-900 px-5 py-2 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors">
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

          {/* Footer cols starts here */}
      {/* <footer className="bg-white py-12 md:py-16 px-6 md:px-20"> */}
      <footer className="bg-white dark:bg-[#0a0a0a] py-16 px-6 md:px-20 border-t border-gray-100 dark:border-gray-800 relative">
      <div className="max-w-4xl px-0 md:px-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[14px] text-black dark:text-white mb-3">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Book a demo
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-black dark:text-white mb-3">Social</h3>
            <div className="space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="font-semibold text-[14px] text-black dark:text-white mb-3">Product</h3>
            <div className="space-y-2">
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Pharmacy Management Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Retail Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Clinic Management Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Commerce Transaction Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Customer Engine</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Operations Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Analytical Insights Engine</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Core Platform Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Cloud Deployment &amp; Management</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
      </section>
    </>
  );
}
