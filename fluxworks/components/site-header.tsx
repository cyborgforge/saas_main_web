/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const glassFallbackStyle: React.CSSProperties = {
  background: "var(--header-glass-bg)",
  backdropFilter: "var(--header-glass-filter)",
  WebkitBackdropFilter: "var(--header-glass-filter)",
  boxShadow: "var(--header-glass-shadow)",
};

const activeGlass: React.CSSProperties = {
  background: "var(--header-active-bg)",
  backdropFilter: "var(--header-active-filter)",
  WebkitBackdropFilter: "var(--header-active-filter)",
  boxShadow: "var(--header-active-shadow)",
};

const mobileGlassStyle: React.CSSProperties = {
  background: "var(--header-mobile-bg)",
  backdropFilter: "var(--header-mobile-filter)",
  WebkitBackdropFilter: "var(--header-mobile-filter)",
  boxShadow: "var(--header-mobile-shadow)",
};

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

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

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
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
              className="text-[14px] font-normal px-5 py-2 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10"
              style={active ? activeGlass : {}}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-[13px] font-medium text-white dark:text-gray-900 px-5 py-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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
          style={mobileGlassStyle}
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
                      ? "text-gray-700 dark:text-gray-100 bg-white/40 dark:bg-white/10"
                      : "text-gray-600 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-gray-700 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0 ml-2"
            aria-label="Toggle theme"
          >
            {mounted && isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-[11px] font-medium text-white dark:text-gray-900 px-3 py-1.5 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shrink-0 ml-2"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
          >
            Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
