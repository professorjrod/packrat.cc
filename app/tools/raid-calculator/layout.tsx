import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rust Raid Calculator - PACK RAT",
  description: "Calculate exact resources needed to raid any structure in Rust. Get explosive, rocket, C4, and satchel requirements for walls, doors, foundations, and more.",
  openGraph: {
    title: "Rust Raid Calculator",
    description: "Calculate exact resources needed to raid any structure in Rust. Get explosive, rocket, C4, and satchel requirements for walls, doors, foundations, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rust Raid Calculator",
    description: "Calculate exact resources needed to raid any structure in Rust. Get explosive, rocket, C4, and satchel requirements instantly.",
  },
};

export default function RaidCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
