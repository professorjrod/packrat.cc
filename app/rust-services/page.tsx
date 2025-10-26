import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, ShieldCheck, Sparkles, Timer, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Gaming Services • Game Bot Setup & PC Security | PACK RAT",
  description:
    "Get a custom automation bot for your squad in minutes with no monthly fees. PACK RAT also offers PC health checks to detect DMA cards or cheats across any game.",
  openGraph: {
    title: "Gaming Services • Game Bot Setup & PC Security | PACK RAT",
    description:
      "Get a custom automation bot for your squad in minutes with no monthly fees. PACK RAT also offers PC health checks to detect DMA cards or cheats across any game.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Services • Game Bot Setup & PC Security | PACK RAT",
    description:
      "Get a custom automation bot for your squad in minutes with no monthly fees. PACK RAT also offers PC health checks to detect DMA cards or cheats across any game.",
  },
};

export default function RustServicesPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 gradient-bg opacity-[0.18]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.58_0.18_280/0.09),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,oklch(0.62_0.16_210/0.1),transparent_60%)]" />

        <div className="container relative py-20 md:py-28">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Gaming Services
            </span>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-[family-name:var(--font-space-grotesk)]">
              Game Automation & PC Security Support
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Need a bot or automation service for your squad? I’ll help you stand one up in under 15 minutes—
                no monthly fees, free for life.
              </p>
              <p>
                I also offer PC checks to detect DMA hardware, spoofers, or other cheats before anyone logs in—
                Rust, Tarkov, DayZ, or whatever you’re grinding next wipe.
              </p>
              <p className="text-sm text-muted-foreground/90">
                💬 DM me or visit <span className="font-semibold text-primary">packrat.cc/gaming-services</span> for
                details on multi-game automation and PC audits.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-effect font-semibold" asChild>
                <Link href="https://discord.com/users/pack.rat" target="_blank" rel="noopener noreferrer">
                  DM @pack.rat
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                <Link href="/#contact">Book a call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
            What’s included
          </h2>
          <p className="text-muted-foreground text-lg">
            From automation to anti-cheat audits, I deliver fast, reliable setup so your team can focus on
            winning fights in any game.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="card-glow border-primary/15 bg-background/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-primary/20 bg-primary/10 p-3">
                  <Bot className="h-6 w-6 text-primary icon-glow" />
                </div>
                <CardTitle>Custom Game Bot Setup</CardTitle>
              </div>
              <CardDescription>
                Tailored automation that suits your playstyle. I configure the bot, alerts, and integrations so
                it’s ready on day one, whether you’re playing Rust, Tarkov, or something new.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Add personalized alert channels, stash monitors, wipe timers, or PvP intel</li>
                <li>Works on self-hosted or managed services—no ongoing subscription</li>
                <li>Step-by-step walkthrough so you can maintain it yourself</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-glow border-accent/15 bg-background/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-accent/20 bg-accent/10 p-3">
                  <Sparkles className="h-6 w-6 text-accent icon-glow" />
                </div>
                <CardTitle>Supported Titles</CardTitle>
              </div>
              <CardDescription>
                Bring your own game. I already support the Rust ecosystem and can tailor the same tech for other
                competitive shooters or survival sandboxes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Rust • Escape from Tarkov • DayZ • Squad</li>
                <li>Custom integrations for new titles on request</li>
                <li>APIs, webhook endpoints, and dashboards included</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-glow border-secondary/15 bg-background/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-secondary/20 bg-secondary/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-secondary icon-glow" />
                </div>
                <CardTitle>PC Cheat & DMA Checks</CardTitle>
              </div>
              <CardDescription>
                Keep your roster clean with device inspections that flag DMA cards, spoofers, or suspicious
                software across any competitive title.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hardware inspection and telemetry review</li>
                <li>Audit of installed drivers, services, and background processes</li>
                <li>Clear report with recommendations for each player</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-glow border-accent/15 bg-background/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-accent/20 bg-accent/10 p-3">
                  <Timer className="h-6 w-6 text-accent icon-glow" />
                </div>
                <CardTitle>15-Minute Deployment</CardTitle>
              </div>
              <CardDescription>
                Fast turnaround via screenshare or remote session. Most teams are fully automated before their
                next raid, wipe, or tournament.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Flexible scheduling around wipe cycles</li>
                <li>Checklist to test alerts and integrations</li>
                <li>Follow-up support if anything breaks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-glow border-primary/15 bg-background/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-primary/20 bg-primary/10 p-3">
                  <Wrench className="h-6 w-6 text-primary icon-glow" />
                </div>
                <CardTitle>Ongoing Maintenance</CardTitle>
              </div>
              <CardDescription>
                Optional tune-ups when a patch hits or you want new features for another game.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Bot health checks and update install</li>
                <li>Add new webhooks, data sources, or integrations</li>
                <li>Priority response during wipe weekends</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container pb-20">
        <div className="max-w-2xl rounded-2xl border border-primary/15 bg-primary/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-6">
            Shoot me a Discord DM or drop a message through the contact form. I’ll reply with availability,
            pricing, and the short checklist of info I need before we jump on a call.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="glow-effect" asChild>
              <Link href="https://discord.com/users/pack.rat" target="_blank" rel="noopener noreferrer">
                DM @pack.rat
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#contact">Contact Form</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
