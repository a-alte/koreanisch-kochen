// app/rezepte/page.tsx

import { RecipeList } from "@/components/RecipeList";

export default function RezeptePage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Rezepte</h1>
      <RecipeList />
    </main>
  );
}
