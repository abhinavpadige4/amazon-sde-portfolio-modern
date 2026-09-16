import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  onViewDetails?: () => void;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  metrics,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <Card className="h-full">
      <CardContent>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-muted rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {metrics && metrics.length > 0 && (
          <div className="space-y-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{metric.label}</span>
                <span className="font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {onViewDetails ? (
          <Button variant="outline" size="sm" onClick={onViewDetails}>
            View Details
          </Button>
        ) : (
          <>
            <Link href="#" className="mr-2">
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                Live Demo
              </Button>
            </Link>
          </>
        )}
      </CardFooter>
    </Card>
  );
}