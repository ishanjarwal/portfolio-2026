"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

const menuVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1], // Cubic bezier for smooth exit
      when: "afterChildren", // Wait for items to exit
      staggerChildren: 0.1, // Stagger exit
      staggerDirection: -1, // Reverse order
    },
  },
  open: {
    x: "0%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1], // Cubic bezier for smooth entrance
      when: "beforeChildren", // Parent enters first
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const backdropVariants: Variants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-100 md:hidden">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel - Wrapped in a flex container to align right */}
          <div className="absolute inset-0 flex justify-end pointer-events-none">
            <motion.div
              key="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                "relative h-full w-full max-w-sm flex flex-col p-8 pt-20 pointer-events-auto",
                GLASS_EFFECTS,
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
                {links.map((link) => (
                  <motion.div key={link.label} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-4xl font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
