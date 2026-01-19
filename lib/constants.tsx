export const GLASS_EFFECTS =
  "shadow-[inset_0px_0px_10px_4px_#080808] shadow-[0px_10px_18px_-10px_#080808] border border-foreground/10 bg-background/40 backdrop-blur-md";

import {
  AxiosIcon,
  CIcon,
  CppIcon,
  ExpressIcon,
  FastifyIcon,
  GithubIcon,
  GraphQLIcon,
  LeetcodeIcon,
  LinkedinIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SQLIcon,
  TRPCIcon,
  TSIcon,
  TailwindIcon,
  XIcon,
} from "@/components/icon_components/Icons";

export const skills = [
  {
    heading: "Core Languages",
    bullets: [
      {
        technology: "C++",
        icon: <CppIcon className="w-5 h-5" />,
        color: "#21a6ff",
      },
      {
        technology: "C",
        icon: <CIcon className="w-5 h-5" />,
        color: "#1572B6",
      },
      {
        technology: "Python",
        icon: <PythonIcon className="w-5 h-5" />,
        color: "#1572B6",
      },
      {
        technology: "TypeScript",
        icon: <TSIcon className="w-5 h-5" />,
        color: "#1572B6",
      },
    ],
  },
  {
    heading: "Back-End",
    bullets: [
      {
        technology: "Node.js",
        icon: <NodeIcon className="w-5 h-5" />,
        color: "#5FA04E",
      },
      {
        technology: "Fastify",
        icon: <FastifyIcon className="w-5 h-5" />,
        color: "#5FA04E",
      },
      {
        technology: "tRPC",
        icon: <TRPCIcon className="w-5 h-5" />,
        color: "#5FA04E",
      },
      {
        technology: "PostgreSQL",
        icon: <PostgresIcon className="w-5 h-5" />,
        color: "#5FA04E",
      },
      {
        technology: "MongoDB",
        icon: <MongoIcon className="w-5 h-5" />,
        color: "#47A248",
      },
      {
        technology: "Express",
        icon: <ExpressIcon className="w-5 h-5" />,
        color: "#000000",
      },
      {
        technology: "Axios",
        icon: <AxiosIcon className="w-5 h-5" />,
        color: "#5A29E4",
      },
      {
        technology: "GraphQL",
        icon: <GraphQLIcon className="w-5 h-5" />,
        color: "#E10098",
      },
      {
        technology: "MySQL",
        icon: <SQLIcon className="w-5 h-5" />,
        color: "#4479A1",
      },
    ],
  },
  {
    heading: "Front-End",
    bullets: [
      // {
      //   technology: "HTML5",
      //   icon: <HTMLIcon className="w-5 h-5" />,
      //   color: "#E34F26",
      // },
      // {
      //   technology: "CSS3",
      //   icon: <CSSIcon className="w-5 h-5" />,
      //   color: "#1572B6",
      // },
      // {
      //   technology: "JavaScript",
      //   icon: <JSIcon className="w-5 h-5" />,
      //   color: "#F7DF1E",
      // },
      {
        technology: "Next.js",
        icon: <NextIcon className="w-5 h-5" />,
        color: "#000000",
      },
      {
        technology: "React",
        icon: <ReactIcon className="w-5 h-5" />,
        color: "#61DAFB",
      },
      {
        technology: "Redux",
        icon: <ReduxIcon className="w-5 h-5" />,
        color: "#764ABC",
      },
      {
        technology: "Tailwind",
        icon: <TailwindIcon className="w-5 h-5" />,
        color: "#06B6D4",
      },
    ],
  },
];

export const socialLinks = [
  {
    name: "Github",
    icon: <GithubIcon />,
    link: "https://www.github.com/ishanjarwal",
  },
  // {
  //   name: "Instagram",
  //   icon: <FaInstagram />,
  //   link: "https://www.instagram.com/ishanjarwal",
  // },
  // {
  //   name: "Facebook",
  //   icon: <SlSocialFacebook />,
  //   link: "https://www.facebook.com/profile.php?id=100082865800854",
  // },
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/ishan-jarwal-7a2356265/",
  },
  {
    name: "X",
    link: "https://x.com/ishanjarwal",
    icon: <XIcon />,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/ishanjarwal",
    icon: <LeetcodeIcon />,
  },
];
