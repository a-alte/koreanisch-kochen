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

    <main className="">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 h-full text-white bg-[#1A3C34]">
          <div className="px-6 lg:px-12 py-12 flex flex-col justify-between h-full">
            <div>
              {recipe.title &&
                <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
              }

              {recipe.description &&
                <p className="mb-4">{recipe.description}</p>
              }
            </div>

            <div className="text-sm flex flex-col gap-2 flex-wrap">
              <span><span className="font-sans">Kategorie:</span> {recipe.category}</span>

              <span><span className="font-sans">Schwierigkeit:</span> {recipe.difficulty}</span>

              <span><span className="font-sans">Dauer:</span> {recipe.durationMinutes} Min</span>

              <span><span className="font-sans">Portionen:</span> ca. ${recipe.servings}</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 bg-[#1A3C34]">
          <div className="min-h-80 h-[38.2vh] lg:h-[61.8vh]">
            {recipe.image &&
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={900}
                height={600}
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 px-12 py-12">

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

        </div>
        <div className="col-span-12 lg:col-span-8 px-12 py-12">
          {recipe.content &&
            <section className="mb-6">
              <p className="text-2xl">{recipe.content}</p>
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
        </div>
      </div>

    </main>
  );
}