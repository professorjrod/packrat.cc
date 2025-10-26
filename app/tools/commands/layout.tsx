import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PACK RAT Console Commands & PVP Keybinds",
  description: "Rust console commands and keybinds for PVP, crafting, audio, performance optimization, and quality of life improvements. For competitive players.",
  openGraph: {
    title: "PACK RAT Console Commands & PVP Keybinds",
    description: "Rust console commands and keybinds for PVP, crafting, audio, performance optimization, and quality of life improvements. For competitive players.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACK RAT Console Commands & PVP Keybinds",
    description: "Rust console commands and keybinds for PVP, crafting, audio, performance optimization, and quality of life improvements. For competitive players.",
  },
};

export default function CommandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
