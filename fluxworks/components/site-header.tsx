/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import type { LiquidGlassProps } from "@liquidglass/react";

// Default export — loaded client-side only to avoid SSR canvas errors
const LiquidGlass = dynamic<LiquidGlassProps>(
  () => import("@liquidglass/react").then((m: any) => m.default ?? m.LiquidGlass),
  { ssr: false }
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Plain CSS fallback (SSR / before hydration)
const glassFallbackStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.55)",
};

// Active link glass bubble — half-clear, lets background show through
const activeGlass: React.CSSProperties = {
  background: "rgba(255,255,255,0.22)",
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(255,255,255,0.1)",
};

export function SiteHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Inner content of the desktop nav bar — shared by both SSR fallback and GlassCard
  const DesktopNavContent = (
    <div
      className="flex items-center justify-between gap-6 px-5 py-4 w-full"
      ref={navContainerRef}
    >
      {/* Logo — overflow-hidden crops top/bottom whitespace, image scaled up for visual size */}
      <Link href="/" className="flex items-center shrink-0">
        <div className="h-9 overflow-hidden flex items-center">
          <img
            src="/logo2.png"
            alt="FluxWorks"
            className="h-16 w-auto object-contain"
            style={{ marginTop: "-8px", marginBottom: "-8px" }}
          />
        </div>
      </Link>

      {/* Desktop nav links */}
      <nav className="flex items-center gap-2">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-normal px-5 py-2 rounded-full transition-all duration-200 text-gray-600 hover:bg-black/5"
              style={active ? activeGlass : {}}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Login */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((v) => !v)}
            className="text-[13px] text-gray-600 font-normal flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
          >
            Log In
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Dropdown — inside the ref div so click-outside works correctly */}
          {showDropdown && (
            <div
              className="absolute right-0 top-full mt-2 w-36 rounded-2xl py-1 z-[9999]"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(24px) saturate(170%)",
                WebkitBackdropFilter: "blur(24px) saturate(170%)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <Link href="/login" onClick={() => setShowDropdown(false)} className="block px-4 py-2.5 text-[13px] text-gray-900 hover:bg-black/5 transition-colors font-medium rounded-xl mx-1">Log In</Link>
              <Link href="/register" onClick={() => setShowDropdown(false)} className="block px-4 py-2.5 text-[13px] text-gray-900 hover:bg-black/5 transition-colors font-medium rounded-xl mx-1">Sign Up</Link>
            </div>
          )}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gray-900 text-[13px] font-medium text-white px-5 py-2 hover:bg-gray-800 transition-colors"
          style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
        >
          Book a demo
        </Link>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-3 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 md:px-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div className="max-w-7xl w-full relative">

        {/* ═══ DESKTOP NAV (md+) — CSS glass pill ═══ */}
        <div className="hidden md:block w-full">
          <div className="w-full rounded-full" style={glassFallbackStyle}>
            {DesktopNavContent}
          </div>
        </div>

        {/* ═══ MOBILE NAV (below md) ═══ */}
        <div
          className="flex md:hidden w-full items-center rounded-full px-3 py-2"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06), inset 0 1.5px 0 rgba(255,255,255,0.4)",
          }}
        >
          {/* Logo — fixed width left */}
          <Link href="/" className="flex items-center shrink-0 mr-2">
            <img
              src="/onlylogo.png"
              alt="FluxWorks"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Nav links — fill remaining space, centred */}
          <div className="flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-normal px-3 py-1 rounded-full transition-all duration-200 ${
                    active
                      ? "text-gray-700 bg-white/40"
                      : "text-gray-600 hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger — fixed width right */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 transition-colors text-gray-700 shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Dropdown has been moved inside the Login button ref above */}
      </div>

      {/* ═══ Mobile Dropdown (anchored top-right, under hamburger) ═══ */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-1.5 right-3 md:hidden z-30 w-36">
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06), inset 0 1.5px 0 rgba(255,255,255,0.4)",
            }}
          >
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-4 py-2 text-[12px] font-normal text-gray-600 hover:bg-black/5 transition-colors">Log In</Link>
            <div className="h-px mx-3" style={{ background: "rgba(0,0,0,0.05)" }} />
            <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-4 py-2 text-[12px] font-normal text-gray-600 hover:bg-black/5 transition-colors">Sign Up</Link>
            <div className="h-px mx-3" style={{ background: "rgba(0,0,0,0.05)" }} />
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-4 py-2 text-[12px] font-normal text-gray-600 hover:bg-black/5 transition-colors">Book a demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}
