/**
 * Page: Recipe overview (Rezeptübersicht)
 * Route: /rezepte
 * Description: Renders the recipe overview page.
 */

import Image from "next/image";
import Link from "next/link";

import { RecipeList } from "@/components/RecipeList";

import { recipeCategories } from "@/data/recipe-categories";
import { twc } from "@/data/tailwind-presets";

export default function RecipeOverviewPage() {
  return (
    <main>
      <div className="flex flex-row gap-3 bg-[#c3b8ab] px-12 py-6">
        {recipeCategories.map((category) => (
          <Link
            key={category.id}
            href={`/rezepte/${category.slug}`}
            className=""
          >
            <span className="text-xl font-semibold mb-2">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <div className={twc("container")}>
          <h1 className={twc("h1")}>Rezepte</h1>
          <RecipeList />
        </div>
      </div>
    </main>
  );
}