import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    metrics?: { label: string; value: string }[];
  };
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="bg-card text-card-foreground shadow-xl rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-muted"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="mb-6 text-muted-foreground">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-muted rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
              <div className="space-y-2">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-medium">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  View GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}