// data/recipes.js

export const recipes = [
  {
    id: 1,
    slug: "einfaches-bulgogi",
    title: "Einfaches Bulgogi aus der Pfanne",
    description: "Schnelles Bulgogi mit Zutaten aus jedem Rewe oder Edeka.",
    category: "Hauptgericht",
    difficulty: "mittel",
    durationMinutes: 30,
  },
  {
    id: 2,
    slug: "gimbap-einfach",
    title: "Gimbap (einfache Version)",
    description: "Vereinfachtes Gimbap ohne Spezialausrüstung – ideal für Anfänger.",
    category: "Snack",
    difficulty: "leicht",
    durationMinutes: 40,
  },
  {
    id: 3,
    slug: "milde-tteokbokki-kinder",
    title: "Milde Tteokbokki für Kinder",
    description: "Familienfreundlich und weniger scharf – perfekt für Kleinkinder.",
    category: "Hauptgericht",
    difficulty: "leicht",
    durationMinutes: 25,
  },
];


export function getRecipeBySlug(slug) {
  // Find a single recipe by its slug.
  return recipes.find((recipe) => recipe.slug === slug);
}