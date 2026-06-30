import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Name",
  description: "University leadership organization website",
};

const navItems = [
  { href: "/about", label: "About" },
  { href: "/lineage", label: "Lineage" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-clip">
        <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-slate-950">
          <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 sm:px-10 lg:px-16">
            <Link
              href="/"
              className="justify-self-start text-sm font-black uppercase tracking-[0.22em] text-[#00ab55]"
            >
              Club Name
            </Link>

            <nav className="justify-self-center">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d6ddd6]/85 sm:text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[#00ab55]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="justify-self-end">
              <div className="flex items-center gap-4 text-[#d6ddd6]/85">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="transition hover:text-[#00ab55]"
                  >
                    {item.label === "Instagram" ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4.2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 8.2c0-1.7-1.4-3.1-3.1-3.1H6.1C4.4 5.1 3 6.5 3 8.2v7.6c0 1.7 1.4 3.1 3.1 3.1h11.8c1.7 0 3.1-1.4 3.1-3.1V8.2Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path d="m10 9.2 6 3.3-6 3.3V9.2Z" fill="currentColor" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
