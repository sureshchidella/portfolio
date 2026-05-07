export const personalInfo = {
  name: "Suresh Venkata Chidella",
  firstName: "Suresh",
  middleName: "Venkata",
  lastName: "Chidella",
  initials: "SC",
  title: "Software Engineer",
  roles: [
    "Backend Engineer",
    "Java & Spring Boot",
    "Microservices Architect",
    "API Developer",
    "Fintech Engineer",
  ],
  location: "Andhra Pradesh, India",
  email: "venkatasuresh051@yahoo.com",
  linkedin: "https://www.linkedin.com/in/sureshchidella",
  linkedinHandle: "linkedin.com/in/sureshchidella",
};

export const summary = `Software Engineer with 2+ years of experience building microservices and REST APIs using Java and Spring Boot. Worked on production systems for Mastercard and Axis Bank across payments and banking loan domains. Comfortable with performance testing, CI/CD pipelines, and event-driven architectures.`;

export const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Major Projects" },
  { value: 2, suffix: "", label: "Enterprise Clients" },
  { value: 1, suffix: "", label: "Award Won" },
];

export const skills = [
  {
    category: "Backend",
    colorClass: "text-indigo-600 dark:text-indigo-400",
    bgClass: "bg-indigo-50 border-indigo-300 hover:border-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:hover:border-indigo-400/60",
    dotClass: "bg-indigo-500 dark:bg-indigo-400",
    items: ["Java 17", "Spring Boot", "Microservices", "REST APIs", "JPA", "Hibernate", "RabbitMQ"],
  },
  {
    category: "Database",
    colorClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-50 border-violet-300 hover:border-violet-400 dark:bg-violet-500/10 dark:border-violet-500/30 dark:hover:border-violet-400/60",
    dotClass: "bg-violet-500 dark:bg-violet-400",
    items: ["MySQL", "SQL"],
  },
  {
    category: "Testing",
    colorClass: "text-cyan-700 dark:text-cyan-400",
    bgClass: "bg-cyan-50 border-cyan-300 hover:border-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:hover:border-cyan-400/60",
    dotClass: "bg-cyan-500 dark:bg-cyan-400",
    items: ["JUnit", "Mockito", "JMeter", "BlazeMeter", "Postman", "Karate", "ArchUnit"],
  },
  {
    category: "DevOps",
    colorClass: "text-emerald-700 dark:text-emerald-400",
    bgClass: "bg-emerald-50 border-emerald-300 hover:border-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:hover:border-emerald-400/60",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
    items: ["Maven", "Jenkins", "PCF", "SonarQube", "Dynatrace", "JaCoCo"],
  },
  {
    category: "Tools",
    colorClass: "text-amber-700 dark:text-amber-400",
    bgClass: "bg-amber-50 border-amber-300 hover:border-amber-400 dark:bg-amber-500/10 dark:border-amber-500/30 dark:hover:border-amber-400/60",
    dotClass: "bg-amber-500 dark:bg-amber-400",
    items: ["Git", "IntelliJ IDEA", "Swagger/OpenAPI", "Jira", "Axon (Kafka)"],
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
      "Building microservices-based systems for payment and banking loan platforms using Java 17 and Spring Boot.",
      "Built and maintained REST APIs for user management, loan processing, payment transfers, and notifications.",
      "Set up Jenkins pipelines for automated deployments, reducing manual effort significantly.",
      "Worked with event-driven systems using Axon (Kafka-based) and RabbitMQ for async communication.",
      "Wrote test suites: unit, integration, and performance using JUnit, Mockito, JMeter, and BlazeMeter.",
      "Integrated SonarQube and JaCoCo for code quality checks and coverage tracking.",
      "Received the On the Fly Award (Sep 2023) for exceptional quick delivery on a critical project.",
    ],
  },
];

export const projects = [
  {
    id: "blms",
    title: "Builder Loan Management System",
    client: "Axis Bank",
    period: "Jan 2026 – Present",
    domain: "Banking / Loans",
    current: true,
    description:
      "Microservices-based loan management platform for Axis Bank's builder financing operations, handling group management, property categorization, and admin workflows.",
    highlights: [
      "Implemented admin management for builder groups with single-admin constraint enforcement.",
      "Added bank detail support for properties: FLAT, PLOT, and RHW categories.",
      "Fixed SonarQube violations and improved JUnit coverage across services.",
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
      "Global payment platform enabling secure money transfers. Extended API capabilities for new regional corridors and transaction purpose types.",
    highlights: [
      "Implemented ANG-to-XCG currency mandate for Curacao and Sint Maarten regions.",
      "Added Recycling Deposit Return and VAT Payment transaction purpose types.",
      "Contributed to a unified Send API consolidating multiple existing APIs.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "PCF", "Jenkins", "SonarQube", "Swagger"],
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
      "High-throughput Unified Payment API for domestic and cross-border money transfers globally, with emphasis on testing, performance, and event-driven architecture.",
    highlights: [
      "Developed APIs handling both domestic and cross-border transfers globally.",
      "Maintained test suites using Karate, ArchUnit, and mutation testing.",
      "Ran performance profiling with JMeter and BlazeMeter in MTF/Stage environments.",
      "Built Jenkins CI/CD pipelines reducing repetitive deployment steps.",
    ],
    tech: ["Java 17", "Spring Boot", "Karate", "ArchUnit", "JMeter", "BlazeMeter", "Jenkins", "Axon", "PCF"],
    gradientFrom: "#f59e0b",
    gradientTo: "#10b981",
    clientColor: "#fbbf24",
  },
  {
    id: "sbb",
    title: "Small Business Banking",
    client: "Axis Bank",
    period: "Mar 2023 – Jun 2023",
    domain: "Digital Lending",
    current: false,
    description:
      "Digital loan application platform for small businesses, digitizing document submission, identity verification, and processing workflows.",
    highlights: [
      "Built microservices for digital loan application using Spring Boot and JPA.",
      "Enabled document upload and PAN card verification for loan processing.",
      "Handled API testing in UAT using Postman before production release.",
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
    description: "Recognized for exceptional quick delivery and problem-solving on a critical project task.",
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

