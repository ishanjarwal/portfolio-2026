"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn",
    },
    {
        icon: Github,
        href: "https://github.com/yourusername",
        label: "GitHub",
    },
    {
        icon: Mail,
        href: "mailto:your.email@example.com",
        label: "Email",
    },
]

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_bg.png"
                    alt="Abstract Background"
                    fill
                    priority
                    className="object-cover opacity-90 dark:opacity-60"
                />
                <div className="absolute inset-0 bg-background/30 dark:bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="z-10 flex flex-col items-center gap-6 text-center animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
                <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 drop-shadow-sm">
                    Ishan Jarwal
                </h1>
                <p className="max-w-[42rem] px-4 font-sans text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
                    Full Stack Developer crafting sleek & performant digital experiences.
                    <br className="hidden sm:inline" /> Specializing in Next.js, React, and Modern Web UI.
                </p>

                <div className="mt-4">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base h-12 border-muted-foreground/20 bg-background/50 hover:bg-background/80 backdrop-blur-sm">
                        <Link href="#contact">
                            Get in Touch
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Social Links Sidebar */}
            <div className="absolute bottom-12 left-8 md:left-12 z-20 hidden md:flex flex-col gap-6">
                <div className="h-24 w-[1px] bg-border mx-auto mb-2" />
                {socialLinks.map((social) => (
                    <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-transform hover:scale-125 hover:text-foreground"
                        aria-label={social.label}
                    >
                        <social.icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
        </section>
    )
}
