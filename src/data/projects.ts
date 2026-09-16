// src/data/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Real-time Analytics Platform",
    description:
      "Built a scalable real-time analytics platform processing 100K+ events per second using AWS Kinesis, Lambda, and DynamoDB. Reduced data processing latency from 5 minutes to under 2 seconds.",
    techStack: ["AWS Kinesis", "Lambda", "DynamoDB", "CloudWatch", "API Gateway", "React", "Node.js"],
    metrics: [
      { label: "Throughput", value: "100K+ events/sec" },
      { label: "Latency Reduction", value: "96% faster" },
      { label: "Cost Savings", value: "40% reduction" },
    ],
    githubUrl: "https://github.com/username/real-time-analytics",
    liveUrl: "https://analytics-platform.example.com",
  },
  {
    id: 2,
    title: "Distributed E-commerce Microservices",
    description:
      "Designed and implemented a microservices-based e-commerce platform handling 10K+ RPM with eventual consistency patterns, circuit breakers, and distributed tracing.",
    techStack: ["Docker", "Kubernetes", "AWS ECS", "Redis", "PostgreSQL", "RabbitMQ", "Go", "React"],
    metrics: [
      { label: "Availability", value: "99.95% uptime" },
      { label: "Response Time", value: "<100ms p95" },
      { label: "Scalability", value: "Auto-scaled to 500 instances" },
    ],
    githubUrl: "https://github.com/username/ecommerce-microservices",
  },
  {
    id: 3,
    title: "Machine Learning Feature Store",
    description:
      "Created a centralized feature store for ML models using Apache Cassandra and Redis, serving 50M+ daily predictions with sub-10ms latency.",
    techStack: ["Apache Cassandra", "Redis", "AWS EKS", "Python", "FastAPI", "GraphQL", "Terraform"],
    metrics: [
      { label: "Prediction Latency", value: "<10ms p99" },
      { label: "Daily Predictions", value: "50M+" },
      { label: "Feature Freshness", value: "Real-time updates" },
    ],
    githubUrl: "https://github.com/username/feature-store",
    liveUrl: "https://featurestore.example.com",
  },
  {
    id: 4,
    title: "Global CDN Optimization Tool",
    description:
      "Developed a global CDN optimization tool that analyzes traffic patterns and automatically adjusts cache TTLs and edge locations, improving cache hit ratio by 35%.",
    techStack: ["AWS CloudFront", "Lambda@Edge", "Route 53", "S3", "Terraform", "Python", "React"],
    metrics: [
      { label: "Cache Hit Ratio", value: "Improved by 35%" },
      { label: "Global Latency", value: "Reduced by 28%" },
      { label: "Cost Optimization", value: "25% savings on bandwidth" },
    ],
    githubUrl: "https://github.com/username/cdn-optimizer",
  },
];