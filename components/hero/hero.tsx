"use client";

import { GLASS_SHADOWS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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
];

const profile_image =
  "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1768759954/ishan_jarwal_g1ioz5.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6 text-center bg-">
        <div className="w-24 aspect-square">
          <Image
            src={profile_image}
            height={200}
            width={200}
            className="rounded-full overflow-hidden object-cover object-center shadow-2xl"
            alt={"Ishan Jarwal"}
          />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 leading-normal">
          Ishan Jarwal
        </h1>
        <p className="max-w-2xl px-4 font-sans text-foreground text-sm md:text-lg ">
          Hi, I’m Ishan, a passionate <b>Software Developer</b> based in Jaipur
          with experience in building <b>user centric</b>, <b>dynamic</b> and{" "}
          <b>AI first</b> web applications. I specialize in TypeScript, ReactJS,
          NextJS, NodeJS, ExpressJS (see my projects), and have a keen interest
          in modern web technologies and Generative AI.
        </p>

        <div className="mt-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              "group rounded-full px-8 text-base h-12 hover:bg-background/80 backdrop-blur-sm gap-0 relative hover:pe-12",
              GLASS_SHADOWS,
            )}
          >
            <Link href="#contact">
              Get in Touch
              <span className="absolute opacity-0  right-0 -translate-x-6 group-hover:opacity-100 group-hover:-translate-x-4 duration-200">
                <MoveRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Social Links Sidebar */}
      <div className="absolute bottom-12 left-8 md:left-12 z-20 hidden md:flex flex-col gap-6">
        <div className="h-24 w-px bg-border mx-auto mb-2" />
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-transform hover:scale-125 hover:text-primary"
            aria-label={social.label}
          >
            <social.icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
