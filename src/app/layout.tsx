import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { RoleProvider } from "@/lib/role";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Vetta — Meet the people worth meeting";
const DESCRIPTION =
  "The vetted network of accomplished people. Verified track records, paid 1:1 Sessions, live Roundtables and Notes worth reading. Earned, not claimed.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vetta.network"),
  title: { default: TITLE, template: "%s · Vetta" },
  description: DESCRIPTION,
  applicationName: "Vetta",
  keywords: [
    "professional network",
    "verified experts",
    "book a session",
    "mentorship",
    "roundtables",
    "Luminaries",
  ],
  openGraph: {
    type: "website",
    siteName: "Vetta",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  appleWebApp: {
    capable: true,
    title: "Vetta",
    statusBarStyle: "black-translucent",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5f8" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Theme is resolved on the server from a cookie — no inline script, no flash.
  const theme = (await cookies()).get("vetta-theme")?.value;

  return (
    <html lang="en" className={theme === "light" ? "light" : undefined}>
      <body className={`${inter.variable} antialiased`}>
        <RoleProvider>{children}</RoleProvider>
      </body>
    </html>
  );
}
