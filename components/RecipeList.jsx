import { recipes } from "@/data/recipes";
import { RecipeCard } from "./RecipeCard";

// List component that renders all recipes.
export function RecipeList() {
  return (
    <section>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          category={recipe.category}
          difficulty={recipe.difficulty}
          durationMinutes={recipe.durationMinutes}
          slug={recipe.slug}
        />
      ))}
    </section>
  );
}