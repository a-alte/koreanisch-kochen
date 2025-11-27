/**
 * File: Recipes
 * Location: /data/recipes.ts
 */

export type RecipeCategoryId =
  | "Hauptgericht"
  | "Snack"
  | "Suppe"
  | "Banchan"
  | "Dessert";

export type RecipeDifficulty = 
  | "leicht" 
  | "mittel" 
  | "schwer";

export type Recipe = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  image?: string;
  category?: RecipeCategoryId;
  difficulty?: RecipeDifficulty;
  durationMinutes?: number;
  content?: string;
  ingredients?: string[];
  steps?: string[];
  servings?: number;
  isKidFriendly?: boolean;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "einfaches-bulgogi",
    title: "Einfaches Bulgogi aus der Pfanne",
    description: "Schnelles Bulgogi mit Zutaten aus jedem Rewe oder Edeka.",
    image: "/images/recipes/bulgogi/main.jpg",
    category: "Hauptgericht",
    difficulty: "mittel",
    durationMinutes: 30,
    content:
      "Dieses Bulgogi ist eine einfache Pfannenversion, die ohne lange Marinierzeit auskommt und mit Supermarkt Zutaten funktioniert.",
    ingredients: [
      "300 g Rinderhüfte oder Rinderminutensteaks, sehr dünn geschnitten",
      "3 EL Sojasauce",
      "1 EL Zucker oder Honig",
      "1 EL Sesamöl",
      "1 Knoblauchzehe, fein gehackt",
      "1 Frühlingszwiebel",
      "Optional: 1 kleine Zwiebel, in feine Streifen geschnitten",
    ],
    steps: [
      "Fleisch sehr dünn schneiden, am besten leicht angefroren.",
      "Sojasauce, Zucker oder Honig, Sesamöl und Knoblauch in einer Schüssel verrühren.",
      "Fleisch in die Marinade geben und mindestens 10 Minuten ziehen lassen.",
      "Pfanne stark vorheizen und Fleisch in Portionen kurz und kräftig anbraten, bis es leicht karamellisiert.",
      "Frühlingszwiebel und Zwiebelstreifen kurz mitbraten.",
      "Mit Reis und optional Salatblättern servieren.",
    ],
    servings: 2,
  },
  {
    id: 2,
    slug: "gimbap-einfach",
    title: "Gimbap (einfache Version)",
    description: "Vereinfachtes Gimbap ohne Spezialausrüstung, ideal für Anfänger.",
    image: "/images/recipes/gimbap/main.jpg",
    category: "Snack",
    difficulty: "leicht",
    durationMinutes: 40,
    content:
      "Einfache Gimbap Rollen mit Zutaten, die du im normalen Supermarkt bekommst. Perfekt zum Mitnehmen.",
    ingredients: [
      "3 Nori Blätter",
      "2 Portionen Reis, leicht gesalzen und mit etwas Sesamöl gemischt",
      "2 Eier, zu einem Omelett gebraten und in Streifen geschnitten",
      "1 kleine Möhre, in feine Streifen geschnitten",
      "1 Stück Gurke, in Streifen geschnitten",
      "2 Scheiben Kochschinken oder Tofu, in Streifen geschnitten",
      "Optional: eingelegter Rettich, wenn vorhanden",
    ],
    steps: [
      "Gekochten Reis leicht salzen und mit etwas Sesamöl mischen, abkühlen lassen.",
      "Möhre kurz in der Pfanne anbraten oder blanchieren.",
      "Eier zu einem dünnen Omelett ausbacken und in Streifen schneiden.",
      "Nori Blatt auf ein Brett legen, dünne Schicht Reis darauf verteilen, oben einen Rand frei lassen.",
      "Füllung in einer Linie in die Mitte legen.",
      "Von unten her straff aufrollen und leicht andrücken.",
      "Rollen mit einem scharfen Messer in Stücke schneiden.",
    ],
    servings: 2,
  },
  {
    id: 3,
    slug: "milde-tteokbokki-kinder",
    title: "Milde Tteokbokki für Kinder",
    description: "Familienfreundlich und weniger scharf, gut für Kleinkinder geeignet.",
    image: "/images/recipes/tteokbokki/main.jpg",
    category: "Hauptgericht",
    difficulty: "leicht",
    durationMinutes: 25,
    content:
      "Diese Version von Tteokbokki verzichtet weitgehend auf Schärfe und ist weich gekocht, damit Kinder gut mitessen können.",
    ingredients: [
      "250 g koreanische Reiskuchen (Tteok)",
      "300 ml Gemüsebrühe oder Wasser",
      "1 EL Sojasauce",
      "1 TL Zucker",
      "1 EL Reissirup oder Apfelsaft",
      "Ein kleines Stück Butter oder neutrales Öl",
      "Optional: ein sehr kleiner Klecks Gochujang für die Erwachsenen",
    ],
    steps: [
      "Reiskuchen nach Packungsanweisung vorbereiten, falls sie eingeweicht werden müssen.",
      "Brühe oder Wasser in einen Topf geben und aufkochen.",
      "Sojasauce, Zucker und Reissirup oder Apfelsaft hinzufügen, umrühren.",
      "Reiskuchen in die Flüssigkeit geben und bei mittlerer Hitze köcheln lassen.",
      "Gelegentlich rühren, bis die Sauce leicht eindickt und die Reiskuchen weich sind.",
      "Für Kinder ohne Schärfe servieren, für Erwachsene optional etwas Gochujang unterrühren.",
    ],
    servings: 3,
    isKidFriendly: true,
  },
  {
    id: 4,
    slug: "kimchi-jjigae",
    title: "Kimchi Jjigae",
    description: "Herzhaft scharfer Eintopf mit gereiftem Kimchi.",
    category: "Hauptgericht",
    difficulty: "mittel",
    durationMinutes: 40,
    content:
      "Ein klassischer Kimchi Eintopf, wärmt von innen und ist ideal, wenn der Kimchi schon sehr reif und säuerlich ist.",
    ingredients: [
      "200 g gut gereifter Kimchi, grob gehackt",
      "150 g Schweinebauch oder Nackenkotelett in Stücke geschnitten",
      "1 kleine Zwiebel, in Streifen geschnitten",
      "1 Frühlingszwiebel",
      "400 ml Wasser oder Brühe",
      "1 EL Gochugaru (Chiliflocken), nach Geschmack",
      "1 TL Zucker",
      "1 TL Sojasauce",
      "1 Stück Tofu, in Würfel geschnitten",
    ],
    steps: [
      "Fleisch in einem Topf mit etwas Öl anbraten, bis es leicht Farbe bekommt.",
      "Zwiebel und Kimchi hinzufügen und ein paar Minuten mitbraten.",
      "Mit Wasser oder Brühe aufgießen.",
      "Gochugaru, Zucker und Sojasauce hinzufügen und gut verrühren.",
      "Etwa 20 bis 30 Minuten köcheln lassen.",
      "Tofu und Frühlingszwiebel dazugeben und weitere 5 Minuten ziehen lassen.",
      "Mit Reis servieren.",
    ],
    servings: 2,
  },
  {
    id: 5,
    slug: "bibimbap",
    title: "Bibimbap",
    description: "Reis mit Gemüse, Ei und Gochujang.",
    category: "Hauptgericht",
    difficulty: "leicht",
    durationMinutes: 30,
    content:
      "Bibimbap bedeutet gemischter Reis. Alle Komponenten werden separat vorbereitet und am Ende in einer Schüssel kombiniert.",
    ingredients: [
      "2 Portionen gekochter Reis",
      "1 Handvoll Spinat, kurz blanchiert",
      "1 kleine Möhre, in Julienne geschnitten",
      "1 kleine Zucchini, in Streifen geschnitten",
      "Einige Pilze, zum Beispiel Champignons, in Scheiben",
      "150 g Rinderhack oder vegane Alternative",
      "2 Eier",
      "Gochujang, Sesamöl und Sesamsamen zum Servieren",
    ],
    steps: [
      "Gemüse jeweils separat kurz in der Pfanne mit etwas Öl und Salz anbraten.",
      "Hackfleisch oder vegane Alternative anbraten und mit Sojasauce leicht würzen.",
      "Reis in Schüsseln verteilen.",
      "Gemüse und Fleisch in kleinen Häufchen auf den Reis legen.",
      "In einer separaten Pfanne Spiegeleier braten und auf die Schüssel setzen.",
      "Mit Gochujang, etwas Sesamöl und Sesamsamen servieren.",
      "Vor dem Essen alles gut vermischen.",
    ],
    servings: 2,
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  // Find a single recipe by its slug.
  return recipes.find((recipe) => recipe.slug === slug);
}