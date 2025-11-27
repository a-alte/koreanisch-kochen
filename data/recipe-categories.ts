/**
 * File: Recipes
 * Location: /data/recipe-categories.ts
 */

import type { RecipeCategoryId } from "@/data/recipes";

export type RecipeCategory = {
  id: RecipeCategoryId;
  title: string;
  slug: string;
  description: string;
};

export const recipeCategories: RecipeCategory[] = [
  {
    id: "Hauptgericht",
    title: "Hauptgericht",
    slug: "hauptgericht",
    description: "Sättigende koreanische Hauptgerichte für jeden Tag.",
  },
  {
    id: "Suppe",
    title: "Suppen und Eintöpfe",
    slug: "suppen-und-eintöpfe",
    description: "Wärmende koreanische Suppen und Eintöpfe.",
  },
  {
    id: "Banchan",
    title: "Banchan",
    slug: "banchan",
    description: "Kleine Beilagen, die den Tisch füllen.",
  },
  {
    id: "Dessert",
    title: "Desserts",
    slug: "desserts",
    description: "Süße koreanische Kleinigkeiten.",
  },
  {
    id: "Snack",
    title: "Snacks",
    slug: "snacks",
    description: "Leckere koreanische Snacks.",
  },
];