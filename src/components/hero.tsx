import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="max-w-4xl">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Passionate <span className="text-primary">Amazon SDE</span>
        </h1>
        <p className="mb-6 text-lg text-muted-foreground max-w-2xl">
          Building scalable distributed systems on AWS with a focus on performance, reliability, and customer obsession
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/projects" className="flex items-center justify-center gap-2">
            <Button variant="default" size="lg">
              View Projects
            </Button>
          </Link>
          <Link href="/resume.pdf" className="flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-4 justify-center">
          <DarkModeToggle />
          <span className="text-sm text-muted-foreground">
            Toggle theme
          </span>
        </div>
      </div>
      {/* Optional: Add subtle animated background or decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}