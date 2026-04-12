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

// Dark mode fallback - matches reference image
const darkGlassStyle: React.CSSProperties = {
  background: "rgba(20,20,20,0.95)",
  backdropFilter: "blur(12px) saturate(160%)",
  WebkitBackdropFilter: "blur(12px) saturate(160%)",
  boxShadow: "0 0 1px rgba(255,255,255,0.1), inset 0 0 1px rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
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
            src="/logo2.png"
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
              className="text-[14px] font-normal px-5 py-2 rounded-full transition-all duration-200 text-gray-600 dark:text-white dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
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
          Buy now
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
            className="w-full rounded-full" 
            style={theme === "dark" ? { ...darkGlassStyle } : glassFallbackStyle}
          >
            {DesktopNavContent}
          </div>
        </div>

        {/* ═══ MOBILE NAV (below md) ═══ */}
        <div
          className="flex md:hidden w-full items-center rounded-full px-3 py-2"
          style={theme === "dark" ? darkGlassStyle : {
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
              alt="Fluxworks"
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
                      ? "text-gray-700 dark:text-white bg-white/40 dark:bg-white/15"
                      : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-full p-2 transition-colors dark:bg-white/15 dark:text-yellow-300 dark:hover:bg-white/25 hover:bg-black/5 text-gray-900 shrink-0"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
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

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-[11px] font-medium text-gray-900 px-4 py-1.5 hover:bg-gray-50 transition-colors shrink-0"
          >
            Buy
          </Link>
        </div>
      </div>
    </header>
  );
}
