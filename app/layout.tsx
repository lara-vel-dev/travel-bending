import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Bending",
  description: "Traveling has never been easier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-travel.ico" sizes="any" />
      </head>
      <body className={`${font.className} bg-background`}>{children}</body>
    </html>
  );
}
