import { Background } from "@/types/types"

export const defaultBackground: Background = {
  id: 0,
  name: "Default",
  className:
    "bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-5 before:content-['']",
  type: "gradient",
}

export const backgrounds: Background[] = [
  {
    id: 4,
    name: "Sunset Vibes",
    className: "bg-gradient-to-r from-orange-500 to-pink-500",
    type: "gradient",
  },
  {
    id: 5,
    name: "Ocean Breeze",
    className: "bg-gradient-to-r from-blue-500 to-cyan-500",
    type: "gradient",
  },
  {
    id: 6,
    name: "Forest Mist",
    className: "bg-gradient-to-r from-green-300 to-teal-600",
    type: "gradient",
  },
  {
    id: 7,
    name: "Purple Haze",
    className: "bg-gradient-to-r from-purple-500 to-indigo-500",
    type: "gradient",
  },
  {
    id: 8,
    name: "Golden Hour",
    className: "bg-gradient-to-r from-yellow-400 to-orange-500",
    type: "gradient",
  },
  {
    id: 9,
    name: "Midnight Sky",
    className: "bg-gradient-to-r from-blue-900 to-purple-900",
    type: "gradient",
  },
  {
    id: 10,
    name: "Rose Garden",
    className: "bg-gradient-to-r from-pink-300 to-rose-400",
    type: "gradient",
  },
  {
    id: 11,
    name: "Arctic Aurora",
    className: "bg-gradient-to-r from-teal-300 to-blue-400",
    type: "gradient",
  },
  {
    id: 12,
    name: "Desert Sand",
    className: "bg-gradient-to-r from-amber-200 to-yellow-300",
    type: "gradient",
  },
  {
    id: 13,
    name: "Mystic Forest",
    className: "bg-gradient-to-r from-emerald-800 via-green-600 to-teal-500",
    type: "gradient",
  },
  {
    id: 14,
    name: "Berry Blast",
    className: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
    type: "gradient",
  },
  {
    id: 15,
    name: "Deep Ocean",
    className: "bg-gradient-to-r from-blue-600 to-cyan-700",
    type: "gradient",
  },
  {
    id: 16,
    name: "Neon Dreams",
    className: "bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500",
    type: "gradient",
  },
  {
    id: 17,
    name: "Mint Chocolate",
    className: "bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500",
    type: "gradient",
  },
  {
    id: 18,
    name: "Autumn Leaves",
    className: "bg-gradient-to-r from-red-500 via-orange-400 to-amber-400",
    type: "gradient",
  },
  {
    id: 19,
    name: "Northern Lights",
    className: "bg-gradient-to-r from-green-400 via-cyan-500 to-purple-600",
    type: "gradient",
  },
  {
    id: 20,
    name: "Pastel Dream",
    className:
      "bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 21,
    name: "Soft Sunrise",
    className:
      "bg-gradient-to-r from-yellow-200 via-pink-200 to-orange-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 22,
    name: "Mint Breeze",
    className:
      "bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 23,
    name: "Peach Blossom",
    className:
      "bg-gradient-to-r from-rose-200 via-amber-200 to-yellow-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  // Gradientes con temas naturales
  {
    id: 24,
    name: "Amanecer Suave",
    className:
      "bg-gradient-to-tr from-pink-300 via-orange-300 to-yellow-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 25,
    name: "Atardecer en la Playa",
    className:
      "bg-gradient-to-bl from-blue-400 via-purple-400 to-orange-400 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 26,
    name: "Bosque Primaveral",
    className:
      "bg-gradient-to-br from-green-300 via-emerald-200 to-sky-300 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 27,
    name: "Lavanda en Flor",
    className:
      "bg-gradient-to-tl from-purple-400 via-violet-300 to-indigo-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  // Gradientes con temas de dulces
  {
    id: 28,
    name: "Algodón de Azúcar",
    className:
      "bg-gradient-to-br from-pink-400 via-blue-300 to-purple-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 29,
    name: "Helado de Fresa",
    className:
      "bg-gradient-to-bl from-red-300 via-rose-400 to-pink-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 30,
    name: "Caramelo de Menta",
    className:
      "bg-gradient-to-tr from-emerald-300 via-teal-200 to-cyan-300 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  {
    id: 31,
    name: "Chicle",
    className:
      "bg-gradient-to-tl from-fuchsia-400 via-pink-400 to-purple-300 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px),radial-gradient(circle,#ffffff_1px,transparent_1px)] before:bg-[size:4rem_4rem,4rem_4rem,2rem_2rem] before:opacity-15 before:content-['']",
    type: "gradient",
  },
  // Gradientes metálicos suaves
  {
    id: 32,
    name: "Oro Rosado",
    className: "bg-gradient-to-br from-yellow-200 via-amber-200 to-rose-200",
    type: "gradient",
  },
  {
    id: 33,
    name: "Plata Holográfica",
    className: "bg-gradient-to-r from-slate-200 via-blue-100 to-purple-200",
    type: "gradient",
  },
  {
    id: 34,
    name: "Bronce Suave",
    className: "bg-gradient-to-bl from-yellow-300 via-amber-200 to-stone-200",
    type: "gradient",
  },
  // Gradientes de estaciones
  {
    id: 35,
    name: "Primavera",
    className: "bg-gradient-to-br from-lime-200 via-yellow-200 to-pink-200",
    type: "gradient",
  },
  {
    id: 36,
    name: "Verano",
    className: "bg-gradient-to-tr from-sky-300 via-yellow-200 to-orange-200",
    type: "gradient",
  },
  {
    id: 37,
    name: "Otoño",
    className: "bg-gradient-to-bl from-amber-300 via-orange-200 to-red-200",
    type: "gradient",
  },
  {
    id: 38,
    name: "Invierno",
    className: "bg-gradient-to-tl from-blue-200 via-slate-100 to-indigo-100",
    type: "gradient",
  },
  // Gradientes con más contraste
  {
    id: 39,
    name: "Neón Pastel",
    className: "bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300",
    type: "gradient",
  },
  {
    id: 40,
    name: "Atardecer Tropical",
    className: "bg-gradient-to-bl from-orange-300 via-red-200 to-purple-300",
    type: "gradient",
  },
  {
    id: 41,
    name: "Galaxia Pastel",
    className: "bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300",
    type: "gradient",
  },
  {
    id: 42,
    name: "Arcoíris Suave",
    className: "bg-gradient-to-r from-red-200 via-yellow-200 to-blue-200",
    type: "gradient",
  },
  {
    id: 46,
    name: "Metales - Oro",
    className: "bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600",
    type: "gradient",
  },
]
