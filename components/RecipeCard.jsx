import Link from "next/link";

// Simple card component for a single recipe.
export function RecipeCard({ slug, title, description, category, difficulty, durationMinutes }) {
  return (
    <article className="border rounded-lg p-4 mb-4 shadow-sm">
        <Link href={`/rezepte/${slug}`}>
            <h2 className="text-xl font-semibold mb-1">{title}</h2>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
        </Link>
      <div className="text-xs text-gray-500 flex gap-2 flex-wrap">
        <span>{category}</span>
        <span>•</span>
        <span>{difficulty}</span>
        <span>•</span>
        <span>{durationMinutes} Min</span>
      </div>
    </article>
  );
}