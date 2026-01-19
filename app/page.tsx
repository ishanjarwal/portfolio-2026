import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

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
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
