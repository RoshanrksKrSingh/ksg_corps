import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 1. CN (Class Name) Helper
 * Tailwind classes को merge करने के लिए (Dynamic styling के लिए जरुरी)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 2. Date Formatter
 * Blog Date को "January 14, 2026" जैसा दिखाने के लिए
 */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * 3. Text Truncate
 * अगर description बहुत लंबी हो तो उसे "..." के साथ काटने के लिए
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * 4. Slug Generator
 * Title से URL बनाने के लिए (e.g. "My New Blog" -> "my-new-blog")
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")     // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-");  // Replace multiple - with single -
}