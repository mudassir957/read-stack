import type { Metadata } from "next";
import { SessionProvider } from 'next-auth/react'
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";

const ibmPlexSans = localFont({
  src: [
    {
      path: "/fonts/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/IBMPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/IBMPlexSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ]
});

const babasNeue = localFont({
  src: [{
    path: "/fonts/BebasNeue-Regular.ttf",
    weight: "400",
    style: "normal",
  }],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "ReadStack",
  description: "ReadStack is a book borrowing app",
};

const RootLayout = async ({
  children,
}: {
  children: ReactNode
}) => {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${ibmPlexSans.className} ${babasNeue.variable} antialiased`}
        >
          {children}
        </body>
      </SessionProvider>
      <Toaster />
    </html>
  );
}

export default RootLayout;