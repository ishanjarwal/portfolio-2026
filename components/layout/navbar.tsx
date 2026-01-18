"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
]

export function Navbar() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-2">
            <nav className="flex items-center justify-between gap-4 rounded-full border border-border/40 bg-background/80 px-4 py-1.5 shadow-lg backdrop-blur-md transition-all hover:border-border/80 w-fit">
                <div className="hidden md:flex items-center mr-2">
                    <span className="font-heading font-bold text-lg">Portfolio</span>
                </div>

                <ul className="flex items-center gap-4">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-1 ml-2">
                    <Button variant="default" size="sm" className="rounded-full px-4" asChild>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </Link>
                    </Button>
                    <ModeToggle />
                </div>
            </nav>
        </div>
    )
}
