import Link from "next/link";
import { GLASS_EFFECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BACKGROUND_VIDEO_URL =
    "https://res.cloudinary.com/dsf4t9wmc/video/upload/v1768741372/abstract_ball_rsgxrd.mp4";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative px-4">
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

            <div
                className={cn(
                    "max-w-lg w-full p-10 md:p-16 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-8",
                    GLASS_EFFECTS
                )}
            >
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-primary">
                    404
                </h1>
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Lost in Space?</h2>
                    <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                        The page you are looking for has drifted away or never existed in
                        this dimension.
                    </p>
                </div>
                <Button asChild size="lg" className="rounded-full px-10 text-lg h-12">
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </main>
    );
}
