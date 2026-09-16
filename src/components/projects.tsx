import { useState } from "react";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { SectionHeader } from "@/components/ui/section-header";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Projects"
          description="Selected case studies demonstrating expertise in AWS, distributed systems, and scalable architecture"
        />
        
        {selectedProject && (
          <ProjectModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              metrics={project.metrics}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}