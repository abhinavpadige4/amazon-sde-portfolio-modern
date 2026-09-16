import { experienceData } from "@/data/experience";
import { SectionHeader } from "@/components/ui/section-header";

export default function Experience() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Professional Experience"
          description="Progressive career in software engineering with focus on distributed systems and cloud architecture"
        />
        <div className="mt-8 space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-muted-foreground mt-1">
                    <span className="whitespace-nowrap">
                      {exp.location}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="whitespace-nowrap">
                      {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                    </span>
                  </p>
                </div>
                {exp.current && (
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    Current
                  </span>
                )}
              </div>
              
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-muted rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}