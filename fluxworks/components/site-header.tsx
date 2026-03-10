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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl w-full rounded-full border border-white/50 bg-white/70 shadow-lg backdrop-blur-xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
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
          {/* Desktop auth actions */}
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex md:hidden items-center justify-center rounded-full border border-gray-300 bg-white/70 px-3 py-1.5 text-gray-900 hover:bg-black/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-2 left-3 right-3 sm:left-4 sm:right-4 md:hidden z-30">
          <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur shadow-xl px-4 py-3 space-y-2">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    "flex items-center justify-between rounded-full px-4 py-2 text-sm font-medium",
                    isActive(link.href)
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-black/5",
                  ].join(" ")}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <div className="flex gap-2">
                <Link
                  href="/login"
                  onClick={() => {
                    setShowDropdown(false);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-900 hover:bg-black/5"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => {
                    setShowDropdown(false);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
                >
                  Sign Up
                </Link>
              </div>
              <Link
                href="/product"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white px-4 py-2 hover:bg-gray-800"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

