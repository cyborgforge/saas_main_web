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
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full p-2 transition-colors dark:bg-white/10 dark:text-white dark:hover:bg-white/20 hover:bg-black/5 text-gray-900"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414 0zM3 9a1 1 0 100-2H2a1 1 0 100 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gray-900 text-[13px] font-medium text-white px-5 py-2 hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
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
                      ? "text-gray-700 bg-white/40"
                      : "text-gray-600 hover:bg-black/5"
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
              className="inline-flex items-center justify-center rounded-full p-1.5 transition-colors dark:bg-white/10 dark:text-white dark:hover:bg-white/20 hover:bg-black/5 text-gray-900 shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414 0zM3 9a1 1 0 100-2H2a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 text-[11px] font-medium text-white px-3 py-1.5 hover:bg-gray-800 transition-colors shrink-0 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
          >
            Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
