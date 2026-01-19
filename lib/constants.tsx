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

export const projects = [
  {
    title: "The Binary Ping - A FullStack Tech Magazine Application",
    description:
      "TheBinaryPing delivers the latest technology news, coding tutorials, developer insights, product reviews, and industry analysis to keep tech enthusiasts and programmers ahead of the curve.",
    type: ["Full Stack"],
    status: "Active",
    technologies: [
      "Passport Auth with Google OAuth2.0",
      "TypeScript",
      "NextJS",
      "ShadCN UI",
      "ExpressJS",
      "MongoDB",
      "Zod Validations",
      "TipTap Rich Text Editor",
      "Cloudinary Object Storage Service",
      "TailwindCSS",
      "Axios",
    ],
    image:
      "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1768817357/tech_news_app_thumbnail_ufejcu.jpg",
    highlights: [
      "Full-stack blogging platform with social features like liking, following, and commenting",
      "Custom Tiptap Rich Text Editor with image uploads to Cloudinary and syntax highlighting",
      "JWT and Google OAuth2 based user authentication and profile management",
      "Role-based access control for authors and readers",
      "Efficient API validation using Zod and express-validator",
      "Responsive image cropping and uploading for profile and cover images",
      "Infinite scroll loading for blog feed and search results",
      "State management using Redux Toolkit with seamless UI interactions",
      "Secure and scalable backend built with Express.js and Mongoose",
      "Optimized media delivery using Cloudinary transformations",
      "Clean and modular architecture for easy feature expansion",
      "Implemented rate limiting and input sanitization for enhanced security",
    ],
    live: "https://thebinaryping.vercel.app",
    github: "https://www.github.com/ishanjarwal/tech-news-app",
  },
  {
    title: "AI Resume Builder SaaS Application",
    description:
      "A modern and user-friendly AI Resume Builder with Clerk-based authentication and Stripe-powered recurring subscriptions. Supports multiple pricing plans with feature restrictions, AI suggestions for improving resumes, and intelligent autofill to speed up resume creation.",
    type: ["AI SaaS"],
    status: "Active",
    technologies: [
      "Clerk Auth",
      "Stripe Payment Gateway",
      "TypeScript",
      "NextJS",
      "ShadCN UI",
      "MongoDB",
      "Zod Validations",
      "TailwindCSS",
      "Axios",
    ],
    image:
      "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1768817357/resume_builder_thumbnail_k9kujy.png",
    highlights: [
      "User authentication and account management with Clerk",
      "Secure Stripe integration for recurring payments and subscriptions",
      "Multiple pricing plans with feature-based access control",
      "AI-powered suggestions to help improve resumes",
      "AI autofill to speed up resume creation",
      "Access restrictions based on user plan (free vs premium)",
      "Real-time tracking of feature usage per plan",
      "Secure handling of billing events with webhooks",
      "Built for performance and scalability",
      "Consistent error handling across the platform",
    ],

    live: "https://docuworkspace.vercel.app",
    github: "https://www.github.com/ishanjarwal/resume-builder",
  },
  {
    title: "Passport JS Authentication System + Google OAuth Integration",
    description:
      "A secure and scalable authentication system built with Passport.js, supporting JWT and Google OAuth strategies. Includes features like secure user registration, password reset via email tokens, protected routes, and robust input validations with Zod and express-validator. It is light weight and can be integrated very quickly in any project.",
    type: ["Backend"],
    status: "Active",
    technologies: [
      "Passport JS",
      "passport-jwt",
      "passport-google-oauth",
      "TypeScript",
      "NextJS",
      "ExpressJS",
      "Redux Toolkit",
      "ShadCN UI",
      "MongoDB",
      "Express-Validator",
      "Zod Validations",
      "TailwindCSS",
      "Axios",
      "express-rate-limiter",
      "Bcrypt",
      "mongoose",
    ],
    image:
      "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1768817355/passport_auth_rwkmim.png",
    highlights: [
      "User registration and login system",
      "Secure password hashing with Bcrypt",
      "Password reset via email tokens",
      "JWT cookie-based authentication using Passport.js",
      "Google OAuth 2.0 login integration",
      "Protected routes with access control",
      "Input validation with Zod and Express-Validator",
      "Scalable user data storage with MongoDB",
      "Rate limiting for enhanced security",
      "Comprehensive error handling for backend routes",
    ],
    live: "https://passport-authentication-project.vercel.app",
    github: "https://www.github.com/ishanjarwal/passport-authentication",
  },
];
