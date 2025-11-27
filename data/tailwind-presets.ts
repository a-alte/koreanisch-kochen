/**
 * File: Tailwind preset registry
 * Location: /data/tailwind-presets.ts
 * Description:
 *   Centralized collection of Tailwind CSS class presets used throughout
 *   the project. Provides a consistent naming system to avoid duplicated
 *   class strings and keeps layout/styling definitions maintainable.
 *   Includes a helper function (`twc`) for resolving preset keys.
 */

/**
 * Represents a registry of Tailwind CSS class presets.
 * Each key corresponds to a preset name, each value contains a Tailwind class string.
 */
export type TailwindPresetRegistry = Record<string, string>;

/**
 * Tailwind class presets used throughout the project.
 * Acts as a central dictionary to ensure consistent class usage and reduce duplicated Tailwind strings.
 */
export const TailwindPreset: TailwindPresetRegistry = {

  // Headings.
  "h1": "text-3xl font-bold mb-4",
  "h2": "text-[1.3rem] font-semibold mb-1",

  "p": "mb-2",

  // Grid & Layout.
  "container": "w-full max-w-[95rem] mx-auto px-10",

  "card": "group rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-[#1A3C34]",
  
  "button": "px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors",
};

/**
 * Returns a Tailwind preset by key.
 *
 * @param key - The preset name to resolve
 * @returns The Tailwind class string or an empty string if missing
 */
export function twc(key: string) {
  return TailwindPreset[key] ?? "";
}