export const personalInfo = {
  name: "Suresh Venkata Chidella",
  firstName: "Suresh",
  middleName: "Venkata",
  lastName: "Chidella",
  initials: "SC",
  title: "Backend Software Engineer",
  roles: [
    "Backend Engineer",
    "Java & Spring Boot",
    "CQRS & Event Sourcing",
    "API Developer",
    "Fintech Engineer",
  ],
  location: "Andhra Pradesh, India",
  email: "venkatasuresh051@yahoo.com",
  linkedin: "https://www.linkedin.com/in/sureshchidella",
  linkedinHandle: "linkedin.com/in/sureshchidella",
  portfolio: "sureshchidella.vercel.app",
};

export const summary = `Backend Software Engineer with 2+ years of experience building and shipping production microservices for Mastercard's global payment platform and Axis Bank's lending systems. Works primarily with Java 17 and Spring Boot, with hands-on experience in event-driven architecture using CQRS and Event Sourcing (Axon Framework, Kafka). Comfortable across the full backend delivery cycle — from API design and service integration to CI/CD, testing, and production monitoring.`;

export const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Major Projects" },
  { value: 2, suffix: "", label: "Enterprise Clients" },
  { value: 1, suffix: "", label: "Award Won" },
];

export const skills = [
  {
    category: "Languages & Frameworks",
    colorClass: "text-indigo-600 dark:text-indigo-400",
    bgClass: "bg-indigo-50 border-indigo-300 hover:border-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:hover:border-indigo-400/60",
    dotClass: "bg-indigo-500 dark:bg-indigo-400",
    items: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices"],
  },
  {
    category: "Architecture",
    colorClass: "text-fuchsia-600 dark:text-fuchsia-400",
    bgClass: "bg-fuchsia-50 border-fuchsia-300 hover:border-fuchsia-400 dark:bg-fuchsia-500/10 dark:border-fuchsia-500/30 dark:hover:border-fuchsia-400/60",
    dotClass: "bg-fuchsia-500 dark:bg-fuchsia-400",
    items: ["Event-Driven Architecture", "CQRS", "Event Sourcing", "Axon Framework", "Kafka"],
  },
  {
    category: "Database & Caching",
    colorClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-50 border-violet-300 hover:border-violet-400 dark:bg-violet-500/10 dark:border-violet-500/30 dark:hover:border-violet-400/60",
    dotClass: "bg-violet-500 dark:bg-violet-400",
    items: ["MySQL", "Redis"],
  },
  {
    category: "Testing",
    colorClass: "text-cyan-700 dark:text-cyan-400",
    bgClass: "bg-cyan-50 border-cyan-300 hover:border-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:hover:border-cyan-400/60",
    dotClass: "bg-cyan-500 dark:bg-cyan-400",
    items: ["JUnit 5", "Mockito", "Karate", "ArchUnit", "Mutation Testing", "JMeter", "BlazeMeter", "Postman"],
  },
  {
    category: "DevOps & CI/CD",
    colorClass: "text-emerald-700 dark:text-emerald-400",
    bgClass: "bg-emerald-50 border-emerald-300 hover:border-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:hover:border-emerald-400/60",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
    items: ["Jenkins", "PCF (Cloud Foundry)", "Maven", "SonarQube", "JaCoCo", "Dynatrace"],
  },
  {
    category: "Tools",
    colorClass: "text-amber-700 dark:text-amber-400",
    bgClass: "bg-amber-50 border-amber-300 hover:border-amber-400 dark:bg-amber-500/10 dark:border-amber-500/30 dark:hover:border-amber-400/60",
    dotClass: "bg-amber-500 dark:bg-amber-400",
    items: ["Git", "IntelliJ IDEA", "Swagger/OpenAPI", "Jira", "Agile/Scrum"],
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Quest Global Engineering Services Pvt Ltd",
    location: "Pune, India",
    period: "Feb 2023 – Present",
    current: true,
    highlights: [
      "Designed and shipped REST APIs for payment transfers, loan processing, user management, and notifications, serving real banking customers across multiple regions.",
      "Built event-driven communication between microservices using Axon Framework (Kafka-backed CQRS and Event Sourcing) for reliable async transaction processing.",
      "Set up and maintained Jenkins CI/CD pipelines for automated deployments across lower environments, cutting down manual release steps.",
      "Put in place a multi-layer test strategy across all services: unit tests (JUnit 5, Mockito), integration tests, API contract tests (Karate), architectural checks (ArchUnit), performance benchmarks (JMeter, BlazeMeter), and mutation testing.",
      "Maintained SonarQube and JaCoCo quality gates, catching and fixing code violations before they reached production.",
      "Worked in Agile sprints alongside QA, design, and business teams to ship production features on schedule.",
    ],
  },
];

export const projects = [
  {
    id: "blms",
    title: "Builder Loan Management System",
    client: "Axis Bank",
    period: "Jan 2026 – Present",
    domain: "Banking / Builder Financing",
    current: true,
    description:
      "Building microservices for Axis Bank's builder financing platform using Spring Boot and Java 17, handling loan lifecycle management for real-estate builder groups.",
    highlights: [
      "Built the admin management module with single-admin enforcement, role-based user types, and support for bank details and property types (FLAT, PLOT, RHW).",
      "Resolved SonarQube violations and wrote JUnit test suites across multiple services to bring code quality up to threshold.",
    ],
    tech: ["Java 17", "Spring Boot", "JPA", "JUnit", "SonarQube", "JaCoCo", "REST APIs"],
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
    clientColor: "#818cf8",
  },
  {
    id: "mc-send",
    title: "Mastercard Send",
    client: "Mastercard",
    period: "Nov 2024 – Dec 2025",
    domain: "Global Payments",
    current: false,
    description:
      "Global payment platform enabling fast, secure money transfers. Extended API capabilities for Caribbean regional corridors and new transaction purpose types.",
    highlights: [
      "Added currency mandate support for ANG-to-XCG payment flows in CUW (Curacao) and SXM (Sint Maarten) as part of Mastercard's Caribbean rollout.",
      "Introduced new transaction purpose types (Recycling Deposit Return, VAT Payment) to extend payment classification.",
      "Contributed to building the unified Mastercard Send API, consolidating multiple legacy Send APIs into one extensible interface.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "PCF", "Jenkins", "SonarQube", "Swagger/OpenAPI"],
    gradientFrom: "#ef4444",
    gradientTo: "#f97316",
    clientColor: "#fb923c",
  },
  {
    id: "umt",
    title: "Unified Money Transfer",
    client: "Mastercard",
    period: "Jul 2023 – Oct 2024",
    domain: "Cross-Border Payments",
    current: false,
    description:
      "A global Unified Payment API supporting domestic and cross-border transfers across multiple regions at Mastercard scale, with emphasis on testing, performance, and event-driven architecture.",
    highlights: [
      "Wrote performance and latency benchmarks using JMeter JMX scripts and BlazeMeter across MTF and Stage environments, flagging bottlenecks before production.",
      "Built CQRS/Event Sourcing POCs with Axon Framework (Kafka-backed) to validate async transaction processing for high-throughput payment use cases.",
      "Maintained test suites covering API contracts (Karate), architectural rules (ArchUnit), and mutation testing to keep the system reliable.",
      "Built Jenkins CI/CD pipelines reducing repetitive deployment steps.",
    ],
    tech: ["Java 17", "Spring Boot", "Karate", "ArchUnit", "JMeter", "BlazeMeter", "Jenkins", "Axon (Kafka)", "PCF"],
    gradientFrom: "#f59e0b",
    gradientTo: "#10b981",
    clientColor: "#fbbf24",
  },
  {
    id: "sbb",
    title: "Small Business Banking",
    client: "Axis Bank",
    period: "Mar 2023 – Jun 2023",
    domain: "Digital Lending / SME",
    current: false,
    description:
      "Built microservices for a digital loan application platform using Spring Boot and JPA, letting small business customers apply for loans without manual paperwork.",
    highlights: [
      "Implemented document upload and PAN verification features, reducing manual steps in the loan onboarding flow.",
      "Tested APIs in UAT using Postman, catching integration issues before production release.",
    ],
    tech: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL", "Postman", "Maven"],
    gradientFrom: "#10b981",
    gradientTo: "#06b6d4",
    clientColor: "#34d399",
  },
];

export const awards = [
  {
    title: "On the Fly Award",
    organization: "Quest Global Engineering Services Pvt Ltd",
    date: "September 2023",
    description: "Recognized for upskilling quickly while working at the client office and for making consistent, valuable contributions to project delivery.",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    institution: "NBKR Institute of Science and Technology",
    period: "2019 – 2022",
  },
  {
    degree: "Diploma in Electrical and Electronics Engineering",
    institution: "Sri Venkateswara Govt Polytechnic College",
    period: "2016 – 2019",
  },
];
