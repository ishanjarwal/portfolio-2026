"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    const words = ["Dream", "Design", "Develop", "Deliver"];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const wordTimer = setInterval(() => {
                setCurrentWord((prev) => (prev + 1) % words.length);
            }, 500);
            return () => clearInterval(wordTimer);
        }
    }, [isLoading, words.length]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Animated Word Sequence */}
                        <div className="h-12 overflow-hidden flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWord}
                                    initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl md:text-3xl font-bold text-primary tracking-[0.2em] uppercase"
                                >
                                    {words[currentWord]}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        {/* Main Name display with filling effect */}
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-black text-white/5 tracking-tighter uppercase select-none">
                                Ishan Jarwal
                            </h2>
                            <motion.h2
                                style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
                                className="absolute inset-0 text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase select-none"
                            >
                                Ishan Jarwal
                            </motion.h2>
                        </div>

                        {/* Progress Percentage */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-primary"
                                />
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">
                                Loading {progress}%
                            </span>
                        </div>
                    </div>

                    {/* Decorative background pulse */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
