"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    const [shouldRender, setShouldRender] = React.useState(isOpen);

    React.useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500); // Wait for animation
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex justify-end md:hidden transition-opacity duration-300",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div
                className={cn(
                    "relative h-full w-full max-w-sm flex flex-col p-8 pt-20 transition-transform duration-500 ease-in-out",
                    GLASS_EFFECTS,
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-6 right-6 rounded-full hover:bg-white/10"
                    onClick={onClose}
                >
                    <X className="h-6 w-6" />
                </Button>

                <nav className="flex flex-col gap-8 mt-12">
                    {links.map((link, index) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={onClose}
                            className={cn(
                                "text-4xl font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all duration-500 transform translate-x-10 opacity-0",
                                isOpen && "translate-x-0 opacity-100"
                            )}
                            style={{ transitionDelay: `${100 + index * 100}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
