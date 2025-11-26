/**
 * Page: Recipe detail page (Rezept)
 * Route: /rezepte/[slug]
 * Description: Renders a recipe detail page.
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { twc } from "@/data/tailwind-presets";

import {
  getRecipeBySlug
} from "@/data/recipes";

interface RecipePageProps {
  params: {
    slug: string;
  };
}

// Page component for a single recipe.
export default async function RecipePage({ params }: RecipePageProps) {
  
  // Await params.
  const { slug } = await params;

  const recipe = slug ? getRecipeBySlug(slug) : null;

  // Redirect to 404 page if the data for the recipe is missing.
  if (!recipe) {
    notFound();
  }

  // Render page content.
  return (

    <main className="max-w-3xl mx-auto p-6">

      {recipe.image &&
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={900}
          height={600}
          className="rounded mb-6"
        />
      }

      {recipe.title &&
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      }

      {recipe.description &&
        <p className="mb-4 text-gray-700">{recipe.description}</p>
      }

      <div className="text-sm text-gray-600 mb-6 flex gap-2 flex-wrap">
        <span>Kategorie: {recipe.category}</span>
        <span>•</span>
        <span>Schwierigkeit: {recipe.difficulty}</span>
        <span>•</span>
        <span>Dauer: {recipe.durationMinutes} Min</span>
        <span>•</span>
        <span>Portionen: ca. ${recipe.servings}</span>
      </div>

      {recipe.content &&
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Kurzbeschreibung</h2>
            <p>{recipe.content}</p>
        </section>
      }

      {recipe.ingredients?.length &&
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Zutaten</h2>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      }

      {recipe.steps?.length &&
      <section>
        <h2 className="text-xl font-semibold mb-2">Zubereitung</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      }

      <div className="mt-8">
        <Link href={`/rezepte`} className="text-sm text-blue-600 underline">
          Zurück zur Übersicht
        </Link>
      </div>

    </main>
  );
}