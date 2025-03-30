import * as React from "react";
import { cn } from "../../lib/utils";

function Badge({ className, variant = "default", ...props }) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
                {
                    "border-transparent bg-primary text-primary-foreground": variant === "default",
                    "border-transparent bg-destructive text-destructive-foreground": variant === "destructive",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };