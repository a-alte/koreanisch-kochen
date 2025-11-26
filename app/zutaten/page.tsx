/**
 * Page: Recipe overview (Rezeptübersicht)
 * Route: /rezepte
 * Description: Renders the recipe overview page.
 */

import { twc } from "@/data/tailwind-presets";

export default function IngridientsOverviewPage() {
  return (
    <main>
      <div className={twc("container")}>
        <h1 className={twc("h1")}>Zutaten</h1>
      </div>
    </main>
  );
}