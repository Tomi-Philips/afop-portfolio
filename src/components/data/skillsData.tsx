import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiLaravel,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
} from 'react-icons/si';

export const skillsData = {
  programmingLanguages: {
    title: "Programming Languages",
    icon: "🔧",
    description: "The foundational tools that enable me to bring ideas to life through code, from web applications to smart contracts.",
    skills: [
      {
        name: "PHP",
        icon: SiPhp,
        bgGradient: "from-blue-500 to-blue-800",
        tag: "Backend",
        tagColor: "blue",
        description: "Powering over 70% of the web, PHP is my go-to for scalable enterprise applications. With extensive experience in modern PHP frameworks and best practices, I build robust, maintainable backend systems that handle complex business logic efficiently.",
        iconText: "PHP"
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        bgGradient: "from-blue-400 to-blue-500",
        tag: "Full Stack",
        tagColor: "blue",
        description: "From interactive frontends to high-performance servers, JavaScript is my versatile tool for full-stack development. Leveraging modern ES6+ features and runtime environments to create seamless experiences across web, mobile, and desktop platforms."
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        bgGradient: "from-blue-600 to-blue-700",
        tag: "Type Safe",
        tagColor: "blue",
        description: "Bringing enterprise-grade type safety to JavaScript development. With advanced features like interfaces, generics, and union types, I build large-scale applications with confidence in code reliability and maintainability."
      },
      {
        name: "Python",
        icon: SiPython,
        bgGradient: "from-green-500 to-green-600",
        tag: "Versatile",
        tagColor: "green",
        description: "Leveraging Python's simplicity and power for data analysis, automation, backend development, and machine learning. With expertise in popular frameworks and libraries, I create efficient solutions for data-intensive applications and scalable web services.",
        iconText: "PY"
      }
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: "⚡",
    description: "Leveraging powerful frameworks to accelerate development while maintaining code quality and scalability.",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        bgGradient: "from-green-500 to-green-600",
        tag: "Runtime",
        tagColor: "green",
        description: "Building high-performance, non-blocking server applications with Node.js runtime. Leveraging the event-driven architecture for scalable real-time applications and APIs.",
        iconText: "NJ"
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        bgGradient: "from-red-500 to-red-600",
        tag: "Framework",
        tagColor: "red",
        description: "Crafting elegant, maintainable PHP applications with Laravel's powerful ecosystem. Expert in Eloquent ORM, Blade templating, and artisan command-line tools.",
        iconText: "LV"
      },
      {
        name: "Express.js",
        icon: SiExpress,
        bgGradient: "from-gray-700 to-gray-900",
        tag: "Framework",
        tagColor: "gray",
        description: "Creating lightweight, fast RESTful APIs with Express.js middleware architecture. Perfect for microservices and minimalistic backend solutions.",
        iconText: "EX"
      },
      {
        name: "React.js",
        icon: SiReact,
        bgGradient: "from-blue-500 to-blue-600",
        tag: "Library",
        tagColor: "blue",
        description: "Building dynamic, component-based UIs with React's virtual DOM. Expert in hooks, context API, and state management for modern web applications."
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        bgGradient: "from-gray-900 to-black",
        tag: "Framework",
        tagColor: "gray",
        description: "Full-stack React applications with SSR, SSG, and API routes. Optimized performance with automatic code splitting and image optimization out of the box."
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        bgGradient: "from-cyan-500 to-blue-500",
        tag: "CSS",
        tagColor: "cyan",
        description: "Utility-first CSS framework for rapid UI development. Creating custom, responsive designs without writing custom CSS through intelligent class composition.",
        iconText: "TW"
      }
    ]
  },
  databases: {
    title: "Databases & Storage",
    icon: "💾",
    description: "Expertise in both SQL and NoSQL databases, ensuring optimal data storage, retrieval, and management strategies.",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        bgGradient: "from-blue-600 to-blue-700",
        tag: "SQL",
        tagColor: "blue",
        description: "Relational database expertise with ACID compliance, complex queries, and transaction management. Ideal for financial systems and data integrity-critical applications.",
        iconText: "SQL"
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        bgGradient: "from-green-600 to-green-700",
        tag: "NoSQL",
        tagColor: "green",
        description: "Document-based NoSQL database for big data applications. Expertise in aggregation pipelines, replication, and cloud deployment with MongoDB Atlas.",
        iconText: "MG"
      },
      {
        name: "Redis",
        icon: SiRedis,
        bgGradient: "from-red-500 to-red-600",
        tag: "Cache",
        tagColor: "red",
        description: "In-memory data structure store for caching, sessions, and real-time features. Advanced usage with Pub/Sub, streams, and custom caching strategies.",
        iconText: "RD"
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
        bgGradient: "from-blue-500 to-blue-700",
        tag: "ORM",
        tagColor: "blue",
        description: "Modern database toolkit for Node.js and TypeScript with an intuitive ORM. Features type-safe database queries, migrations, and seamless integration with PostgreSQL, MySQL, and SQLite.",
        iconText: "PR"
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        bgGradient: "from-yellow-500 to-orange-600",
        tag: "BaaS",
        tagColor: "yellow",
        description: "Google's comprehensive app development platform with real-time database, authentication, cloud functions, and hosting. Ideal for rapid prototyping and scalable applications with built-in analytics.",
        iconText: "FB"
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        bgGradient: "from-green-400 to-green-600",
        tag: "BaaS",
        tagColor: "green",
        description: "Open-source Firebase alternative with PostgreSQL database, authentication, storage, and real-time subscriptions. Building scalable applications with the power of SQL and the convenience of a managed platform.",
        iconText: "SB"
      }
    ]
  },
  apiArchitecture: {
    title: "API Architecture",
    icon: "🔗",
    description: "Designing robust, scalable, and developer-friendly APIs that power modern applications and integrations.",
    skills: [
      {
        name: "REST API",
        icon: null,
        bgGradient: "from-purple-500 to-purple-600",
        tag: "Standard",
        tagColor: "purple",
        description: "Building RESTful APIs following industry best practices with proper HTTP semantics, status codes, and resource modeling. Expertise in authentication, rate limiting, and comprehensive API documentation.",
        iconText: "REST"
      },
      {
        name: "GraphQL",
        icon: null,
        bgGradient: "from-pink-500 to-pink-600",
        tag: "Modern",
        tagColor: "pink",
        description: "Implementing efficient GraphQL schemas with Apollo Server, enabling clients to request exactly the data they need. Advanced features like batching, caching, and real-time subscriptions for modern application requirements.",
        iconText: "GQL"
      }
    ]
  },
  toolsDevops: {
    title: "Tools & DevOps",
    icon: "🛠️",
    description: "Streamlining development workflows and deployment pipelines with modern tools and best practices.",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        bgGradient: "from-orange-500 to-red-600",
        tag: "Version Control",
        tagColor: "orange",
        description: "Mastering distributed version control with advanced branching strategies, merge conflict resolution, and collaborative workflows. Ensuring code integrity and team productivity through Git best practices.",
        iconText: "Git"
      },
      {
        name: "GitHub",
        icon: SiGithub,
        bgGradient: "from-gray-700 to-gray-900",
        tag: "Collaboration",
        tagColor: "gray",
        description: "Leveraging GitHub for code hosting, CI/CD pipelines, project management, and team collaboration. Expertise in GitHub Actions, code reviews, issue tracking, and open-source contributions.",
        iconText: "GH"
      },
      {
        name: "Docker",
        icon: SiDocker,
        bgGradient: "from-blue-500 to-blue-700",
        tag: "Containerization",
        tagColor: "blue",
        description: "Containerizing applications for consistent development, testing, and production environments. Building multi-container setups with Docker Compose and orchestrating deployments for microservices architectures.",
        iconText: "DK"
      },
      {
        name: "Vercel",
        icon: SiVercel,
        bgGradient: "from-gray-800 to-black",
        tag: "Deployment",
        tagColor: "gray",
        description: "Deploying frontend and full-stack applications with Vercel's serverless platform. Optimized for Next.js with automatic CI/CD, preview deployments, edge functions, and global CDN for lightning-fast performance.",
        iconText: "VC"
      }
    ]
   },
   softSkills: {
   title: "Professional Skills",
   icon: "🌟",
   description: "Beyond technical expertise - the interpersonal skills that drive successful collaboration and leadership",
   skills: [
      {
         name: "Communication",
         icon: "💬",
         bgGradient: "from-blue-400 to-blue-600",
         tagColor: "blue",
         description: "Articulating complex technical concepts with clarity to diverse audiences, from stakeholders to development teams.",
         features: ["Technical Documentation", "Active Listening", "Presentation Skills"]
      },
      {
         name: "Team Collaboration",
         icon: "👥",
         bgGradient: "from-green-400 to-green-600",
         tagColor: "green",
         description: "Fostering inclusive environments where diverse perspectives drive innovation and collective success.",
         features: ["Agile Methodology", "Cross-functional Sync", "Knowledge Sharing"]
      },
      {
         name: "Leadership",
         icon: "🎯",
         bgGradient: "from-purple-400 to-purple-600",
         tagColor: "purple",
         description: "Guiding teams through complex projects with strategic vision, empathy, and data-driven decision making.",
         features: ["Project Management", "Mentorship & Coaching", "Strategic Planning"]
      },
      {
         name: "Problem Solving",
         icon: "🔍",
         bgGradient: "from-orange-400 to-orange-600",
         tagColor: "orange",
         description: "Analytical thinking and creative approaches to overcome technical challenges and optimize solutions.",
         features: ["Critical Analysis", "Creative Innovation", "Adaptability"]
      }
   ]
   }
};