"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS } from "@/lib/constants";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, icon, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                        {icon}
                        {label}
                    </label>
                )}
                <div className="relative group">
                    <input
                        type={type}
                        className={cn(
                            "flex h-12 w-full rounded-xl border border-foreground/10 bg-background/20 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
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
FormInput.displayName = "FormInput";

export { FormInput };
