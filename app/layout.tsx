import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://c0test.vercel.app"),
  title: "CHAPTER:0 | 若者の今を、記録する。",
  description: "まだ名前のないカルチャーの、その瞬間へ。次の時代の第0章を記録するユースカルチャーメディア。",
  openGraph: {
    title: "CHAPTER:0",
    description: "若者の今を、記録する。",
    images: ["/assets/chapter0-hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
