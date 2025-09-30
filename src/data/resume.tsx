import { Icons } from "@/components/icons";
import { GlobeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shoaib Khan",
  initials: "SK",
  url: "https://lumin8.in",
  location: "Agra, India",
  locationLink: "https://www.google.com/maps/place/agra",
  description:
    "Creative professional with 7+ years of experience in software development and IT and Data administration. Skilled in designing custom software solutions for businesses.",
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
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
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
        // {
        //   type: "Website",
        //   href: "https://streamline.lumin8.in",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Archived Source",
          href: "https://github.com/shoaibkn/streamline-archive",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // }

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
        // {
        //   type: "Website",
        //   href: "https://monolit.lumin8.in",
        //   icon: <Icons.globe className="size-3" />,
        // },
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
      title: "LFTD AI",
      href: "https://lftd.lumin8.in",
      dates: "Aug 2025 - Current",
      active: true,
      description:
        "Opensource workout tracker with upcoming features including AI based workout and meal plan creators",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Dodo Payments",
        "OpenAI",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://lftd.lumin8.in",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/shoaibkn/lftd",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Blabber Social",
      href: "https://blabber.lumin8.in",
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
        // {
        //   type: "Website",
        //   href: "https://blabber.lumin8.in",
        //   icon: <Icons.globe className="size-3" />,
        // },
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
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
