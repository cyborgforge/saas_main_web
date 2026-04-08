"use client";

import Link from "next/link";
import { ResponsiveWave } from "@/components/responsive-wave";

export function SiteFooter() {
  return (
    <footer className="bg-[#f4f2ef] py-16 px-6 md:px-20 border-t border-gray-100 relative">
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
        <ResponsiveWave fill="#f4f2ef" />
      </div>
      <div className="max-w-4xl px-0 md:px-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[14px] text-black mb-3">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-[12px] text-gray-600 hover:text-black">
                About
              </Link>
              <Link href="/contact" className="block text-[12px] text-gray-600 hover:text-black">
                Contact
              </Link>
              <Link href="/contact" className="block text-[12px] text-gray-600 hover:text-black">
                Book a demo
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[14px] text-black mb-3">Social</h3>
            <div className="space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 hover:text-black"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 hover:text-black"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block text-[12px] text-gray-600 hover:text-black"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="font-semibold text-[14px] text-black mb-3">Product</h3>
            <div className="space-y-2">
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Pharmacy Management Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Retail Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Clinic Management Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Commerce Transaction Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Customer Engine</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Operations Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Analytical Insights Engine</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Core Platform Suite</Link>
              <Link href="/product" className="block text-[12px] text-gray-600 hover:text-black">Cloud Deployment &amp; Management</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}