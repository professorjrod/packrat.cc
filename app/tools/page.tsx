import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Terminal, Wrench, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "PACK RAT Rust Tools & Calculators",
  description: "Essential tools and calculators for Rust players. Raid calculator, console commands, crafting calculator, and base design tools.",
  openGraph: {
    title: "PACK RAT Rust Tools & Calculators",
    description: "Essential tools and calculators for Rust players. Raid calculator, console commands, crafting calculator, and base design tools.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACK RAT Rust Tools & Calculators",
    description: "Essential tools and calculators for Rust players. Raid calculator, console commands, and more.",
  },
};

export default function ToolsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Rust Tools
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Essential calculators and references for Rust players
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calculator className="h-12 w-12 mb-2 text-primary" />
            <CardTitle>Raid Calculator</CardTitle>
            <CardDescription>
              Calculate the exact resources needed to raid any structure in Rust.
              Get explosive, rocket, and C4 requirements instantly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" size="lg">
              <Link href="/tools/raid-calculator">Open Calculator</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Terminal className="h-12 w-12 mb-2 text-primary" />
            <CardTitle>Command Reference</CardTitle>
            <CardDescription>
              Comprehensive list of Rust console commands with descriptions and usage examples.
              Perfect for server admins and players.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" size="lg">
              <Link href="/tools/commands">View Commands</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow opacity-60">
          <CardHeader>
            <Wrench className="h-12 w-12 mb-2 text-muted-foreground" />
            <CardTitle>Crafting Calculator</CardTitle>
            <CardDescription>
              Calculate raw materials needed for crafting items. Track resource requirements
              for any craftable item in Rust.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button disabled className="w-full" size="lg">
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow opacity-60">
          <CardHeader>
            <Shield className="h-12 w-12 mb-2 text-muted-foreground" />
            <CardTitle>Base Design Tool</CardTitle>
            <CardDescription>
              Plan and optimize your base design with our interactive tool.
              Calculate costs and defensive ratings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button disabled className="w-full" size="lg">
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
