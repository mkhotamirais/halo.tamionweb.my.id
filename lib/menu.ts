import { Project, Skill } from "./menu-types";

export const menu = ["home", "projects", "about", "skills", "experience", "contact"];

export const projects: Project[] = [
  {
    title: "Wordpress Tamionweb",
    href: "https://tamionweb.my.id",
    description: "Wordpress Tamionweb built with wordpress hosted on rumahweb",
    tools: ["Wordpress", "elementor"],
  },
  {
    title: "Saikindo",
    href: "https://saikindo.co.id",
    description: `Saikindo company's website containing the company profile, products, and other services.`,
    tools: ["next", "react", "tailwind", "typescript", "shadcn", "zustand"],
    imagePath: "images/saikindo-shoot-1.jpg",
  },
  {
    title: "Next Jikan",
    href: "https://next-jikan.vercel.app",
    description: `Nextjs with anime data from public api jikan animae`,
    tools: ["next", "react", "tailwind", "typescript", "shadcn", "zustand"],
    imagePath: "images/next-jikan-shoot-1.jpg",
  },
  {
    title: "PublicApi",
    href: "https://tamipublicapi.vercel.app/",
    description: `The project retrieves data from a public API called OMDB API and presents it in a grid system. It includes features like searching, filtering, and detailed views for each item, offering a comprehensive and user-friendly interface.`,
    tools: [
      "shadcn",
      "zustand",
      "DummyJson",
      "FakestoreApi",
      "JikanAnime",
      "Jsonplaceholder",
      "NewsApi",
      "Reqres",
      "Sisko",
      "TMDB",
      "nextjs",
      "omdbapi",
    ],
    imagePath: "images/tamipublicapi-shoot-1.jpg",
  },
  {
    title: "Vite Firebase",
    href: "https://vite-firebase-tami.vercel.app",
    description: `Vite buildtool with database and storage from firebase and hosted by vercel.`,
    tools: ["vite", "firebase", "tailwind", "typescript", "shadcn", "zustand"],
    imagePath: "images/vite-firebase-shoot-1.jpg",
  },
  {
    title: "Hadin Al Musri`",
    href: "https://hadinalmusri.com",
    description: `Hadinalmusri school website located in Pagaden Subang, containing the school profile and other information.`,
    tools: ["next", "react", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Next Shad",
    href: "https://next-shad-tami.vercel.app",
    description: `Nextjs with database and storage from vercel, include hosting`,
    tools: ["next", "vercel", "react", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Next Appwrite",
    href: "https://next-appwrite.vercel.app",
    description: `Nextjs with database and storage from appwrite, and hosted by vercel`,
    tools: ["next", "appwrite", "react", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Vite Shop Tami",
    href: "https://vite-shop-tami.vercel.app",
    description: `Using Vite for a React frontend, with a Node.js and Express backend connected to a MongoDB database, and hosting the project on Vercel.`,
    tools: ["vite", "mongodb", "express", "nodejs", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Vite Shad",
    href: "https://vite-shad.vercel.app",
    description: "Vite buildtool contains components and tips with hosting from vercel.",
    tools: ["html", "css", "javascript", "tailwind", "shadcn", "zustand"],
  },
  {
    title: "Next Lang",
    href: "https://next-lang-tami.vercel.app",
    description:
      "This website is built using Next.js, with dynamic internationalization powered by next-intl, allowing seamless language switching between English, Arabic, and more",
    tools: ["next", "next-intl", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "MERN",
    href: "https://tamimern.vercel.app/",
    description: `This project involves implementing four todo apps, each with identical functionality but utilizing different tools for their respective implementations.`,
    tools: ["bcrypt", "cloudinary", "freesqldb", "jwt", "mongodb", "mongoose", "multer", "mysql", "railway", "react"],
  },
];

export const skills: Skill[] = [
  {
    title: "Wordpress",
    imgUrl: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
    type: "fullstack",
  },
  {
    title: "Framer",
    imgUrl: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    type: "front-end",
  },
  {
    title: "Nest",
    imgUrl: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/nestjs.svg",
    type: "back-end",
  },
  {
    title: "Cloudinary",
    imgUrl: "https://raw.githubusercontent.com/dochne/wappalyzer/main/src/images/icons/Cloudinary.svg",
    type: "back-end",
  },
  {
    title: "React",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/React.svg",
    type: "front-end",
  },
  {
    title: "Next.js",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/NextJS-Alt.svg",
    type: "fullstack",
  },
  { title: "Zod", imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/Zod.svg", type: "fullstack" },
  {
    title: "Node.js",
    imgUrl:
      "https://raw.githubusercontent.com/actions/starter-workflows/666350e29b10d665a82d5c6d1501a29e50d63c29/icons/nodejs.svg",
    type: "back-end",
  },
  { title: "Firebase", imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/Firebase.svg", type: "back-end" },
  { title: "Supabase", imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/Supabase.svg", type: "back-end" },
  {
    title: "Appwrite",
    imgUrl: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
    type: "back-end",
  },
  {
    title: "Express",
    imgUrl: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/expressjs.svg",
    type: "back-end",
  },
  { title: "HTML5", imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/HTML5.svg", type: "front-end" },
  { title: "CSS3", imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/CSS3.svg", type: "front-end" },
  {
    title: "JavaScript",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/JavaScript.svg",
    type: "fullstack",
  },
  {
    title: "TypeScript",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/TypeScript-Alt.svg",
    type: "fullstack",
  },
  {
    title: "Tailwind CSS",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/TailwindCSS-Alt.svg",
    type: "front-end",
  },
  {
    title: "ShadCN",
    imgUrl: "https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/bestofjs-nextjs/public/logos/shadcnui.svg",
    type: "front-end",
  },
  {
    title: "Bootstrap",
    imgUrl: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/bootstrap.svg",
    type: "front-end",
  },
  {
    title: "Materialize",
    imgUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/materializecss/materializecss-original.svg",
    type: "front-end",
  },
  {
    title: "Redux",
    imgUrl: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/redux.svg",
    type: "front-end",
  },
  {
    title: "Zustand",
    imgUrl: "https://raw.githubusercontent.com/prplx/svg-logos/master/svg/Zustand.svg",
    type: "front-end",
  },
  { title: "MongoDB", imgUrl: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", type: "database" },
  {
    title: "MySQL",
    imgUrl: "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/mysql.svg",
    type: "database",
  },
  {
    title: "PostgreSQL",
    imgUrl: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/postgres.svg",
    type: "database",
  },
  { title: "SQLite", imgUrl: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg", type: "database" },
  {
    title: "Vercel",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/Vercel-Alt.svg",
    type: "fullstack",
  },
  {
    title: "Netlify",
    imgUrl: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/netlify-icon.svg",
    type: "fullstack",
  },
  {
    title: "GitHub",
    imgUrl: "https://github.com/prplx/svg-logos/raw/master/svg/Github-Alt.svg",
    type: "fullstack",
  },
];
