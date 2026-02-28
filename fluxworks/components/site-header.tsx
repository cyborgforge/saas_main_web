"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-6">
      <div className="max-w-7xl w-full rounded-full border border-white/50 bg-white/60 shadow-lg backdrop-blur-xl px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold text-gray-900 tracking-tight"
        >
          FluxWorks
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "text-[13px] font-medium px-4 py-2 rounded-full transition-colors",
                isActive(link.href)
                  ? "bg-gray-900 text-white"
                  : "text-gray-800 hover:text-gray-900 hover:bg-black/5",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-[12px] border border-gray-300 text-gray-900 hover:text-gray-700 flex items-center gap-1.5 px-4 py-1.5 rounded-full hover:bg-black/5 transition-colors font-medium"
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
              <div className="absolute right-0 mt-2 w-36 bg-white/90 backdrop-blur border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/login"
                  onClick={() => setShowDropdown(false)}
                  className="block w-full text-left px-4 py-2 text-[11px] text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setShowDropdown(false)}
                  className="block w-full text-left px-4 py-2 text-[11px] text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/product"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gray-900 text-[12px] font-medium text-white px-5 py-2 hover:bg-gray-800 transition-colors shadow-md"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}

