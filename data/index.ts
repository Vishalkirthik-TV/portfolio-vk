import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const projects = [
  {
    id: 1,
    title: "Linzo",
    des: "Real-time VoIP communication platform with speech-to-text, text-to-speech, and sign-language-based visual assistance for accessible multilingual conversations.",
    img: "/galerie.png",
    iconLists: ["/re.svg", "/ts.svg", "/js.svg", "/jwt.svg"],
    link: "https://github.com/Vishalkirthik-TV",
    sourceCode: "https://github.com/Vishalkirthik-TV",
    tags: ["React", "TypeScript", "Node.js", "Twilio SDK", "Auth0"],
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "FoodSense",
    des: "Mobile app that spots food allergens in real time with on-device OCR and barcode scans, offering user profile customization and safe product alternatives.",
    img: "/splore.png",
    iconLists: ["/re.svg", "/js.svg", "/ts.svg"],
    link: "https://github.com/Vishalkirthik-TV",
    sourceCode: "https://github.com/Vishalkirthik-TV",
    tags: ["React Native", "Expo", "ML Kit", "Node.js", "MongoDB"],
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Zent",
    des: "Telegram-native escrow platform for freelancers with milestone-based payments, on-chain fund locking, and a Python-based OCR pipeline for automated document extraction.",
    img: "/find-my-bills.png",
    iconLists: ["/re.svg", "/ts.svg", "/Solidity.svg", "/Hardhat.svg"],
    link: "https://github.com/Vishalkirthik-TV",
    sourceCode: "https://github.com/Vishalkirthik-TV",
    tags: ["React.js", "Node.js", "Python", "Solidity", "MongoDB"],
    color: "#FFE66D",
  },
  {
    id: 4,
    title: "FindMyBills",
    des: "OCR-powered bill digitization platform enabling searchable bill storage, expense insights, and improved document retrieval for individuals and businesses.",
    img: "/find-my-bills.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/azure.svg", "/firebase.svg"],
    link: "https://findmybills.vercel.app",
    sourceCode: "https://findmybills.vercel.app",
    tags: ["MERN Stack", "Azure OCR", "TypeScript"],
    color: "#C3AED6",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TripandThrill",
    period: "Present",
    desc: "Developed and optimized search and filtering for 500+ travel listings with pagination and query-based APIs. Revamped landing and listing UI, achieving 80+ Lighthouse scores. Built data-driven UI features like availability indicators and trending tags.",
    tags: ["React.js", "Node.js", "Supabase", "PostgreSQL", "Vercel", "TypeScript"],
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Freelance Dev",
    company: "Independent",
    period: "Jan 2025 – Jul 2025",
    desc: "Built Roomies (shared accommodation platform with React Native & Firebase) and FindMyBills (OCR-powered bill digitization with MERN stack & Azure OCR). Contributed to ₹5,00,000+ in pre-seed funding for Roomies.",
    tags: ["MERN Stack", "React Native", "TypeScript", "Firebase", "Azure OCR"],
    color: "#4ECDC4",
  },
] as const;

export const achievements = [
  {
    title: "Idea3 Industrial Hackathon",
    place: "1st Place",
    org: "SVPCET",
    year: "2025",
    color: "#FFE66D",
  },
  {
    title: "GDG Hackathon",
    place: "2nd Place",
    org: "JD College of Engineering, Nagpur",
    year: "2025",
    color: "#FF6B6B",
  },
  {
    title: "Sellathon Competition",
    place: "2nd Place",
    org: "IIIT Nagpur",
    year: "2024",
    color: "#4ECDC4",
  },
  {
    title: "Telegram Mini App Hackathon",
    place: "Finalist",
    org: "Luma Labs & IIM Nagpur",
    year: "2024",
    color: "#C3AED6",
  },
  {
    title: "E-Summit Pitchers 4.0",
    place: "3rd Place",
    org: "IIIT Nagpur",
    year: "2024",
    color: "#A8E6CF",
  },
  {
    title: "Smart India Hackathon",
    place: "Regional Qualifier",
    org: "100k+ participants",
    year: "2023",
    color: "#74B9FF",
  },
  {
    title: "Holistic Scholar Award",
    place: "Recipient",
    org: "",
    year: "2024",
    color: "#FF8B94",
  },
] as const;

export const skillCategories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "Python"],
    color: "#FF6B6B"
  },
  {
    title: "Frontend",
    items: ["React.js", "React-Native", "Redux", "Material UI"],
    color: "#4ECDC4"
  },
  {
    title: "Backend",
    items: ["Express.js", "NestJs"],
    color: "#FFE66D"
  },
  {
    title: "Databases & storage",
    items: ["MongoDB", "PostgreSQL", "Firebase"],
    color: "#A8E6CF"
  },
  {
    title: "DevOps / Tooling / Others",
    items: ["Git/GitHub", "Docker"],
    color: "#C3AED6"
  }
] as const;

export const skills = [
  "JavaScript", "TypeScript", "React.js", "Redux", "Node.js",
  "Express.js", "REST APIs", "MongoDB", "Git/GitHub", "Docker",
  "C++", "Python"
] as const;

export const education = {
  degree: "B.Tech in Computer Science and Business Systems",
  period: "2022-26",
  institution: "St. Vincent Pallotti College of Engineering and Technology",
  location: "Nagpur, IN",
} as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Vishalkirthik-TV",
  },
  {
    name: "Twitter",
    img: "/x.svg",
    link: "https://x.com/vishalkirthik5",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vishalkirthik",
  },
] as const;
