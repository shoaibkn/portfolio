import { Icons } from "@/components/icons";
import { GlobeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shoaib Khan",
  initials: "SK",
  url: "https://lumin8.in",
  location: "Agra, India",
  locationLink: "https://www.google.com/maps/place/agra",
  description:
    "Creative professional with 4+ years of experience in software development and IT and Data administration. Skilled in designing custom software solutions for businesses.",
  summary:
    "Technology enthusiast with a strong background in IT systems, ERP integration, and workflow automation, seeking to contribute to manufacturing or industrial organizations by modernizing and optimizing their technical infrastructure. Passionate about building practical, scalable solutions that improve operational efficiency, data accuracy, and cross-functional collaboration.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MySQL",
    "SQL Server",
    "MongoDB",
    "Advanced Excel",
    "Google Apps Script",
    "Office Automation",
    "Windows Server Administration",
    "Linux Server Administration",
    "AWS",
    "Docker",
    "Linux",
    "UI/UX Design",
    "Self Hosting",
    "AI Deployment",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "lumin8.in", icon: GlobeIcon, label: "Website" },
  ],
  contact: {
    email: "shoaibkn66@gmail.com",
    tel: "+91 8279497847",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shoaibkn",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shoaib-khan-313323167",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shoaibkn66@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VRD Exports",
      href: "https://vrdexports.in",
      badges: [],
      location: "On Site",
      title: "IT and Full Stack Developer",
      logoUrl: "/vrd.png",
      start: "April 2021",
      end: "Present",
      description:
        "Developed a MERN Stack Flow/Process Management System integrated with ERP for seamless data operations, automated report generation and workflows using Google Apps Script, and built a Selenium-based ERP task automation tool. Managed and troubleshot ERP databases (MySQL, Oracle, MS SQL), oversaw IT infrastructure (servers, networking, peripherals), and coordinated with the software team for ERP administration and issue resolution.",
    },
    {
      company: "Derby Footwear Exports",
      badges: [],
      href: "https://derbyfootwear.com",
      location: "On Site",
      title: "IT/MIS Executive",
      logoUrl: "/derby.jpg",
      start: "April 2018",
      end: "April 2021",
      description:
        "Managed eCommerce operations across major platforms and brand websites, implemented SuiteCRM on local hardware for unified customer and order management, and developed an Excel-based inventory system using VBA. Oversaw website development, collaborated on design and functionality, and automated marketing campaigns using open-source tools. Additionally, built a Selenium web scraper to generate a database of potential buyers and wholesalers.",
    },
  ],
  education: [
    {
      school: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in",
      degree: "Master's Degree in Computer Applications (BCA)",
      logoUrl: "/ignou.webp",
      start: "2025",
      end: "Pursuing",
    },
    {
      school: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in",
      degree: "Bachelor's Degree in Computer Applications (BCS)",
      logoUrl: "/ignou.webp",
      start: "2021",
      end: "2024",
    },
    {
      school: "St. George's College",
      href: "https://www.stgeorgescollegeagra.com/",
      degree: "Intermediate",
      logoUrl: "/georges.avif",
      start: "2015",
      end: "2017",
    },
    {
      school: "St. George's College",
      href: "https://www.stgeorgescollegeagra.com/",
      degree: "High School",
      logoUrl: "/georges.avif",
      start: "2013",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Streamline ERP",
      href: "https://streamline.lumin8.in",
      dates: "Jan 2025 - Sep 2025",
      active: true,
      description:
        "ERP Application built on NextJS designed for footwear manufacturing. Designed with versatility in mind to cater to other manufacturing process aswell. Easy management of invoices, inventory, sampling and production including a moder Quality Feedback automation and Flow Management Systems.",
      technologies: [
        "Next.js",
        "Typescript",
        "SQL Server",
        "Prisma",
        "TailwindCSS",
        "Custom Backend",
        "Shadcn UI",
      ],
      links: [
        {
          type: "App",
          href: "https://app.vrdexports.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Archived Source",
          href: "https://github.com/shoaibkn/streamline-archive",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "Monolit LMS",
      href: "https://monolit.lumin8.in",
      dates: "June 2025 - Aug 2025",
      active: true,
      description:
        "An AI powered Learning Management System to create AI tutors and create program lessons in any field. Designed to enable cross conversation over audio between user and AI",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Dodo Payments",
        "Shadcn UI",
        "VAPI",
        "11Labs",
      ],
      links: [
        {
          type: "Website",
          href: "https://monolit.lumin8.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shoaibkn/monolit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "AI SEO",
      href: "https://seo.lumin8.in",
      dates: "November 2025",
      active: true,
      description:
        "Opensource AI SEO SAAS that utilises webscraping, perplexity, openAI and prompt engineering to generate SEO report and analytics for brands.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI",
        "Perplexity AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://seo.lumin8.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shoaibkn/lumin8-seo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Blabber Social",
      href: "https://social.lumin8.in",
      dates: "Sep 2025 - Current",
      active: true,
      description:
        "Opensource Instagram automation tool to automate replies and responses. Support for Smart AI takeover to generate engagements through conversational AI technology.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Dodo Payments",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://social.lumin8.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shoaibkn/blabber-social",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Kamabliss Holidays",
      href: "https://kamablissholiday.com",
      dates: "June 2025 - Aug 2025",
      active: true,
      description:
        "Opensource website with Payload CMS hosted on vercel. Aesthetically designed with motion features and dynamic content.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Payload",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://kamablissholiday.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shoaibkn/kamabliss-web",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Aadhar UCL",
      href: "https://github.com/shoaibkn/aadhar_ucl",
      dates: "July 2025 - Aug 2025",
      active: true,
      description:
        "Aadhar UCL project to gather aadhar update data along with biometric details allowing service providers to upload to UIDAI systems.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Payload",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shoaibkn/aadhar_ucl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
