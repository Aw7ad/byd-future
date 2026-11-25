import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ActiveSectionProvider } from "@/components/shell/ActiveSectionProvider";
import { IntroSequence } from "@/components/shell/IntroSequence";
import { Navbar } from "@/components/shell/Navbar";
import { ProgressRail } from "@/components/shell/ProgressRail";
import { SlideControls } from "@/components/shell/SlideControls";
import { MotionProvider } from "@/components/shell/MotionProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BYD — Future of Mobility | Management Presentation",
  description:
    "An interactive academic management presentation about BYD: project, planning, organizing, directing and control applied to an international electric mobility expansion project.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <MotionProvider>
          <ActiveSectionProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-byd-red focus:px-5 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-white"
            >
              Skip to content
            </a>
            <IntroSequence />
            <Navbar />
            <ProgressRail />
            {children}
            <SlideControls />
          </ActiveSectionProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
