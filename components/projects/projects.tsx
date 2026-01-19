"use client";

import { cn } from "@/lib/utils";
import { GLASS_EFFECTS, projects } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "rounded-3xl p-6 md:p-8 flex flex-col gap-8 relative group overflow-hidden h-full duration-150",
        GLASS_EFFECTS,
        "hover:shadow-[0px_4px_16px_4px_#000000] hover:scale-[1.01]",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 aspect-square rounded-2xl bg-primary/10 text-primary group-hover:scale-110 duration-300">
            <p className="font-bold text-xl">{index + 1}.</p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-2">
              {project.title}
            </h3>
            <div className="flex justify-start flex-wrap gap-2">
              <Badge className="bg-green-500/25 border border-green-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-500/80 uppercase tracking-wider">
                  {project.status}
                </span>
              </Badge>
              {project.type.map((type) => (
                <div key={type} className="md:hidden px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest whitespace-nowrap hover:bg-primary/25 duration-100 w-fit">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="not-md:hidden flex flex-wrap justify-end items-center gap-1">
          {project.type.map((type) => (
            <div key={type} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest whitespace-nowrap hover:bg-primary/25 duration-100">
              {type}
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="flex md:flex-row flex-col items-start gap-4">
        <div className="bg-background rounded-[12px] relative aspect-[1.4329] md:w-48  w-full overflow-hidden">
          <Image
            fill
            alt={project.title}
            src={project.image}
            className="object-center object-cover"
          />
        </div>
        <p className="flex-1 text-foreground/60 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 grow">
        {/* Key Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-primary rounded-full" />
            <h4 className="text-sm font-bold text-primary uppercase tracking-tighter">
              Key Features
            </h4>
          </div>
          <div className="sm:columns-2 columns-1 gap-3">
            {project.highlights.slice(0, 6).map((highlight, index) => (
              <div
                key={index}
                className="flex mb-3 items-start gap-3 bg-foreground/10 p-3 rounded-lg border border-transparent hover:border-primary/10 transition-colors group/item shrink-0 h-fit"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="text-xs md:text-sm text-foreground/70 leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-purple-500 rounded-full" />
            <h4 className="text-sm font-bold text-purple-500 uppercase tracking-tighter">
              Tech Stack
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 transparent text-foreground/70 text-sm whitespace-nowrap rounded-full border border-foreground/25 hover:border-primary/50 hover:text-primary transition-colors "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-foreground/5">
        <Button
          asChild
          className="rounded-xl h-12 px-6 font-bold shadow-[0px_10px_18px_-10px_#080808]"
        >
          <Link href={project.live} target="_blank">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={cn(
            "rounded-xl h-12 px-6 font-bold hover:bg-foreground/5 transition-colors border-foreground/10",
            GLASS_EFFECTS,
          )}
        >
          <Link href={project.github} target="_blank">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <h2 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-foreground/50 to-transparent select-none ">
              PROJECTS
            </h2>
            <span className="absolute text-3xl md:text-4xl font-bold text-foreground tracking-tight text-shadow-md">
              PROJECTS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
