import { recipes } from "@/data/recipes";
import { RecipeCard } from "./RecipeCard";

import { twc } from "@/data/tailwind-presets";

// List component that renders all recipes.
export function RecipeList() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          category={recipe.category}
          difficulty={recipe.difficulty}
          durationMinutes={recipe.durationMinutes}
          slug={recipe.slug}
        />
      ))}
      </div>
    </section>
  );
}