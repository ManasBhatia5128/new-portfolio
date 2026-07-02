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
    "Software Development Engineer",
    "Full-stack engineer",
    "Next.js",
    "React",
    "FastAPI",
    "AWS",
    "Portfolio",
    "Web Development",
    "Manas Bhatia Architect",
    "Indian Architect",
    "Futuristic Architecture",
    "Sustainable Architecture",
    "AI Architecture",
    "Symbiotic Architecture",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Manas Bhatia — Software Development Engineer",
    description:
      "Full-stack engineer specializing in Next.js, FastAPI, and AWS cloud infrastructure.",
    images: ["/images/logo_light_mode.png"],
  },
  authors: [{ name: "Manas Bhatia" }],
  openGraph: {
    title: "Manas Bhatia — Software Development Engineer",
    description:
      "Full-stack engineer specializing in Next.js, FastAPI, and AWS cloud infrastructure.",
    type: "website",
    url: "https://manasbhatia.me",
    images: [
      {
        url: "/images/logo_light_mode.png",
        width: 1200,
        height: 630,
        alt: "Manas Bhatia",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/logo_light_mode.ico?v=2", media: "(prefers-color-scheme: light)", sizes: "any" },
      { url: "/images/logo_dark_mode.ico?v=2", media: "(prefers-color-scheme: dark)", sizes: "any" },
    ],
    apple: [
      { url: "/images/logo_light_mode.png?v=2", media: "(prefers-color-scheme: light)" },
      { url: "/images/logo_dark_mode.png?v=2", media: "(prefers-color-scheme: dark)" },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manas Bhatia",
              url: "https://manasbhatia.me",
              jobTitle: "Software Development Engineer",
              description: "Full-stack engineer specializing in Next.js, FastAPI, and AWS cloud infrastructure. Building high-performance web platforms and AI-powered products.",
              sameAs: [
                "https://linkedin.com/in/manas-bhatia",
                "https://github.com/manasbhatia5128"
              ],
              knowsAbout: [
                "Software Engineering",
                "Web Development",
                "Next.js",
                "AWS",
                "Architecture",
                "Futuristic Architecture"
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xg15vzz0bq");
            `,
          }}
        />
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
