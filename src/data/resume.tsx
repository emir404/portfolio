import { Icons } from "@/components/icons";
import { video } from "framer-motion/client";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Emir Ayaz",
  initials: "EA",
  url: "https://emirayaz.com",
  location: "Sakarya, Turkey",
  locationLink: "https://www.google.com/maps/place/sakarya",
  description:
    "Tech entrepreneur and full-stack developer passionate about innovation, fitness, and nature.",
  summary:
    "Hi, I'm **Emir Ayaz**, the co-founder of **Syntra Media**, a web agency focused on delivering cutting-edge digital solutions. Since I started coding at the end of 2021, I've mastered **Lua**, **Python**, **JavaScript**, **TypeScript**, **React**, **Next.js**, and **Tailwind**. Beyond Syntra Media, I'm an entrepreneur who has founded **Focusify** and **Coopeak**, and I've also had the opportunity to work at **Justhink**. My interests extend beyond tech—I'm passionate about **fitness**, **running**, and spending time in **nature** while staying engaged with the latest innovations in **technology**.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Lua",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "emirayaz2@icloud.com",
    tel: "+905349214383",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/emir404",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emirayaz1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/emirthedev",
        icon: Icons.x,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://instagram.com/emirayz272",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:emirayaz2@icloud.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Syntra Media",
      href: "https://syntramedia.com",
      badges: [],
      location: "Hybrid",
      title: "Co-founder, Head of Technology",
      logoUrl: "/syntra.png",
      start: "June 2024",
      end: "Present",
      description:
        "Syntra Media is a passionate digital agency that transforms businesses through exceptional web design, SEO, and social media strategies. We craft tailored digital experiences that reflect our clients' unique visions, helping brands connect with their audiences and thrive online. Founded by creative minds who love technology, we prioritize building lasting relationships with our clients and delivering results that matter. Let us bring your ideas to life!",
    },
    {
      company: "Focusify",
      badges: [],
      href: "/",
      location: "Hybrid",
      title: "Co-founder, CTO",
      logoUrl: "/focusify.jpeg",
      start: "December 2023",
      end: "April 2024",
      description:
        "Focusify is your personal productivity companion, designed to help you effortlessly plan your daily tasks, track your time, and make the most of each day. With its intuitive AI features, it guides you in organizing your responsibilities, ensuring you stay focused and on track, so you can achieve your goals and enjoy a more balanced life.",
    },
    {
      company: "CooPeak",
      href: "/",
      badges: [],
      location: "Hybrid",
      title: "Co-founder, VP of Technology",
      logoUrl: "/coopeak.jpg",
      start: "March 2023",
      end: "December 2023",
      description:
        "CooPeak is a web agency specializing in creating custom digital solutions for businesses. We focus on developing responsive websites, e-commerce platforms, and web applications tailored to meet our clients' unique needs and goals.",
    },
    {
      company: "Justhink",
      href: "/",
      badges: [],
      location: "Hybrid",
      title: "Frontend Developer",
      logoUrl: "/justhink.jpg",
      start: "November 2022",
      end: "July 2023",
      description:
        "At Justhink, we strive to connect the new ideas that often get overlooked in our daily lives with people who are eager to listen and collaborate. Our mission is to create a platform where innovative thoughts can flourish and thrive, fostering a community that values creativity and open dialogue.",
    },
  ],
  education: [
    {
      school: "Şehit Üsteğmen Selçuk Esedoğlu Anadolu Lisesi",
      href: "https://suseal.meb.k12.tr/",
      degree: "High School",
      logoUrl: "/suseal.jpg",
      start: "2022",
      end: "Present",
    },

  ],
  projects: [
    {
      title: "Syntra Media",
      href: "https://syntramedia.com",
      dates: "June 2024 - Present",
      active: true,
      description:
      "A comprehensive digital platform with website, blog, client portal, and meetings system, showcasing complex web application development skills."
    ,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://syntramedia.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://cdn.discordapp.com/attachments/1289668221439315968/1289668303039500339/image.png?ex=66f9a8b4&is=66f85734&hm=e7f366745a091df7cbd9ba053da072e274e56db80d557521a0893656e1a19d99&",
      video: "",
    },
    {
      title: "Focusify",
      href: "/",
      dates: "December 2023 - April 2024",
      active: false,
      description:
        "Focusify is a comprehensive productivity platform featuring Pomodoro timers, task management, and ambient sounds, designed to enhance focus and efficiency in daily work and personal tasks.",
      technologies: ["HTML", "CSS", "JavaScript", "Django"],
      links: [
        {
          type: "Instagram",
          href: "https://instagram.com/focusifynet",
          icon: <Icons.instagram className="size-3" />,
        },
      ],
      image: "https://cdn.discordapp.com/attachments/1289668221439315968/1289669161508798636/pc.png?ex=66f9a980&is=66f85800&hm=32a679b282d3f0d3dc75be530c850b210cfc92db3d7d64ca0414221c0b38e3e9&",
      video: "",
    },
  ],
} as const;
