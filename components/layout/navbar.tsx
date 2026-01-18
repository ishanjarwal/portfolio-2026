"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, TextAlignJustify } from "lucide-react";
import { GLASS_SHADOWS } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center p-2">
      <nav
        className={cn(
          "group flex items-center justify-between gap-4 rounded-full  p-2 ps-6 transition-all md:w-fit w-full",
          GLASS_SHADOWS,
        )}
      >
        <ul className="items-center gap-4 group-hover:gap-8 duration-300 md:flex hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <h1>Ishan Jarwal</h1>
        </div>

        <div className="flex items-center gap-1 ml-2">
          <Button
            variant="default"
            size="sm"
            className="rounded-full px-4"
            asChild
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
              <ExternalLink />
            </Link>
          </Button>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <TextAlignJustify />
          </Button>
        </div>
      </nav>
    </div>
  );
}
