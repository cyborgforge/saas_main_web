"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showHeader = !pathname.startsWith("/dashboard");

  return (
    <>
      {showHeader && <SiteHeader />}
      <main>{children}</main>
    </>
  );
}

