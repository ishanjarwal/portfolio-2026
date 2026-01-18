// Example video: High-tech abstract background (placeholder)

import Hero from "@/components/hero/hero";

// Replace with your own video URL
const BACKGROUND_VIDEO_URL =
  "https://res.cloudinary.com/dsf4t9wmc/video/upload/v1768741372/abstract_ball_rsgxrd.mp4";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Fixed Video Wallpaper */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover"
        >
          <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0" />
      </div>

      <Hero />

      {/* Sections for About, Projects, etc. */}
      {/* Making sections transparent to show video background */}
      <section
        id="about"
        className="min-h-screen w-full bg-transparent flex items-center justify-center"
      >
        <div className="p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl font-heading font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">About Section Placeholder</p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen w-full bg-transparent flex items-center justify-center"
      >
        <div className="p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Projects Section Placeholder</p>
        </div>
      </section>

      <section
        id="education"
        className="min-h-screen w-full bg-transparent flex items-center justify-center"
      >
        <div className="p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">Education Section Placeholder</p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen w-full bg-transparent flex items-center justify-center"
      >
        <div className="p-8 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">Contact Section Placeholder</p>
        </div>
      </section>
    </main>
  );
}
