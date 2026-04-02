import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes, resolving conflicts using tailwind-merge
 * and conditionally applying classes using clsx.
 * 
 * @param {...(string | undefined | null | false | Record<string, boolean>)} inputs - Class names or objects
 * @returns {string} Merged and conflict-resolved class string
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
