/**
 * Page: Frontpage
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
      <section className="">
        <div className={twc("container")}>
          <div className="px-20 py-40 text-center max-w-240 mx-auto">
            <h1 className="text-[90px] leading-[1.1] mb-4">Leckere <i className="text-[#e94222]">koreanische Rezepte</i> mit einfachen Zutaten</h1>
            <p className="">
              Einfache koreanische Rezepte mit Zutaten, die du in deutschen Supermärkten bekommst.
            </p>
          </div>
        </div>
      </section>
      <div className={twc("container")}>
        <div className="py-10">
          <div className="grid grid-cols-12 mb-12">
            <div className="col-span-8">
              <h2 className={twc("h2")}>Featured Recipes</h2>
              <p className="">
                Handpicked collection of our most popular Korean dishes
              </p>
            </div>
            <div className="col-span-4 text-end">
              <Link className={twc("button")} href={`/rezepte/`}>
                Alle Rezepte ansehen
              </Link>
            </div>
            <div className="col-span-12">
          
            <RecipeList />
          
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}