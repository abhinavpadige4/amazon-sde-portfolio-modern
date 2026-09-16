import { skillsData } from "@/data/skills";
import { SectionHeader } from "@/components/ui/section-header";

export default function Skills() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Technical Skills"
          description="Expertise in AWS, distributed systems, and data structures & algorithms"
        />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* AWS Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">AWS Services</h3>
            <div className="space-y-3">
              {skillsData.aws.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <div className="w-32">
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div
                        className={`h-2 bg-primary rounded-full transition-all duration-500 w-[${skill.level}%]`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-muted-foreground ml-2">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Distributed Systems Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Distributed Systems</h3>
            <div className="space-y-3">
              {skillsData.distributedSystems.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <div className="w-32">
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div
                        className={`h-2 bg-primary rounded-full transition-all duration-500 w-[${skill.level}%]`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-muted-foreground ml-2">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* DSA Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Data Structures & Algorithms</h3>
            <div className="space-y-3">
              {skillsData.dsa.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <div className="w-32">
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div
                        className={`h-2 bg-primary rounded-full transition-all duration-500 w-[${skill.level}%]`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-muted-foreground ml-2">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}