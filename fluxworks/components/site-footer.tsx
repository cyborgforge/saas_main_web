import Link from "next/link";
import { ResponsiveWave } from "@/components/responsive-wave";

export function SiteFooter() {
  return (
    <footer className="relative bg-surface-light dark:bg-surface-medium border-t border-border dark:border-border transition-theme">
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none opacity-10 dark:opacity-20">
        <ResponsiveWave fill="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Company
            </h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                Book a demo
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Social
            </h3>
            <div className="space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="sm:col-span-2">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Products
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Pharmacy Suite
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Retail Suite
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Clinic Management
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Commerce Suite
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Customer Engine
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Operations Suite
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Insights Engine
              </Link>
              <Link href="/product" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Core Platform
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border dark:border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024 Fluxworks. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
