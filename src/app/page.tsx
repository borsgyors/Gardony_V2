"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  FileText,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Users,
  Building,
  Waves,
  Sun,
  TreePine,
  Info,
  ArrowRight,
  Home,
  Utensils,
  Heart
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function HomePage() {
  const { t } = useLanguage()

  const recentNews = [
    {
      id: 1,
      title: "Tájékoztatás munkarendváltozásról",
      date: "2025-04-24",
      category: "Közlemények",
      excerpt: "Tájékoztatjuk a lakosságot, hogy a Polgármesteri Hivatal ügyfélfogadási rendje megváltozik a következő héten.",
      slug: "tajekoztatas-munkarendvaltozasrol",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
    },
    {
      id: 2,
      title: "Testületi ülés 2025. április 29.",
      date: "2025-04-25",
      category: "Önkormányzat",
      excerpt: "A Gárdonyi Önkormányzat Képviselő-testülete 2025. április 29-én 17:00 órakor tartja soron következő ülését.",
      slug: "testuleti-ules-2025-aprilis-29",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
    },
    {
      id: 3,
      title: "A legszebb konyhakertek program",
      date: "2025-04-23",
      category: "Programok",
      excerpt: "Idén is meghirdetjük a hagyományos 'A legszebb konyhakertek' programot Gárdony településen.",
      slug: "legszebb-konyhakertek-program",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
    }
  ]

  const menuItems = [
    {
      icon: <Calendar className="w-18 h-18" />,
      title: "Közérdekű adatok",
      description: "Infotv. szerinti közzétételek",
      href: "/kozerdeku-adatok",
      color: "#DC2626",
      bgColor: "#FEE2E2"
    },
    {
      icon: <FileText className="w-18 h-18" />,
      title: "Rendeletek",
      description: "Önkormányzati rendeletek",
      href: "/rendeletek",
      color: "#F59E0B",
      bgColor: "#FEF3C7"
    },
    {
      icon: <Building className="w-18 h-18" />,
      title: "Testületi döntések",
      description: "Jegyzőkönyvek és határozatok",
      href: "/testuleti-jegyzokonyvek",
      color: "#2C7BA0",
      bgColor: "#DBEAFE"
    },
    {
      icon: <Users className="w-18 h-18" />,
      title: "Pályázatok",
      description: "Kiírások és felhívások",
      href: "/palyazatok",
      color: "#3D8B7C",
      bgColor: "#D1FAE5"
    },
    {
      icon: <Phone className="w-18 h-18" />,
      title: "Ügyintézés",
      description: "Elérhetőségek és nyitvatartás",
      href: "/elerhetoseg-ugyintezes",
      color: "#7C3AED",
      bgColor: "#EDE9FE"
    },
    {
      icon: <Sun className="w-18 h-18" />,
      title: "Nyomtatványok",
      description: "Ügyi formanyomtatványok",
      href: "/nyomtatvanytar",
      color: "#0EA5E9",
      bgColor: "#E0F2FE"
    },
    {
      icon: <Waves className="w-18 h-18" />,
      title: "Turizmus",
      description: "Helyi attrakciók",
      href: "/turizmus",
      color: "#EC4899",
      bgColor: "#FCE7F3"
    },
    {
      icon: <Utensils className="w-18 h-18" />,
      title: "Szállás & Vendéglátás",
      description: "Helyi szolgáltatások",
      href: "/szallas-vendeglatas",
      color: "#10B981",
      bgColor: "#D1FAE5"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Lake Background */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/stunning-panoramic-photograph-of-lake-ve-06c1cbb8-20251130141513.jpg"
            alt="Lake Velence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A4D6B]/60 via-[#2C7BA0]/50 to-white/95" />
        </div>
        
        <div className="relative container h-full flex flex-col justify-center items-center text-center text-white">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl text-[#FFFFFF]">
              Gárdony Város
            </h1>
            <p className="text-2xl md:text-4xl mb-8 text-white/95 drop-shadow-lg max-w-4xl mx-auto">
              A Velencei-tó gyöngyszeme
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/turizmus">
                <Button size="lg" className="gap-3 text-3xl px-10 py-7 h-auto bg-[#2C7BA0] hover:bg-[#1A4D6B] shadow-2xl">
                  <Waves className="w-6 h-6" />
                  {t('quick.tourism')}
                </Button>
              </Link>
              <Link href="/bemutatkozas">
                <Button size="lg" variant="outline" className="gap-3 text-3xl px-10 py-7 h-auto bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30">
                  <Heart className="w-6 h-6" />
                  {t('quick.about')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator removed per request */}
      </section>

    
      {/* Menu System */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Főmenü
            </h2>
            <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">
              Gárdony Város Önkormányzat – Közérdekű adatok, ügyintézés, döntéshozatal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="no-underline group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="relative overflow-hidden rounded-2xl border-2 shadow-lg transform-gpu translate-y-0 transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 h-full motion-reduce:transition-none"
                  style={{
                    backgroundColor: item.bgColor,
                    borderColor: item.color
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 p-4 flex flex-col items-center text-center">
                    {/* Icon with dynamic color */}
                    <div 
                      className="mb-3 transition-transform duration-300 ease-out"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-4xl font-bold mb-2 transition-colors duration-300"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base text-[#2C3E50] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
       {/* News & Events */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#DC2626] to-[#F59E0B] bg-clip-text text-transparent">
                {t('news.title')}
              </h2>
              <p className="text-2xl text-[#2C3E50]">{t('news.subtitle')}</p>
            </div>
            <Link href="/hirek">
              <Button size="lg" variant="outline" className="gap-3 text-xl px-10 py-7 h-auto border-2 hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all duration-300 shadow-lg">
                {t('news.viewAll')}
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {recentNews.map((news, index) => (
              <div
                key={news.id}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-none h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 text-base px-4 py-2 bg-[#DC2626] shadow-lg">
                      {news.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 text-[#64748B] mb-3">
                      <Calendar className="w-5 h-5" />
                      <time className="text-lg">{news.date}</time>
                    </div>
                    <CardTitle className="text-3xl group-hover:text-[#2C7BA0] transition-colors">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xl mb-6 line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </CardDescription>
                    <Link href={`/hirek/${news.slug}`}>
                      <Button size="lg" className="gap-3 text-lg w-full group-hover:bg-[#DC2626] transition-colors">
                        {t('news.readMore')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Event Calendar Section
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container">
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Gárdony - Eseménynaptár
            </h2>
            <p className="text-2xl text-[#2C3E50]">
              Fedezze fel az összes közelgő eseményt és programot városunkban.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <EventCalendar events={events} locale="hu" startOfWeek="mon" />
          </div>
        </div>
      </section> */}

      {/* Lake Divider
      <div className="relative h-48 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
          alt="Lake Velence Reeds"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div> */}

     {/* Mayor's Welcome Message */}
<section className="py-24 bg-white">
  <div className="container">
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Card className="max-w-6xl mx-auto shadow-2xl border-none overflow-hidden bg-gradient-to-br from-white to-[#E8F4F8] relative">
        
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2C7BA0] via-[#3D8B7C] to-[#2C7BA0]" />

        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] text-white pb-14 pt-14">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Mayor Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[6px] border-white shadow-2xl flex-shrink-0 ring-4 ring-white/30">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/professional-portrait-photograph-of-frie-320e4ad5-20251130135004.jpg"
                alt={t('mayor.name')}
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + Name */}
            <div className="text-center md:text-left">
              <CardTitle className="text-5xl md:text-6xl mb-4 text-white drop-shadow-lg">
                {t('mayor.title')}
              </CardTitle>
              <p className="text-3xl text-white/95 font-medium mb-2">{t('mayor.name')}</p>
              <p className="text-2xl text-white/85">{t('mayor.position')}</p>
            </div>
          </div>
        </CardHeader>

        {/* Message Body */}
        <CardContent className="pt-14 pb-14 px-10 md:px-14">
          <div className="space-y-6 text-2xl leading-relaxed text-[#2C3E50] text-center md:text-left">
            {t('mayor.message')
              .split('\n')
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </CardContent>

      </Card>
    </div>
  </div>
</section>


      {/* About Gárdony */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <Badge className="mb-6 text-xl px-6 py-3 bg-[#2C7BA0]">
                <MapPin className="w-5 h-5 mr-2" />
                Gárdony
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
                {t('city.title')}
              </h2>
              <div className="space-y-6 text-xl leading-relaxed">
                <p className="text-[#2C3E50]">{t('city.text1')}</p>
                <p className="text-[#2C3E50]">{t('city.text2')}</p>
                <p className="text-[#2C3E50]">{t('city.text3')}</p>
              </div>
              <div className="mt-12">
                <Link href="/bemutatkozas">
                  <Button size="lg" className="gap-3 text-xl px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-shadow">
                    {t('city.details')}
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-[#E8F4F8] border-none motion-reduce:transition-none">
                <CardHeader>
                  <Users className="w-16 h-16 text-[#2C7BA0] mb-4" />
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">~10 300</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">{t('city.population')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader>
                  <Calendar className="w-16 h-16 text-[#3D8B7C] mb-4" />
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] bg-clip-text text-transparent">1989</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">{t('city.cityStatus')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader>
                  <MapPin className="w-16 h-16 text-[#2C7BA0] mb-4" />
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">50 km</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">{t('city.fromBudapest')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader>
                  <Waves className="w-16 h-16 text-[#3D8B7C] mb-4" />
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] bg-clip-text text-transparent">26 km²</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">{t('city.lakeArea')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Photo Divider
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
          alt="Lake Velence Beach"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div> */}

     

      

      {/* Office Hours Alert */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />
        <div className="container relative">
          <Alert variant="info" className="text-lg max-w-5xl mx-auto border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8] shadow-xl [&>svg~*]:pl-15">
            <Info className="h-10 w-10 text-[#2C7BA0]" />
            <AlertTitle className="text-3xl mb-3 text-[#2C7BA0]">{t('office.title')}</AlertTitle>
            <AlertDescription className="text-xl text-[#2C3E50] leading-relaxed">
              {t('office.hours')}
            </AlertDescription>
          </Alert>
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