import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PACK RAT Raid Calculator",
  description: "Calculate exact resources needed to raid any structure in Rust. Get explosive, rocket, C4, and satchel requirements for walls, doors, foundations, and more.",
  openGraph: {
    title: "PACK RAT Raid Calculator",
    description: "Calculate exact resources needed to raid any structure in Rust. Get explosive, rocket, C4, and satchel requirements for walls, doors, foundations, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACK RAT Raid Calculator",
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
