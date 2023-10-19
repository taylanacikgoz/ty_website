import { Monoton, Space_Mono } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-space-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monoton.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
