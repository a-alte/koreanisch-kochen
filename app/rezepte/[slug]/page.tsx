import { notFound } from "next/navigation";
import { getRecipeBySlug } from "@/data/recipes";

interface RecipePageProps {
  params: {
    slug: string;
  };
}

// Page component for a single recipe.
export default async function RecipePage({ params }: RecipePageProps) {
  // In your Next.js setup, params is a Promise and must be awaited.
  const { slug } = await params;

  const recipe = slug ? getRecipeBySlug(slug) : null;

  if (!recipe) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4 text-gray-700">{recipe.description}</p>

      <div className="text-sm text-gray-600 mb-6 flex gap-2 flex-wrap">
        <span>Kategorie: {recipe.category}</span>
        <span>•</span>
        <span>Schwierigkeit: {recipe.difficulty}</span>
        <span>•</span>
        <span>Dauer: {recipe.durationMinutes} Min</span>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Zubereitung</h2>
        <p className="text-gray-700">
          Hier kommen später die einzelnen Schritte mit genauen Angaben zu Zutaten,
          deutschen Produkten und Tipps für die Zubereitung rein.
        </p>
      </section>
    </main>
  );
}