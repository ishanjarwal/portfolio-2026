"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, TextAlignJustify } from "lucide-react";
import { GLASS_EFFECTS } from "@/lib/constants";
import { MobileMenu } from "@/components/layout/mobile-menu";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center py-2 sm:px-2 not-sm:px-4">
        <nav
          className={cn(
            "group flex items-center justify-between gap-8 rounded-full  p-2 ps-6 transition-all md:w-fit w-full",
            GLASS_EFFECTS,
          )}
        >
          <div className="">
            <span className="font-heading font-bold text-lg pl-2">
              Ishan Jarwal
            </span>
          </div>

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

          <div className="flex items-center gap-1 ml-2">
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-4"
              asChild
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="md:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <TextAlignJustify />
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
