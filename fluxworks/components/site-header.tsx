/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

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

// Dark mode fallback - matches reference image #00000099
const darkGlassStyle: React.CSSProperties = {
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(12px) saturate(160%)",
  WebkitBackdropFilter: "blur(12px) saturate(160%)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.1)",
};

// Light mode liquid-glass panel for mobile dropdown
const lightLiquidDropdownStyle: React.CSSProperties = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(242,248,255,0.84) 48%, rgba(226,241,255,0.82) 100%)",
  backdropFilter: "blur(18px) saturate(185%)",
  WebkitBackdropFilter: "blur(18px) saturate(185%)",
  border: "1px solid rgba(255,255,255,0.75)",
  boxShadow:
    "0 14px 34px rgba(16,24,40,0.12), inset 0 1.5px 0 rgba(255,255,255,0.76), inset 0 -1px 0 rgba(179,213,255,0.35)",
};

// Active link glass bubble — half-clear, lets background show through
const activeGlass: React.CSSProperties = {
  background: "rgba(255,255,255,0.22)",
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(255,255,255,0.1)",
};

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Inner content of the desktop nav bar — shared by both SSR fallback and GlassCard
  const DesktopNavContent = (
    <div className="flex items-center justify-between gap-6 px-5 py-4 w-full">
      {/* Logo — overflow-hidden crops top/bottom whitespace, image scaled up for visual size */}
      <Link href="/" className="flex items-center shrink-0">
        <div className="h-9 overflow-hidden flex items-center">
          <img
            src={mounted && theme === "dark" ? "/logo1.png" : "/logo2.png"}
            alt="Fluxworks"
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
              className="text-[14px] font-normal px-5 py-2 rounded-full transition-all duration-200 text-black dark:text-white dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
              style={active ? activeGlass : {}}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3 shrink-0">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full p-2.5 transition-colors dark:bg-white/15 dark:text-yellow-300 dark:hover:bg-white/25 hover:bg-black/5 text-gray-900"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white text-[13px] font-medium text-gray-900 px-6 py-2 hover:bg-gray-50 transition-colors"
        >
          Book a Demo
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
          <div 
            className="w-full rounded-full shadow-lg" 
            style={mounted && theme === "dark" ? { ...darkGlassStyle } : glassFallbackStyle}
          >
            {DesktopNavContent}
          </div>
        </div>

        {/* ═══ MOBILE NAV (below md) ═══ */}
        <div className="md:hidden w-full">
          <div
            className="flex items-center justify-between rounded-full px-3 py-2 shadow-lg"
            style={mounted && theme === "dark" ? darkGlassStyle : {
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06), inset 0 1.5px 0 rgba(255,255,255,0.4)",
            }}
          >
            {/* Logo — fixed width left */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src={mounted && theme === "dark" ? "/logo1.png" : "/logo2.png"}
                alt="Fluxworks"
                className="h-8 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-2 shrink-0">
              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="inline-flex items-center justify-center rounded-full p-2 transition-colors dark:bg-white/15 dark:text-yellow-300 dark:hover:bg-white/25 hover:bg-black/5 text-gray-900"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
              )}

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-full p-2 transition-colors dark:hover:bg-white/15 hover:bg-black/5"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div
              className="mt-3 relative overflow-hidden rounded-3xl px-4 py-4 shadow-lg"
              style={mounted && theme === "dark" ? darkGlassStyle : lightLiquidDropdownStyle}
            >
              {/* Soft liquid highlights for light mode */}
              <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-cyan-200/45 blur-2xl dark:hidden" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-sky-100/65 blur-2xl dark:hidden" />

              <nav className="relative z-10 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[14px] font-normal px-4 py-2 rounded-full border transition-colors ${
                        active
                          ? "bg-white/65 border-white/70 text-gray-900 dark:bg-white/15 dark:border-white/25 dark:text-white"
                          : "border-transparent text-gray-900 hover:bg-white/45 hover:border-white/65 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="relative z-10 mt-3 block w-full bg-black text-[14px] font-medium text-white px-4 py-2 rounded-full border border-black hover:bg-black/90 transition-colors text-center dark:bg-white dark:text-gray-900 dark:border-white/70 dark:hover:bg-white"
              >
                Book now
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
