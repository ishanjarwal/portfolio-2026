"use client";

import { GLASS_EFFECTS, skills, socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, MailIcon, User } from "lucide-react";
import Link from "next/link";

interface BentoCardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const BentoCard = ({
  title,
  description,
  className,
  children,
  icon,
}: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group",
        GLASS_EFFECTS,
        className,
      )}
    >
      <div className="z-10 h-full flex flex-col">
        {icon && (
          <div className="mb-4 text-primary bg-primary/10 w-fit p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        )}
        {description && (
          <p className="text-foreground/50 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}
        <div className="grow">{children}</div>
      </div>
      {/* Subtle hover effect background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 flex items-center justify-center px-4"
    >
      <div className="max-w-6xl w-full mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <h2 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-foreground/50 to-transparent select-none ">
              ABOUT ME
            </h2>
            <span className="absolute text-3xl md:text-4xl font-bold text-foreground tracking-tight text-shadow-md">
              ABOUT ME
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {/* Main Intro Card */}
          <BentoCard
            title="A Bit About Me"
            className="md:col-span-2 md:row-span-2 min-h-[300px]"
            icon={<User className="w-6 h-6" />}
          >
            <div className="flex flex-col h-full">
              <p className="text-foreground/75 text-sm md:text-lg text-md leading-relaxed grow">
                Self-driven and detail-oriented Computer Science undergraduate
                (3rd year; CGPA 9.29) with a strong foundation in C++, Python,
                and modern web technologies. Proficient in building robust
                backend architectures using Node.js, Express.js, and REST APIs.
                Skilled in TypeScript and Next.js for full-stack application
                development, with a fundamental understanding of Linux
                environments.
                <br />
                <br />
                <ul className="list-disc ms-4">
                  <li>
                    Passionate about building efficient, real-world systems
                    using REST APIs and RPC with modern web & AI technologies
                  </li>
                  <li>
                    Strong grasp of system design principles and performance
                    optimization
                  </li>
                  <li>
                    Experience working across the stack with a focus on clean,
                    maintainable code
                  </li>
                  <li>
                    Actively exploring advancements in Generative AI, including
                    tools like LangChain and LangGraph.
                  </li>
                </ul>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full border border-primary/20">
                  Open for Work
                </span>
                <span className="bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full border border-primary/20">
                  Quick Learner
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Education Card */}
          <BentoCard
            title="Education"
            className="md:col-span-2 md:row-span-1"
            icon={<GraduationCap className="w-6 h-6" />}
          >
            <p className="text-sm font-bold mt-auto ">
              B.Tech CSE - JECRC University, Jaipur
            </p>
            <p className="text-sm mt-auto ">2021 - 2025</p>
            <p className="text-sm mt-auto ">
              (GPA - <b>9.3</b>)
            </p>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard
            title="Tech Stack"
            className="md:col-span-2 md:row-span-3 h-full"
            icon={<Cpu className="w-6 h-6" />}
          >
            <div className="space-y-6">
              {skills.map((category) => (
                <div key={category.heading} className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                    {category.heading}
                  </h4>
                  <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
                    {category.bullets.map((skill) => (
                      <div
                        key={skill.technology}
                        className={cn(
                          "flex items-center gap-3 bg-foreground/5 p-3 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300 group/skill",
                          GLASS_EFFECTS,
                          "bg-background/15",
                        )}
                      >
                        {skill.icon && (
                          <span
                            style={{ fill: skill.color }}
                            className="h-6 w-6"
                          >
                            {skill.icon}
                          </span>
                        )}
                        <span className="text-sm font-medium text-foreground/75 group-hover/skill:text-foreground transition-colors">
                          {skill.technology}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Connect with me Card */}
          <BentoCard className="md:col-span-2 md:row-span-1 h-full">
            <div className="flex flex-col items-center justify-between gap-6 h-full">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary/40">
                  My Profiles
                </h3>
                <p className="text-foreground/40">
                  Feel free to reach out if you want to talk about any
                  opportunities to work together or if you just want to say hi.
                </p>
                <br />
              </div>
              <div className="grid grid-cols-2 w-full md:gap-4 gap-1">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    target="_blank"
                    href={link.link}
                    className={cn(
                      "flex justify-start items-center gap-2 p-4 rounded-[12px] hover:bg-foreground/10 hover:text-primary duration-150",
                      GLASS_EFFECTS,
                    )}
                  >
                    <span className="size-6">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                ))}
                <Link
                  href={"#contact"}
                  className={cn(
                    "flex col-span-2 justify-center items-center gap-2 p-4 rounded-[12px] hover:bg-foreground/10 hover:text-primary duration-150",
                    GLASS_EFFECTS,
                  )}
                >
                  <span className="size-6 text-foreground">
                    <MailIcon />
                  </span>
                  <span>Get in Touch</span>
                </Link>
              </div>
              {/* <div className="p-4 bg-primary/10 rounded-3xl group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-10 h-10 text-primary" />
              </div> */}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
