import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* Sections for About, Projects, etc. will go here */}
      <section id="about" className="min-h-screen w-full bg-background/50 flex items-center justify-center">
        <p className="text-muted-foreground">About Section Placeholder</p>
      </section>
      <section id="projects" className="min-h-screen w-full bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Projects Section Placeholder</p>
      </section>
      <section id="education" className="min-h-screen w-full bg-background/50 flex items-center justify-center">
        <p className="text-muted-foreground">Education Section Placeholder</p>
      </section>
      <section id="contact" className="min-h-screen w-full bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Contact Section Placeholder</p>
      </section>
    </main>
  );
}
