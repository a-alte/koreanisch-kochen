import Image from "next/image";
import Link from "next/link";

import { twc } from "@/data/tailwind-presets";

// Simple card component for a single recipe.
export function RecipeCard({ slug, title, description, image, category, difficulty, durationMinutes }) {
  return (
    <article className={twc("card")}>

      <Link href={`/rezepte/${slug}`}>
        <div className="relative h-64 overflow-hidden">
          {image &&
            <Image src={image} alt={title} width={600} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          }
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-5">
          {title &&
            <h2 className={twc("h2")}>{title}</h2>
          }
          {description &&
            <p className={twc("p")}>{description}</p>
          }
          <div className="text-xs text-gray-500 flex gap-2 flex-wrap">
            <span>{category}</span>
            <span>•</span>
            <span>{difficulty}</span>
            <span>•</span>
            <span>{durationMinutes} Min</span>
          </div>
        </div>
      </Link>
      
    </article>
  );
}