"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Waves, Sun, TreePine, Building, Utensils, Hotel, Camera, Bike, ArrowRight, Sailboat, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TurizmusPage() {
  const attractions = [
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Velencei-tó", // EN: Lake Velence
      description: "Magyarország harmadik legnagyobb természetes tava, 26 km² területtel", // EN: Hungary's third largest natural lake, covering 26 km²
      color: "#2C7BA0",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/stunning-panoramic-photograph-of-lake-ve-06c1cbb8-20251130141513.jpg"
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Termálfürdő", // EN: Thermal Bath
      description: "58°C-os gyógyvíz, strand és wellness szolgáltatások", // EN: 58°C medicinal water, beach and wellness services
      color: "#F59E0B",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Természetvédelem", // EN: Nature Conservation
      description: "Dinnyési Fertő és védett nádasok, madárvilág megfigyelése", // EN: Dinnyés Lagoon and protected reedbeds, birdwatching
      color: "#3D8B7C",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Gárdonyi Géza Emlékház", // EN: Gárdonyi Géza Memorial House
      description: "Múzeum és irodalmi emlékek a híres író életéről", // EN: Museum and literary memorials about the famous writer's life
      color: "#7C3AED",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
    }
  ]

  const activities = [
    { title: "Vitorlázás", icon: <Sailboat className="w-8 h-8" />, color: "#2C7BA0" }, // EN: Sailing
    { title: "Szörfözés", icon: <Waves className="w-8 h-8" />, color: "#0EA5E9" }, // EN: Surfing
    { title: "Kajak-kenu", icon: <Waves className="w-8 h-8" />, color: "#3D8B7C" }, // EN: Kayak-Canoe
    { title: "Horgászat", icon: <Waves className="w-8 h-8" />, color: "#2C7BA0" }, // EN: Fishing
    { title: "Kerékpározás", icon: <Bike className="w-8 h-8" />, color: "#F59E0B" }, // EN: Cycling
    { title: "Túrázás", icon: <TreePine className="w-8 h-8" />, color: "#10B981" }, // EN: Hiking
    { title: "Strandolás", icon: <Sun className="w-8 h-8" />, color: "#F59E0B" }, // EN: Beach/Swimming
    { title: "Fotózás", icon: <Camera className="w-8 h-8" />, color: "#EC4899" } // EN: Photography
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Lake Background */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/colorful-sailboats-and-small-harbor-at-l-62673b5f-20251130141514.jpg"
            alt="Velencei-tó turizmus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C7BA0]/70 via-[#2C7BA0]/60 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 max-w-4xl">
            <Badge className="mb-6 text-xl px-6 py-3 bg-white/20 backdrop-blur-sm border-white/50 text-white">
              <Waves className="w-5 h-5 mr-2" />
              Turizmus
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              Fedezze fel a Velencei-tavat
            </h1>
            <p className="text-2xl md:text-4xl text-white/95 drop-shadow-lg leading-relaxed mb-8">
              Természeti szépség, vízi sportok és családi programok
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-3 text-xl px-10 py-7 h-auto bg-black text-white hover:bg-white hover:text-black transition-colors shadow-2xl">
                <Camera className="w-6 h-6" />
                Galéria megtekintése
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Main Attractions */}
      <section id="latni" className="py-24 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Fő látnivalók
            </h2>
            <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">
              Gárdony és a Velencei-tó számos turisztikai és szabadidős lehetőséget kínál
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {attractions.map((item, index) => (
              <div
                key={index}
                className="group animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 border-none overflow-hidden h-full motion-reduce:transition-none">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-2xl"
                        style={{ backgroundColor: item.color }}
                      >
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="bg-gradient-to-br from-white to-[#F8FAFC]">
                    <CardTitle
                      className="text-3xl mb-3"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </CardTitle>
                    <p className="text-xl text-[#64748B] leading-relaxed">{item.description}</p>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Divider */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
          alt="Lake Velence Beach"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* About Lake Velence */}
      <section id="balaton-info" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container max-w-5xl relative">
          <Card className="shadow-2xl border-none overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2C7BA0] via-[#0EA5E9] to-[#3D8B7C]" />
            <CardHeader className="bg-gradient-to-br from-[#E8F4F8] to-white p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2C7BA0] to-[#0EA5E9] rounded-full flex items-center justify-center">
                  <Waves className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-6xl bg-gradient-to-r from-[#2C7BA0] to-[#0EA5E9] bg-clip-text text-transparent">
                  A Velencei-tó
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 text-xl leading-relaxed p-12">
              <p className="text-[#2C3E50]">
                A <strong className="text-[#2C7BA0]">Velencei-tó</strong> Magyarország harmadik legnagyobb természetes tava, amely <strong className="text-[#0EA5E9]">26 km²</strong>
                területű sekély, nádasokkal tagolt vízfelület. A tó átlagos mélysége mindössze
                1,5 méter, maximális mélysége pedig 3 méter.
              </p>
              <p className="text-[#2C3E50]">
                A tó gyors felmelegedése miatt a fürdőszezon már <strong className="text-[#F59E0B]">májustól indul</strong>, és gyakran
                októberig is tart. A víz átlaghőmérséklete nyáron eléri a <strong className="text-[#DC2626]">26-28°C-ot</strong>, amely
                ideálissá teszi a fürdőzéshez.
              </p>
              <p className="text-[#2C3E50]">
                A Velencei-tó és környéke a <strong className="text-[#3D8B7C]">Ramsari egyezmény</strong> alapján nemzetközi jelentőségű
                vadvédelmi terület. A nádasok és a sekély víz kiváló élőhelyet biztosít számos
                védett madárfajnak.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-3xl font-bold bg-gradient-to-br from-[#2C7BA0] to-[#0EA5E9] bg-clip-text text-transparent">26 km²</div>
                  <div className="text-lg text-[#64748B] mt-2">Terület</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-3xl font-bold bg-gradient-to-br from-[#3D8B7C] to-[#10B981] bg-clip-text text-transparent">1.5 m</div>
                  <div className="text-lg text-[#64748B] mt-2">Átlag mélység</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-3xl font-bold bg-gradient-to-br from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">26-28°C</div>
                  <div className="text-lg text-[#64748B] mt-2">Víz hőmérséklet</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-3xl font-bold bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">3. hely</div>
                  <div className="text-lg text-[#64748B] mt-2">Legnagyobb tavak</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities */}
      <section id="programok" className="py-24 bg-gradient-to-br from-[#E8F4F8] via-white to-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#0EA5E9] to-[#2C7BA0] bg-clip-text text-transparent">
              Programok és tevékenységek
            </h2>
            <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">
              Változatos lehetőségek aktív és passzív pihenésre
            </p>
          </div>

          <div id="vizisport" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 border-none text-center h-full bg-gradient-to-br from-white to-[#F8FAFC] motion-reduce:transition-none">
                  <CardContent className="p-8">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ease-out shadow-lg"
                      style={{
                        backgroundColor: `${activity.color}15`,
                        color: activity.color
                      }}
                    >
                      {activity.icon}
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: activity.color }}
                    >
                      {activity.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="szolgaltatasok" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
              Turisztikai szolgáltatások
            </h2>
            <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">
              Minden ami a kényelmes üdüléshez szükséges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Hotel className="w-12 h-12" />, title: "Szállás", desc: "Hotelek, panziók, apartmanok", color: "#EC4899" },
              { icon: <Utensils className="w-12 h-12" />, title: "Étkezés", desc: "Éttermek és vendéglők", color: "#F59E0B" },
              { icon: <Bike className="w-12 h-12" />, title: "Kölcsönzés", desc: "Kerékpár és sporteszköz", color: "#10B981" },
              { icon: <Camera className="w-12 h-12" />, title: "Idegenvezetés", desc: "Túrák és programok", color: "#7C3AED" }
            ].map((service, index) => (
              <div
                key={index}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 border-none text-center h-full bg-gradient-to-br from-white to-[#F8FAFC] motion-reduce:transition-none">
                  <CardHeader>
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ease-out shadow-lg"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color
                      }}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-3xl mb-3" style={{ color: service.color }}>
                      {service.title}
                    </CardTitle>
                    <p className="text-xl text-[#64748B]">{service.desc}</p>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8] shadow-2xl">
              <CardContent className="pt-5 px-10 pb-10">
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2C7BA0] to-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Szálláshely információk</h3>
                    <p className="text-xl text-[#2C3E50] leading-relaxed mb-8">
                      A szálláshelyek listája és részletes információk megtalálhatók a Dokumentumok
                      menüpontban a "Szálláshely-üzemeltetési engedély nyilvántartás" dokumentumban.
                    </p>
                    <Link href="/dokumentumok">
                      <Button size="lg" className="gap-3 text-xl px-10 py-7 h-auto shadow-xl">
                        <Hotel className="w-6 h-6" />
                        Szálláshelyek listája
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Footer Lake Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/stunning-panoramic-photograph-of-lake-ve-06c1cbb8-20251130141513.jpg"
          alt="Lake Velence Sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
    </div>
  )
}