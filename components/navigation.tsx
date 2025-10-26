"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, Sparkles } from "lucide-react";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all border border-primary/20">
            <Package className="h-6 w-6 text-primary icon-glow" />
          </div>
          <span className="gradient-text font-[family-name:var(--font-space-grotesk)]">packrat.cc</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            href="/#services"
            className="text-sm font-semibold transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all hover:after:w-full"
          >
            What I Do
          </Link>
          <Link
            href="/tools"
            className="text-sm font-semibold transition-colors hover:text-accent relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-accent after:to-primary after:transition-all hover:after:w-full"
          >
            Projects
          </Link>
          <Button asChild className="glow-effect font-semibold">
            <Link href="/#contact">
              <Sparkles className="mr-2 h-5 w-5 icon-glow" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
