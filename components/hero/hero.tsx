"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Phone,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS } from "@/lib/constants";
import { Badge } from "../ui/badge";

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
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden not-sm:p-4"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "z-10 flex flex-col items-center gap-6 text-center p-8 rounded-xl max-w-4xl w-full mt-16",
          GLASS_EFFECTS,
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-24 aspect-square"
        >
          <Image
            src={profile_image}
            height={200}
            width={200}
            className="rounded-full overflow-hidden object-cover object-center shadow-2xl"
            alt={"Ishan Jarwal"}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 leading-normal"
        >
          Ishan Jarwal
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-1 flex-wrap"
        >
          <Badge variant={"default"} className="p-1 px-2 bg-background/25">
            <MapPin />
            Jaipur, India
          </Badge>
          <Badge
            variant={"default"}
            className="p-1 px-2 bg-background/25"
            asChild
          >
            <Link href={"mailto:ishan.professional01@gmail.com"}>
              <Mail />
              ishan.professional01@gmail.com
            </Link>
          </Badge>
          <Badge
            variant={"default"}
            className="p-1 px-2 bg-background/25"
            asChild
          >
            <Link href={"tel:+91 9116080979"}>
              <Phone />
              +91 9116080979
            </Link>
          </Badge>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl px-4 font-sans text-foreground text-sm md:text-lg "
        >
          Hi, I’m Ishan, a passionate <b>Software Developer</b> based in Jaipur
          with experience in building <b>user centric</b>, <b>dynamic</b> and{" "}
          <b>AI first</b> web applications. I specialize in TypeScript, ReactJS,
          NextJS, NodeJS, ExpressJS (see my projects), and have a keen interest
          in modern web technologies and Generative AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              "group rounded-full px-8 text-base h-12 hover:bg-background/80 backdrop-blur-sm gap-0 relative hover:pe-12",
              GLASS_EFFECTS,
            )}
          >
            <Link href="#contact">
              Get in Touch
              <span className="absolute opacity-0  right-0 -translate-x-6 group-hover:opacity-100 group-hover:-translate-x-4 duration-200">
                <MoveRight />
              </span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Social Links Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-8 md:left-12 z-20 hidden md:flex flex-col gap-6"
      >
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
      </motion.div>
    </section>
  );
};

export default Hero;
