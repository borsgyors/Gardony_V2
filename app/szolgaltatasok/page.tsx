"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Building,
  Trash2,
  Droplet,
  Zap,
  Home,
  TreePine,
  Car,
  Heart,
  GraduationCap,
  BookOpen,
  Phone,
  ArrowRight,
  AlertCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SzolgaltatasokPage() {
  const services = [
    {
      icon: <FileText className="w-16 h-16" />,
      title: "Hivatali ügyek",
      description: "Okmányügyintézés, anyakönyvi ügyek, lakcímkártya",
      color: "#F59E0B"
    },
    {
      icon: <Building className="w-16 h-16" />,
      title: "Építésügy",
      description: "Építési engedélyek, bejelentések, hatósági eljárások",
      color: "#7C3AED"
    },
    {
      icon: <Home className="w-16 h-16" />,
      title: "Ingatlanügyek",
      description: "Tulajdoni lapok, helyrajzi számok, telekalakítás",
      color: "#2C7BA0"
    },
    {
      icon: <Trash2 className="w-16 h-16" />,
      title: "Hulladékgazdálkodás",
      description: "Szemétszállítás, szelektív gyűjtés, lomtalanítás",
      color: "#10B981"
    },
    {
      icon: <Droplet className="w-16 h-16" />,
      title: "Víz és csatorna",
      description: "Ivóvíz, szennyvíz, rákötések és hibabejelentés",
      color: "#0EA5E9"
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Közműszolgáltatás",
      description: "Elektromos áram, gáz és távhő szolgáltatások",
      color: "#F59E0B"
    },
    {
      icon: <TreePine className="w-16 h-16" />,
      title: "Közterület",
      description: "Közterület használat, faültétés, parkfenntartás",
      color: "#3D8B7C"
    },
    {
      icon: <Car className="w-16 h-16" />,
      title: "Közlekedés",
      description: "Parkolás, útfenntartás, közúti ügyek",
      color: "#64748B"
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Egészségügy",
      description: "Háziorvosok, védőnő, gyógyszertár elérhetőségek",
      color: "#DC2626"
    },
    {
      icon: <GraduationCap className="w-16 h-16" />,
      title: "Oktatás",
      description: "Óvodák, iskolák, felnőttképzés",
      color: "#7C3AED"
    },
    {
      icon: <BookOpen className="w-16 h-16" />,
      title: "Kultúra",
      description: "Könyvtár, művelődési ház, kulturális programok",
      color: "#EC4899"
    },
    {
      icon: <Phone className="w-16 h-16" />,
      title: "Közérdekű telefonszámok",
      description: "Segélyhívók, közszolgáltatók, hatóságok",
      color: "#10B981"
    }
  ]

  const emergencyNumbers = [
    { service: "Mentők", number: "104", icon: <Heart className="w-10 h-10" />, color: "#DC2626" },
    { service: "Tűzoltóság", number: "105", icon: <AlertCircle className="w-10 h-10" />, color: "#F59E0B" },
    { service: "Rendőrség", number: "107", icon: <Phone className="w-10 h-10" />, color: "#2C7BA0" },
    { service: "Általános segélyhívó", number: "112", icon: <Phone className="w-10 h-10" />, color: "#DC2626" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Municipal Building Background */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
            alt="Szolgáltatások"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3D8B7C]/70 via-[#3D8B7C]/60 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 max-w-3xl">
            <Badge className="mb-6 text-xl px-6 py-3 bg-white/20 backdrop-blur-sm border-white/50 text-white">
              <Building className="w-5 h-5 mr-2" />
              Szolgáltatások
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Önkormányzati Szolgáltatások
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg leading-relaxed">
              Minden fontos közszolgáltatás és hivatali ügy egy helyen
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-20 bg-gradient-to-br from-[#FFE4E6] via-white to-[#FEF3C7]">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-2xl px-8 py-4 bg-[#DC2626]">
              <AlertCircle className="w-6 h-6 mr-3" />
              SEGÉLYHÍVÓK
            </Badge>
            <h2 className="text-5xl font-bold mb-4 text-[#DC2626]">Vészhelyzet esetén hívjon!</h2>
            <p className="text-2xl text-[#2C3E50]">24 órás segélyhívó számok</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {emergencyNumbers.map((item, index) => (
              <div
                key={index}
                className="group animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="text-center border-none shadow-lg transform-gpu translate-y-0 transition-transform duration-300 ease-out hover:shadow-3xl hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-[#FFE4E6] motion-reduce:transition-none">
                  <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: item.color }} />
                  <CardHeader>
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ease-out"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <div style={{ color: item.color }}>
                        {item.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-4">{item.service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="text-7xl font-bold mb-3"
                      style={{ color: item.color }}
                    >
                      {item.number}
                    </div>
                    <p className="text-lg text-[#64748B]">Ingyenes hívás</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Divider */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
          alt="Lake Velence"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#3D8B7C] to-[#2C7BA0] bg-clip-text text-transparent">
              Szolgáltatások
            </h2>
            <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">
              Teljes körű önkormányzati és közszolgáltatások Gárdony lakosai számára
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 border-none overflow-hidden h-full bg-gradient-to-br from-white to-[#F8FAFC] motion-reduce:transition-none">
                  <CardHeader>
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ease-out shadow-lg"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color
                      }}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl group-hover:text-[#3D8B7C] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl text-[#64748B] leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto border-2 border-[#3D8B7C] bg-gradient-to-br from-white to-[#E8F4F8] shadow-2xl">
              <CardContent className="pt-[63px] pb-12 px-12">
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-4xl font-bold mb-4 text-[#1A1A1A]">További információk és űrlapok</h3>
                    <p className="text-xl text-[#2C3E50] leading-relaxed mb-8">
                      Töltse le a szükséges űrlapokat és dokumentumokat a Dokumentumok menüpontban,
                      vagy vegye fel velünk a kapcsolatot.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/dokumentumok">
                        <Button size="lg" className="gap-3 text-xl px-10 py-7 h-auto shadow-xl">
                          <FileText className="w-6 h-6" />
                          Dokumentumok
                          <ArrowRight className="w-6 h-6" />
                        </Button>
                      </Link>
                      <Link href="/kapcsolat">
                        <Button
                          size="lg"
                          className="gap-3 text-xl px-10 py-7 h-auto 
               bg-transparent border-2 
               !text-[#2C7BA0] !border-[#2C7BA0] 
               shadow-lg 
               hover:!bg-[#2C7BA0] hover:!text-white hover:!border-[#2C7BA0]
               transition-colors duration-300"                        >
                          <Phone className="w-6 h-6" />
                          Kapcsolat
                          <ArrowRight className="w-6 h-6" />
                        </Button>
                      </Link>

                    </div>
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
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
          alt="Gárdony"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
    </div>
  )
}