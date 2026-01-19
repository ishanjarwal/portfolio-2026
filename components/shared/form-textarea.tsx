"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS } from "@/lib/constants";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, icon, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                        {icon}
                        {label}
                    </label>
                )}
                <div className="relative group">
                    <textarea
                        className={cn(
                            "flex min-h-[120px] w-full rounded-xl border border-foreground/10 bg-background/20 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none",
                            GLASS_EFFECTS,
                            error && "border-destructive focus-visible:ring-destructive",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                {error && <p className="text-xs font-medium text-destructive">{error}</p>}
            </div>
        );
    }
);
FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
