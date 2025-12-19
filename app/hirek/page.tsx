"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HirekPage() {
  const news = [
    {
      id: 1,
      title: "Tájékoztatás munkarendváltozásról",
      date: "2025-04-24",
      category: "Közlemények",
      excerpt: "Tájékoztatjuk a lakosságot, hogy a Polgármesteri Hivatal ügyfélfogadási rendje megváltozik a következő héten.",
      slug: "tajekoztatas-munkarendvaltozasrol",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg",
      color: "#10B981"
    },
    {
      id: 2,
      title: "Testületi ülés 2025. április 29.",
      date: "2025-04-25",
      category: "Önkormányzat",
      excerpt: "A Gárdonyi Önkormányzat Képviselő-testülete 2025. április 29-én 17:00 órakor tartja soron következő ülését.",
      slug: "testuleti-ules-2025-aprilis-29",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg",
      color: "#7C3AED"
    },
    {
      id: 3,
      title: "A legszebb konyhakertek program",
      date: "2025-04-23",
      category: "Programok",
      excerpt: "Idén is meghirdetjük a hagyományos 'A legszebb konyhakertek' programot Gárdony településen.",
      slug: "legszebb-konyhakertek-program",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg",
      color: "#3D8B7C"
    },
    {
      id: 4,
      title: "Orvosi rendelési idő változás",
      date: "2025-04-18",
      category: "Egészségügy",
      excerpt: "Tájékoztatjuk a lakosságot, hogy Dr. Nagy Péter háziorvos rendelési ideje megváltozott.",
      slug: "orvosi-rendeles-valtozas",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg",
      color: "#DC2626"
    },
    {
      id: 5,
      title: "Velencei-tó strandok nyitvatartása",
      date: "2025-04-15",
      category: "Turizmus",
      excerpt: "A nyári szezon közeledtével közöljük a Velencei-tó gárdonyi strandjainak nyitvatartási idejét.",
      slug: "strandok-nyitvatartasa",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg",
      color: "#0EA5E9"
    },
    {
      id: 6,
      title: "Hulladékszállítási változások",
      date: "2025-04-10",
      category: "Közszolgáltatás",
      excerpt: "Tájékoztatjuk a lakosságot a hulladékszállítás rendjének módosításáról.",
      slug: "hulladekszallitas-valtozas",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg",
      color: "#F59E0B"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Community Background */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
            alt="Gárdony hírek"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#DC2626]/70 via-[#DC2626]/60 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 max-w-3xl">
            <Badge className="mb-6 text-xl px-6 py-3 bg-white/20 backdrop-blur-sm border-white/50 text-white">
              <Newspaper className="w-5 h-5 mr-2" />
              Hírek
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Hírek és Közlemények
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg leading-relaxed">
              Aktuális információk és hivatalos közlemények Gárdony városából
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* News List */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container relative">
          <div className="grid gap-10 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  key={item.id}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Új külön group wrapper – ez a flicker fix lényege */}
                  <div className="group">
                    <Card
                      className="transition-transform transition-shadow duration-500 border-none 
                 overflow-hidden hover:-translate-y-2 hover:shadow-2xl 
                 will-change-transform"
                    >
                      <div className="grid md:grid-cols-5 gap-0">
                        {/* Image */}
                        <div className="relative h-80 md:h-auto md:col-span-2 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                          <Badge
                            className="absolute top-6 left-6 text-lg px-5 py-3 shadow-xl"
                            style={{ backgroundColor: item.color }}
                          >
                            {item.category}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3 p-10 bg-gradient-to-br from-white to-[#F8FAFC]">
                          <CardHeader className="p-0 mb-6">
                            <div className="flex items-center gap-4 text-[#64748B] mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-6 h-6" />
                                <time className="text-xl font-medium">{item.date}</time>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-6 h-6" />
                                <span className="text-xl">5 perc olvasás</span>
                              </div>
                            </div>

                            <CardTitle className="text-4xl group-hover:text-[#DC2626] transition-colors leading-tight">
                              {item.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="p-0">
                            <CardDescription className="text-2xl mb-8 line-clamp-3 leading-relaxed text-[#2C3E50]">
                              {item.excerpt}
                            </CardDescription>
                            <Link href={`/hirek/${item.slug}`}>
                              <Button
                                size="lg"
                                className="gap-3 text-xl px-10 py-7 h-auto group-hover:shadow-xl transition-all"
                                style={{ backgroundColor: item.color }}
                              >
                                Tovább olvasom
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Button size="lg" variant="outline" disabled className="text-xl px-8 py-6 h-auto">
              Előző
            </Button>
            <Button size="lg" className="text-xl px-8 py-6 h-auto bg-[#DC2626]">1</Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-6 h-auto hover:bg-[#DC2626] hover:text-white">2</Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-6 h-auto hover:bg-[#DC2626] hover:text-white">3</Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-6 h-auto hover:bg-[#DC2626] hover:text-white">
              Következő
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFE4E6]">
        <div className="container">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Card className="border-2 border-[#DC2626] bg-gradient-to-br from-white to-[#FFE4E6]/30 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#DC2626] to-[#F59E0B]" />
              <CardContent className="p-12">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#DC2626] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Newspaper className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#DC2626] to-[#F59E0B] bg-clip-text text-transparent">
                    Iratkozzon fel hírlevelünkre
                  </h2>
                  <p className="text-2xl text-[#2C3E50]">
                    Legyen naprakész Gárdony legfrissebb híreivel és eseményeivel
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Email cím..."
                    className="flex-1 px-6 py-6 text-xl rounded-2xl border-2 border-[#CBD5E0] focus:border-[#DC2626] focus:outline-none shadow-lg"
                  />
                  <Button size="lg" className="px-10 py-6 h-auto text-xl bg-gradient-to-r from-[#DC2626] to-[#F59E0B] hover:shadow-xl transition-shadow rounded-2xl">
                    Feliratkozás
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Lake Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/colorful-sailboats-and-small-harbor-at-l-62673b5f-20251130141514.jpg"
          alt="Lake Velence"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
    </div>
  )
}