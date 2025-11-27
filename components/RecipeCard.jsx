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
        </div>
        <div className="p-5">
          <div className="h-full flex flex-col justify-between text-white text-center">

            {title &&
              <h2 className={twc("h2")}>{title}</h2>
            }

            <div className="text-xs flex gap-2 justify-center opacity-50">
              <span>{category}</span>
              <span>•</span>
              <span>{difficulty}</span>
              <span>•</span>
              <span>{durationMinutes} Min</span>
            </div>
          </div>
        </div>
      </Link>

    </article>
  );
}