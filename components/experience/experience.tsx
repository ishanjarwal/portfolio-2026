"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS } from "@/lib/constants";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "June 2025 - August 2025",
    description:
      "Collaborated with the engineering team to develop and maintain web applications using React and Next.js. Optimized frontend performance and implemented responsive designs.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Open Source Contributor",
    company: "GitHub Community",
    location: "Remote",
    period: "Jan 2025 - Present",
    description:
      "Contributing to various open-source projects, fixing bugs, and implementing new features. Focused on React and TypeScript ecosystems.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Jaipur, India",
    period: "August 2024 - Dec 2024",
    description:
      "Developed custom websites for small businesses using modern tech stacks like Next.js and Tailwind CSS. Managed client requirements and project delivery from scratch.",
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const ExperienceItem = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  return (
    <div className="relative pl-12 md:pl-0">
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
        <div className="text-primary">{exp.icon}</div>
      </div>

      <div
        className={cn(
          "flex flex-col mb-12",
          index % 2 === 0
            ? "md:items-end md:mr-[50%] md:pr-12"
            : "md:items-start md:ml-[50%] md:pl-12",
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={cn(
            "p-6 mt-0 w-full max-w-2xl rounded-3xl relative group",
            GLASS_EFFECTS,
          )}
        >
          {/* Connector Line (Desktop) */}
          <div
            className={cn(
              "hidden md:block absolute top-6 w-12 h-px bg-primary/30",
              index % 2 === 0 ? "-right-12" : "-left-12",
            )}
          />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              {exp.period}
            </div>
            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">{exp.company}</span>
              <span className="text-foreground/40">•</span>
              <span className="text-foreground/40 text-sm">{exp.location}</span>
            </div>
            <p className="mt-4 text-foreground/60 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading Pattern */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <h2 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-foreground/50 to-foreground/15 select-none uppercase tracking-tighter">
              Experience
            </h2>
            <span className="absolute text-3xl md:text-4xl font-bold text-foreground tracking-tight text-shadow-md uppercase">
              Work Experience
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[18px] md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-transparent via-primary/75 to-transparent -translate-x-1/2 " />

          <div className="space-y-4 md:space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
