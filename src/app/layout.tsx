import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { LoadingScreen } from "@/components/loading-screen";
import { ParticleBackground } from "@/components/particle-background";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manas Bhatia — Software Development Engineer",
  description:
    "Full-stack engineer specializing in Next.js, FastAPI, and AWS cloud infrastructure. Building high-performance web platforms and AI-powered products.",
  keywords: [
    "Manas Bhatia",
    "Software Engineer",
    "Next.js",
    "React",
    "FastAPI",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Manas Bhatia" }],
  openGraph: {
    title: "Manas Bhatia — Software Development Engineer",
    description:
      "Full-stack engineer specializing in Next.js, FastAPI, and AWS cloud infrastructure.",
    type: "website",
    url: "https://manasbhatia.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full dark",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable
      )}
      suppressHydrationWarning
    >
      <head>
        {/* Devicon — technology logo icon font */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme');
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (!t) {
                    if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-mono">
        <ThemeProvider>
          <ParticleBackground />
          <LoadingScreen>
            <Navbar />
            <main className="flex-1 pt-14">{children}</main>
          </LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
