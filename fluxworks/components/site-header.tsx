/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 text-[11px] font-medium text-white px-3 py-1.5 hover:bg-gray-800 transition-colors shrink-0 ml-2"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
          >
            Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
