/**
 * Page: Fronpage (Startseite)
 * Route: /
 * Description: Renders the front page.
 */

import Image from "next/image";
import Link from "next/link";

import { RecipeList } from "@/components/RecipeList";

import { twc } from "@/data/tailwind-presets";

export default function Home() {
  return (
    <main>
      <div className="py-20 bg-red-800 text-center">
        <div className={twc("container")}>
          <h1 className="text-3xl font-bold text-white mb-4">Koreanisch kochen in Deutschland</h1>
          <p className="text-white">
            Einfache koreanische Rezepte mit Zutaten, die du in deutschen Supermärkten bekommst.
          </p>
        </div>
      </div>
      <div className={twc("container")}>
        <div className="py-10">
          <div className="mb-10">
            <h2 className={twc("h2")}>Featured Recipes</h2>
            <p className="text-gray-600">
              Handpicked collection of our most popular Korean dishes
            </p>
          </div>

          <RecipeList />

          <div className="text-center mt-12">
            <Link className={twc("button")} href={`/rezepte/`}>
              Alle Rezepte ansehen
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}