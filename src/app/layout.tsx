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

export const metadata: Metadata = {
  title: "Vetta — Meet the people worth meeting",
  description:
    "Vetta is the vetted network of accomplished people. Real track records, real conversations — Sessions, Roundtables and Notes from verified Luminaries.",
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
