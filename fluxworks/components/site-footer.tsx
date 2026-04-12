"use client";

import Link from "next/link";
import { ResponsiveWave } from "@/components/responsive-wave";

export function SiteFooter() {
  return (
    <footer className="bg-[#f4f2ef] dark:bg-[#0f1722] py-16 px-6 md:px-20 border-t border-gray-100 dark:border-slate-800 relative transition-colors">
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
        <ResponsiveWave fill="#f4f2ef" />
      </div>
      <div className="max-w-4xl px-0 md:px-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[14px] text-black dark:text-slate-100 mb-3">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">
                About
              </Link>
              <Link href="/contact" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">
                Contact
              </Link>
              <Link href="/contact" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">
                Book a demo
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-black dark:text-slate-100 mb-3">Social</h3>
            <div className="space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="font-semibold text-[14px] text-black dark:text-slate-100 mb-3">Product</h3>
            <div className="space-y-2">
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Pharmacy Management Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Retail Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Clinic Management Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Commerce Transaction Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Customer Engine</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Operations Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Analytical Insights Engine</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Core Platform Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 dark:text-slate-300 hover:text-black dark:hover:text-white">Cloud Deployment &amp; Management</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}