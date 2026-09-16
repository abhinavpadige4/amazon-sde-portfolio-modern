import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="About Me"
          description="Software Development Engineer passionate about building scalable systems that delight customers"
        />
        <div className="mt-8 space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm an experienced Software Development Engineer with a strong background in designing and implementing distributed systems on AWS. My approach combines deep technical expertise with Amazon's Leadership Principles to deliver solutions that are not only technically excellent but also deeply customer-obsessed.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've focused on building systems that scale gracefully, maintain high availability, and provide measurable business value. I believe in diving deep into problems, thinking long-term, and always delivering results with the highest standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Core Values</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Customer Obsession</li>
                <li>Ownership</li>
                <li>Invent and Simplify</li>
                <li>Are Right, A Lot</li>
                <li>Learn and Be Curious</li>
                <li>Hire and Develop the Best</li>
                <li>Insist on the Highest Standards</li>
                <li>Think Big</li>
                <li>Bias for Action</li>
                <li>Frugality</li>
                <li>Earn Trust</li>
                <li>Dive Deep</li>
                <li>Have Backbone; Disagree and Commit</li>
                <li>Deliver Results</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Technical Philosophy</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Scalability First</li>
                <li>Reliability Through Simplicity</li>
                <li>Data-Driven Decision Making</li>
                <li>Continuous Learning and Improvement</li>
                <li>Ownership End-to-End</li>
                <li>Operational Excellence</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}