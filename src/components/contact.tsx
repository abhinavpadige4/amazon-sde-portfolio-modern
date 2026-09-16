import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Get In Touch"
          description="Let's connect and discuss opportunities, collaborations, or just chat about technology"
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" variant="default" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-5 w-5">
                  {/* Email icon placeholder */}
                </div>
                <div>
                  <p className="text-muted-foreground">Email: your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-5 w-5">
                  {/* LinkedIn icon placeholder */}
                </div>
                <div>
                  <p className="text-muted-foreground">
                    LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-5 w-5">
                  {/* GitHub icon placeholder */}
                </div>
                <div>
                  <p className="text-muted-foreground">
                    GitHub: <a href="https://github.com/yourusername" className="underline" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-5 w-5">
                  {/* LeetCode icon placeholder */}
                </div>
                <div>
                  <p className="text-muted-foreground">
                    LeetCode: <a href="https://leetcode.com/yourusername" className="underline" target="_blank" rel="noopener noreferrer">leetcode.com/yourusername</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}