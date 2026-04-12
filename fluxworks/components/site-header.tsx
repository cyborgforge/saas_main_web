/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <header
      className={`fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[120%]"
      }`}
    >
      <div className="max-w-7xl w-full relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-card dark:bg-card border border-border dark:border-border backdrop-blur-md shadow-lg transition-theme">
          {/* Logo */}
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

          {/* Navigation Links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-surface-light dark:hover:bg-surface-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold text-[13px] transition-all duration-200"
            >
              Book Demo
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between px-3 py-2.5 rounded-full bg-card dark:bg-card border border-border dark:border-border backdrop-blur-md shadow-lg transition-theme">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/onlylogo.png"
              alt="Fluxworks"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 text-foreground hover:bg-surface-light dark:hover:bg-surface-medium"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 mx-3 md:hidden rounded-2xl p-4 bg-card dark:bg-card border border-border dark:border-border backdrop-blur-md shadow-lg z-50 transition-theme">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-surface-light dark:hover:bg-surface-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium px-4 py-2.5 rounded-lg bg-accent text-accent-foreground hover:bg-accent-dark transition-colors mt-2"
              >
                Book Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
