import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/vkboi5/portfolio-vk",
  ownerName: "Vishalkirthik",
  ownerEmail: "vishalkirthiktv@gmail.com",
  github: "https://github.com/Vishalkirthik-TV",
  linkedin: "https://www.linkedin.com/in/vishalkirthik",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "Neo-Brutalist Portfolio — Bold design, thick borders, hard shadows.",
  icons: {
    icon: [
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
      { url: "/icon2.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-icon.png"
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "aceternity",
    "aceternity-ui",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "modern-portfolio",
    "portfolio",
    "3d-portfolio",
    "animated-portfolio",
    "nextjs-portfolio",
    "react-portfolio",
    "react-three-fiber",
    "three.js",
    "animated-website",
    "framer",
    "framer-motion",
    "three",
    "react-icons",
    "lucide-react",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/vkboi5",
  },
} as const;
