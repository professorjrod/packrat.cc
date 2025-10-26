import Link from "next/link";
import { Package, Code2, Gamepad2, Music, Heart, Youtube } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.5_0.18_280/0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,oklch(0.55_0.15_190/0.03),transparent_50%)]" />
      
      <div className="container relative py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all border border-primary/20">
                <Package className="h-5 w-5 text-primary icon-glow" />
              </div>
              <span className="gradient-text font-[family-name:var(--font-space-grotesk)]">packrat.cc</span>
            </Link>
            <p className="text-sm text-muted-foreground font-semibold">
              Developer • Producer • Gamer
            </p>
            <div className="flex gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Code2 className="h-4 w-4 text-primary icon-glow" />
              </div>
              <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                <Music className="h-4 w-4 text-secondary icon-glow" />
              </div>
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Gamepad2 className="h-4 w-4 text-accent icon-glow" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-primary font-[family-name:var(--font-space-grotesk)]">What I Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Website Creation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-secondary transition-colors inline-flex items-center gap-1">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  Music Production
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-accent font-[family-name:var(--font-space-grotesk)]">Projects</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tools" className="hover:text-accent transition-colors">
                  View All
                </Link>
              </li>
              <li>
                <Link href="/tools/raid-calculator" className="hover:text-primary transition-colors">
                  Raid Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/commands" className="hover:text-primary transition-colors">
                  PVP Keybinds
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-secondary font-[family-name:var(--font-space-grotesk)]">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@packratrust" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Youtube className="h-4 w-4 icon-glow" />
                  YouTube
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiDiscord className="h-4 w-4 text-primary icon-glow" />
                <span>@pack.rat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} packrat.cc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-accent icon-glow" />
              <span>by a</span>
              <span className="font-bold gradient-text">Developer • Producer • Gamer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
