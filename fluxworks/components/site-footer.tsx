"use client";

import Link from "next/link";
import { ResponsiveWave } from "@/components/responsive-wave";

export function SiteFooter() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] py-16 px-6 md:px-20 border-t border-gray-100 dark:border-gray-800 relative">
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
        <ResponsiveWave fill="var(--footer-bg)" />
      </div>
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
  );
}
