import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Wrench, Calculator, Terminal, ArrowRight, Shield, Sparkles, Gamepad2, Music, Youtube, Video, Mic2 } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export const metadata: Metadata = {
  title: "PACK RAT - Developer • Producer • Gamer",
  description: "Rust console commands and keybinds for PVP, crafting, audio, performance optimization, and quality of life improvements. For competitive players.",
  openGraph: {
    title: "PACK RAT - Developer • Producer • Gamer",
    description: "Rust console commands and keybinds for PVP, crafting, audio, performance optimization, and quality of life improvements. For competitive players.",
    type: "website",
    siteName: "PACK RAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACK RAT - Developer • Producer • Gamer",
    description: "Rust console commands and keybinds for PVP, crafting, audio, performance optimization, and quality of life improvements. For competitive players.",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with animated gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.5_0.18_280/0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,oklch(0.55_0.15_190/0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,oklch(0.6_0.16_330/0.06),transparent_50%)]" />
        
        <div className="container relative flex flex-col items-center justify-center gap-8 py-24 md:py-32">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex gap-4 mb-2">
              <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 icon-float">
                <Code2 className="h-7 w-7 text-primary icon-glow" />
              </div>
              <div className="p-3 rounded-xl bg-secondary/10 backdrop-blur-sm border border-secondary/20 icon-float" style={{animationDelay: '2s'}}>
                <Music className="h-7 w-7 text-secondary icon-glow" />
              </div>
              <div className="p-3 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 icon-float" style={{animationDelay: '4s'}}>
                <Gamepad2 className="h-7 w-7 text-accent icon-glow" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-space-grotesk)]">
              Hi, I'm <span className="gradient-text">PACK RAT</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl font-[family-name:var(--font-space-grotesk)]">
              <span className="font-bold text-primary">Developer</span> • <span className="font-bold text-secondary">Producer</span> • <span className="font-bold text-accent">Gamer</span>
            </p>
            <p className="max-w-[700px] text-base text-muted-foreground sm:text-lg">
              I build modern web applications and craft tools for the gaming community.
              Let's bring your ideas to life with clean code and creative solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" className="glow-effect font-semibold" asChild>
                <Link href="#services">
                  <Sparkles className="mr-2 h-5 w-5 icon-glow" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container py-16 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Available for hire as a contractor • Web development, video editing, and creative production
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="card-glow border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <div className="p-4 rounded-xl bg-primary/15 w-fit mb-3 border border-primary/20">
                <Code2 className="h-12 w-12 text-primary icon-glow" />
              </div>
              <CardTitle className="text-primary font-[family-name:var(--font-space-grotesk)] text-xl">Website Creation</CardTitle>
              <CardDescription>
                Professional websites built with modern technologies • Available for hire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom website design & development</li>
                <li>• React & Next.js applications</li>
                <li>• Mobile-responsive layouts</li>
                <li>• SEO optimization & performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-glow border-secondary/10 bg-gradient-to-br from-secondary/5 to-transparent">
            <CardHeader>
              <div className="p-4 rounded-xl bg-secondary/15 w-fit mb-3 border border-secondary/20">
                <Video className="h-12 w-12 text-secondary icon-glow" />
              </div>
              <CardTitle className="text-secondary font-[family-name:var(--font-space-grotesk)] text-xl">Video Editing</CardTitle>
              <CardDescription>
                Professional video editing services • Available for hire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• YouTube content editing</li>
                <li>• Promotional videos</li>
                <li>• Color grading & effects</li>
                <li>• Audio synchronization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-glow border-accent/10 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader>
              <div className="p-4 rounded-xl bg-accent/15 w-fit mb-3 border border-accent/20">
                <Mic2 className="h-12 w-12 text-accent icon-glow" />
              </div>
              <CardTitle className="text-accent font-[family-name:var(--font-space-grotesk)] text-xl">Music Production</CardTitle>
              <CardDescription>
                Music production & sound engineering • Hobby, aspiring professional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Original music composition</li>
                <li>• Sound design & mixing</li>
                <li>• Audio mastering</li>
                <li>• Creative sound engineering</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Side Projects Section - Minimal */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-[family-name:var(--font-space-grotesk)]">
              Side Projects
            </h3>
            <p className="text-sm text-muted-foreground">
              Gaming tools I've built for the community
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/tools/raid-calculator">
              <Button variant="outline" className="gap-2 border-accent/20 hover:border-accent/40">
                <Calculator className="h-5 w-5 text-accent icon-glow" />
                Rust Raid Calculator
              </Button>
            </Link>
            <Link href="/tools/commands">
              <Button variant="outline" className="gap-2 border-primary/20 hover:border-primary/40">
                <Terminal className="h-5 w-5 text-primary icon-glow" />
                PVP Keybinds
              </Button>
            </Link>
            <Link href="/tools">
              <Button variant="ghost" className="gap-2">
                View All Tools
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.5_0.18_280/0.05),transparent_70%)]" />
        
        <div className="container relative py-16 md:py-24">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex gap-2">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-accent" />
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-primary" />
            </div>
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg">
              Have a project in mind? Looking for a developer who brings creativity, technical expertise, and passion to every build? Let's chat.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <a 
                href="https://www.youtube.com/@packratrust" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-all group"
              >
                <Youtube className="h-6 w-6 text-accent icon-glow group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">@packratrust</span>
              </a>
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <SiDiscord className="h-6 w-6 text-primary icon-glow" />
                <span className="text-sm font-semibold">@pack.rat</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <Button size="lg" className="glow-effect font-semibold" asChild>
                <a href="https://discord.gg/sQAa4NCwVr" target="_blank" rel="noopener noreferrer">
                  <Sparkles className="mr-2 h-5 w-5 icon-glow" />
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm border-primary/20 hover:border-primary/40 font-semibold" asChild>
                <Link href="/tools">
                  <Code2 className="mr-2 h-5 w-5 icon-glow" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
