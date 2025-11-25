import { RecipeList } from "@/components/RecipeList";

// Home page showing a short intro and the recipe list.
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Koreanisch kochen in Deutschland</h1>
      <p className="mb-6 text-gray-700">
        Einfache koreanische Rezepte mit Zutaten, die du in deutschen Supermärkten bekommst.
      </p>

      <RecipeList />
    </main>
  );
}