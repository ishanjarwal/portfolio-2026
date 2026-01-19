import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Preloader from "@/components/layout/preloader";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Google_Sans, Special_Gothic_Expanded_One } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-googleSans",
  subsets: ["latin"],
});

const specialGothicExpandedOne = Special_Gothic_Expanded_One({
  variable: "--font-specialGothicExpandedOne",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ishan Jarwal | Software Developer | Open for work",

  description:
    "Welcome to Ishan's portfolio. A full stack developer specializing in creating modern, responsive, and high-performance web apps. Typescript, NextJS, ExpressJS, MongoDB, ReactJS, NodeJS, Tailwind, tRPC, Fastify and much more.",

  keywords: [
    "Full Stack Developer",
    "Software Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Ishan Jarwal",
  ],

  authors: [{ name: "Ishan Jarwal" }],

  alternates: {
    canonical: "https://jarwal.vercel.app",
  },

  openGraph: {
    title: "Ishan Jarwal | Software Developer | Open to work",
    description:
      "Welcome to Ishan's portfolio. A full stack developer specializing in creating modern, responsive, and high-performance web apps. Typescript, NextJS, ExpressJS, MongoDB, ReactJS, NodeJS, Tailwind, tRPC, Fastify and much more.",
    url: "https://jarwal.vercel.app",
    siteName: "Ishan Jarwal's Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1768759954/ishan_jarwal_g1ioz5.jpg?v=1.0",
        width: 733,
        height: 733,
        alt: "Ishan Jarwal",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ishan Jarwal | Software Developer",
    description:
      "Welcome to Ishan's portfolio. A full stack developer specializing in creating modern, responsive, and high-performance web apps. Typescript, NextJS, ExpressJS, MongoDB, ReactJS, NodeJS, Tailwind, tRPC, Fastify and much more.",
    images: [
      "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1768759954/ishan_jarwal_g1ioz5.jpg?v=1.0",
    ],
  },

  verification: {
    google: "7tfl9yDOQnVvs3X-g946UC1RGjem-limuAbO7EdVxCk",
  },

  icons: {
    icon: "https://jarwal.vercel.app/favicon.ico?v=1.0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${googleSans.variable} ${specialGothicExpandedOne.variable} antialiased`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
