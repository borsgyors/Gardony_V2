export type NewsItem = {
  id: number | string
  title: string
  date: string
  category: string
  excerpt: string
  slug: string
  image: string
  color?: string
}

// Single source of truth for news items used by both Home and News pages.
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Tájékoztatás munkarendváltozásról",
    date: "2025-04-24",
    category: "Közlemények",
    excerpt:
      "Tájékoztatjuk a lakosságot, hogy a Polgármesteri Hivatal ügyfélfogadási rendje megváltozik a következő héten.",
    slug: "tajekoztatas-munkarendvaltozasrol",
    image: "/media/townhall.jpg",
    color: "#10B981",
  },
  {
    id: 2,
    title: "Testületi ülés 2025. április 29.",
    date: "2025-04-25",
    category: "Önkormányzat",
    excerpt:
      "A Gárdonyi Önkormányzat Képviselő-testülete 2025. április 29-én 17:00 órakor tartja soron következő ülését.",
    slug: "testuleti-ules-2025-aprilis-29",
    image: "/media/testületiülés.jpg",
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "A legszebb konyhakertek program",
    date: "2025-04-23",
    category: "Programok",
    excerpt:
      "Idén is meghirdetjük a hagyományos 'A legszebb konyhakertek' programot Gárdony településen.",
    slug: "legszebb-konyhakertek-program",
    image: "/media/konyhakert.png",
    color: "#3D8B7C",
  },
  {
    id: 4,
    title: "Orvosi rendelési idő változás",
    date: "2025-04-18",
    category: "Egészségügy",
    excerpt:
      "Tájékoztatjuk a lakosságot, hogy Dr. Nagy Péter háziorvos rendelési ideje megváltozott.",
    slug: "orvosi-rendeles-valtozas",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg",
    color: "#DC2626",
  },
  {
    id: 5,
    title: "Velencei-tó strandok nyitvatartása",
    date: "2025-04-15",
    category: "Turizmus",
    excerpt:
      "A nyári szezon közeledtével közöljük a Velencei-tó gárdonyi strandjainak nyitvatartási idejét.",
    slug: "strandok-nyitvatartasa",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg",
    color: "#0EA5E9",
  },
  {
    id: 6,
    title: "Hulladékszállítási változások",
    date: "2025-04-10",
    category: "Közszolgáltatás",
    excerpt:
      "Tájékoztatjuk a lakosságot a hulladékszállítás rendjének módosításáról.",
    slug: "hulladekszallitas-valtozas",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg",
    color: "#F59E0B",
  },
]

export function getNewsSorted(): NewsItem[] {
  return [...NEWS_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
