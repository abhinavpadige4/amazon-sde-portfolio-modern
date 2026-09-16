// src/data/experience.ts
export type Experience = {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  highlights: string[];
  technologies?: string[];
};

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "Amazon Web Services",
    position: "Software Development Engineer II",
    location: "Seattle, WA (Remote)",
    startDate: "January 2022",
    endDate: "Present",
    current: true,
    highlights: [
      "Designed and implemented a global traffic management system processing 50M+ daily requests using AWS Route 53 and Lambda@Edge",
      "Reduced latency by 40% through intelligent caching strategies and edge computing optimizations",
      "Led migration of legacy monolith to microservices architecture, improving deployment frequency from weekly to multiple times per day",
      "Mentored 5 junior engineers and conducted technical interviews for SDE positions",
      "Authored 3 internal AWS whitepapers on distributed systems best practices"
    ],
    technologies: ["AWS", "Lambda@Edge", "Route 53", "DynamoDB", "Kubernetes", "Terraform", "Python", "Go"]
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Software Development Engineer",
    location: "Redmond, WA",
    startDate: "June 2019",
    endDate: "December 2021",
    current: false,
    highlights: [
      "Built a real-time collaboration platform serving 2M+ daily active users using Azure SignalR and Cosmos DB",
      "Implemented feature flag system that reduced release risks and enabled A/B testing at scale",
      "Optimized database queries resulting in 60% improvement in API response times",
      "Contributed to open-source projects with over 500+ stars on GitHub"
    ],
    technologies: ["Azure", "SignalR", "Cosmos DB", "Node.js", "React", "TypeScript", "Docker"]
  },
  {
    id: 3,
    company: "Startup XYZ",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    startDate: "March 2017",
    endDate: "May 2019",
    current: false,
    highlights: [
      "Architected and launched a payment processing system handling $10M+ monthly transaction volume",
      "Designed RESTful APIs and event-driven architecture using Kafka and microservices",
      "Implemented comprehensive monitoring and alerting system reducing MTTR by 70%",
      "Led technical due diligence for Series B funding round"
    ],
    technologies: ["Kafka", "Microservices", "PostgreSQL", "Redis", "AWS", "Java", "Spring Boot"]
  }
];