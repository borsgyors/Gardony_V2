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
  Facebook,
  Info,
  ArrowRight,
  Home,
  Utensils,
  Heart
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { WaveSection } from "../components/WaveSection"
import { useEffect, useMemo, useState } from "react"
import { getNewsSorted } from "@/data/news"

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
      image: "/media/townhall.jpg"
    },
    {
      id: 2,
      title: "Testületi ülés 2025. április 29.",
      date: "2025-04-25",
      category: "Önkormányzat",
      excerpt: "A Gárdonyi Önkormányzat Képviselő-testülete 2025. április 29-én 17:00 órakor tartja soron következő ülését.",
      slug: "testuleti-ules-2025-aprilis-29",
      image: "/media/testületiülés.jpg"
    },
    {
      id: 3,
      title: "A legszebb konyhakertek program",
      date: "2025-04-23",
      category: "Programok",
      excerpt: "Idén is meghirdetjük a hagyományos 'A legszebb konyhakertek' programot Gárdony településen.",
      slug: "legszebb-konyhakertek-program",
      image: "/media/konyhakert.png"
    },
    {
      id: 4,
      title: "Tavaszi tóparti takarítás",
      date: "2025-04-20",
      category: "Közösség",
      excerpt: "Önkéntesek közösen tisztították meg a Velencei-tó partját a hétvégén.",
      slug: "tavaszi-toparti-takaritas",
      image: "/media/takaritas.jpg"
    },
    {
      id: 5,
      title: "Új kerékpárút szakasz készült el",
      date: "2025-04-18",
      category: "Fejlesztés",
      excerpt: "Átadták a kerékpárút új, biztonságosabb szakaszát a városközpont közelében.",
      slug: "uj-kerekparut-szakasz",
      image: "/media/bikepath.jpg"
    },
    {
      id: 6,
      title: "Kulturális hétvége a főtéren",
      date: "2025-04-15",
      category: "Kultúra",
      excerpt: "Koncertek, kézműves vásár és családi programok töltötték meg a főteret.",
      slug: "kulturalis-hetvege-foter",
      image: "/media/festival.jpg"
    },
    {
      id: 7,
      title: "Megújult a könyvtár olvasóterme",
      date: "2025-04-12",
      category: "Oktatás",
      excerpt: "Kényelmesebb bútorokkal és új digitális eszközökkel várja az olvasókat a könyvtár.",
      slug: "konyvtar-olvasoterem-megujult",
      image: "/media/library.jpg"
    },
    {
      id: 8,
      title: "Véradás a közösségi házban",
      date: "2025-04-10",
      category: "Egészség",
      excerpt: "Sikeres véradási akciót szerveztek, sok új donort is köszönthettünk.",
      slug: "veradas-kozossegi-haz",
      image: "/media/blooddonation.jpg"
    }
  ]

  const menuItems = [
    {
      icon: <img src="/media/medical-bag.svg" alt="Egészség és szociális ellátás" className="w-full h-full object-contain" />,
      title: "Egészség és szociális ellátás",
      href: "/egeszseg-szocialis-ellatas",
      color: "#000000ff",
      bgColor: "#A9C23F"
    },
    {
      icon: <img src="/media/institution.svg" alt="Intézmények és oktatás" className="w-full h-full object-contain" />,
      title: "Intézmények és oktatás",
      href: "/intezmenyek-oktatas",
      color: "#ffffff",
      bgColor: "#007A6C"
    },
    {
      icon: <img src="/media/services.svg" alt="Lakossági szolgáltatások" className="w-full h-full object-contain" />,
      title: "Lakossági szolgáltatások",
      href: "/lakossagi-szolgaltatasok",
      color: "#ffffff",
      bgColor: "#2E4D58"
    },
    {
      icon: <img src="/media/transportation.svg" alt="Közlekedés és utak" className="w-full h-full object-contain" />,
      title: "Közlekedés és utak",
      href: "/kozlekedes-utak",
      color: "#000000ff",
      bgColor: "#F2EEEB"
    },
    {
      icon: <img src="/media/culture.svg" alt="Kultúra és közösség" className="w-full h-full object-contain" />,
      title: "Kultúra és közösség",
      href: "/kultura-kozosseg",
      color: "#000000ff",
      bgColor: "#F2EEEB"
    },
    {
      icon: <img src="/media/greencity.svg" alt="Zöld Gárdony Program" className="w-full h-full object-contain" />,
      title: "Zöld Gárdony Program",
      href: "/zold-gardony-program",
      color: "#ffffff",
      bgColor: "#2E4D58"
    },
    {
      icon: <img src="/media/enterprise.svg" alt="Vállalkozás és gazdaság" className="w-full h-full object-contain" />,
      title: "Vállalkozás és gazdaság",
      href: "/vallalkozas-gazdasag",
      color: "#ffffff",
      bgColor: "#007A6C"
    },
    {
      icon: <img src="/media/report.svg" alt="Hibabejelentés applikáció" className="w-full h-full object-contain" />,
      title: "Hibabejelentés applikáció",
      href: "/hibabejelentes-applikacio",
      color: "#000000ff",
      bgColor: "#A9C23F"
    }
  ]

  const sortedNews = useMemo(() => {
    return getNewsSorted()
  }, [])

  const [itemsPerView, setItemsPerView] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth

      if (width < 640) {
        setItemsPerView(1)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)

    return () => {
      window.removeEventListener("resize", updateItemsPerView)
    }
  }, [])

  useEffect(() => {
    const maxIndex = Math.max(sortedNews.length - itemsPerView, 0)
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [itemsPerView, sortedNews.length])

  const maxIndex = Math.max(sortedNews.length - itemsPerView, 0)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const attractions = [
    {
      title: "Velencei-tó",
      description:
        "Gárdony legnagyobb kincse: fürdés, séták, naplementék és vízi sportok egész évben. A tópart a város mindennapi élettere és legfőbb vonzereje.",
      image: "/media/velenceito.jpg"
    },
    {
      title: "Agárdi Gyógy- és Termálfürdő",
      description:
        "Pihenés és feltöltődés minden korosztálynak. A gyógyvíz, a wellness és a családi élmények egész évben vonzzák a látogatókat.",
      image: "/media/AgardiFurdo.jpg"
    },
    {
      title: "Madárrezervátum",
      description:
        "A természet közelsége csendes sétákra és felfedezésre hív. A nádasok és tanösvények különleges élményt nyújtanak természetkedvelőknek.",
      image: "/media/lud.jpg"
    },
    {
      title: "Gárdonyi Géza Emlékház",
      description:
        "Irodalmi emlékhely és kulturális találkozópont. A múzeum betekintést ad Gárdonyi Géza életébe és munkásságába.",
      image: "/media/GardonyiHaz.jpg"
    },
    {
      title: "Dinnyési Várpark és Skanzen",
      description:
        "Történelmi élménypark makettekkel és szabadtéri kiállításokkal, amely a múlt világát hozza közelebb minden korosztályhoz.",
      image: "/media/varpark.jpg"
    },
    {
      title: "Kerékpárutak",
      description: "A tó körüli kerékpárút az aktív kikapcsolódás egyik legnépszerűbb formája.",
      image: "/media/biciklis.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Lake Background */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-16 sm:pt-20 h-[60vh] min-h-[500px] sm:h-[70vh] sm:min-h-[600px] z-0 hero-bg overflow-hidden">

        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-5xl xl:absolute xl:top-[220px] xl:left-[156px] xl:w-[1020px] xl:h-[197px] xl:text-left xl:items-start">

            <h1 className="font-bold mb-6 drop-shadow-2xl text-[#FFFFFF]">
              A Velencei-tó fővárosa
            </h1>
            <p className="text-body-lg mb-6 text-white/95 drop-shadow-lg max-w-4xl xl:mx-0 mx-auto">
              Természet, nyugalom, közösség – minden napra.            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start items-stretch sm:items-center">
              <Link href="/turizmus" className="w-full sm:w-auto">
                <Button variant="heroPrimary" size="cta" className="w-full sm:w-[193px] font-medium" style={{ borderRadius: '9999px' }}>
                  Fedezd fel
                </Button>
              </Link>
              <Link href="/bemutatkozas" className="w-full sm:w-auto">
                <Button variant="heroAccent" size="cta" className="w-full sm:w-[201px] font-medium" style={{ borderRadius: '9999px' }}>
                  Programok
                </Button>
              </Link>
            </div>
          </div>

        </div>
        {/* Single Wave at Bottom */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[100px]"
        >
          <path d="M0,60 C360,-90 1080,230 1440,60 L1440,240 L0,240 Z" fill="#ffffff" />

        </svg>

        <style>{`
    @keyframes wave {
      0% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
    @keyframes wave-float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    .animate-wave-float {
      animation: wave-float 12s ease-in-out infinite;
    }
  `}</style>
      </section>


     


      {/* Menu System - CSS Grid with 2 columns */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Városi információk
            </h2>
            <p className="text-body-lg text-[#2C3E50] max-w-3xl mx-auto px-4">
              Ügyintézés, szolgáltatások, közösségi és városi információk – gyorsan, átláthatóan, Gárdonyiaknak és látogatóknak egyaránt.            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="no-underline"
              >
                {/* Smooth transform-based micro-interaction: scale only, no layout shift */}
                <div
                  className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border-0 shadow-lg h-full aspect-square flex items-center justify-center transform-gpu transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:scale-100 focus-visible:scale-100 active:scale-100"
                  style={{
                    backgroundColor: item.bgColor,
                    willChange: 'transform'
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center h-full w-full">
                    {/* Icon with dynamic color */}
                    <div
                      className="mb-2 sm:mb-3"
                      style={{ color: item.color }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[18px] lg:text-[22px] font-bold mb-1 sm:mb-1.5 md:mb-2 leading-tight"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section with Waves */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#B3D7D366] pt-[40px] pb-[40px] overflow-hidden">

        {/* Top wave */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,-40 1080,120 1440,40 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 sm:pt-24 md:pt-32 sm:pb-24 md:pb-32">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6 md:gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#232B2E] leading-tight">
                Legfrissebb híreink
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000]">Fontos hírek és aktuális információk a város életéből.</p>
            </div>

          </div>

          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#2E4D58] bg-white text-[#2E4D58] flex items-center justify-center"
              aria-label="Korábbi hírek"
              disabled={currentIndex === 0}
              style={currentIndex === 0 ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>

            <div className="overflow-hidden flex-1">
              <div
                className="flex -mx-[12.5px]"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                  transition: "transform 300ms ease"
                }}
              >
                {sortedNews.map((news) => (
                  <div
                    key={news.id}
                    className="flex-shrink-0 box-border px-[12.5px]"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <Card className="h-full border-none shadow-lg rounded-xl overflow-hidden bg-white">
                      <div className="relative h-[223px] overflow-hidden flex-shrink-0">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2 bg-[#2E4D58] shadow-lg rounded-full" style={{ borderRadius: '9999px' }}>
                          {news.category}
                        </Badge>
                      </div>

                      <CardHeader className="flex-grow px-4 pt-4 pb-0 space-y-2">
                        <div className="flex items-center gap-2 text-[#64748B]">
                          <Calendar className="w-6 h-6" />
                          <time className="text-[14px] leading-6 font-normal">{news.date}</time>
                        </div>
                        <CardTitle className="text-xl leading-tight m-0">
                          <h5 className="m-0">{news.title}</h5>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="px-4 pb-4 pt-[15px] space-y-5">
                        <CardDescription className="w-[328px] text-base leading-6 font-normal line-clamp-3 m-0">
                          {news.excerpt}
                        </CardDescription>
                        <div className="flex justify-end">
                          <Link
                            href={`/hirek/${news.slug}`}
                            className="pt-10 flex items-center gap-2 text-[14px] leading-5 font-medium tracking-[0.1px] text-[#007A6C] no-underline"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            Tovább olvasom
                            <img src="/media/arrow-right.svg" alt="" className="w-[10.56px] h-[10.56px]" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#2E4D58] bg-white text-[#2E4D58] flex items-center justify-center"
              aria-label="Régebbi hírek"
              disabled={currentIndex >= maxIndex}
              style={currentIndex >= maxIndex ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/hirek" className="w-full md:w-auto">
              <Button
                className="flex items-center justify-center gap-2 w-[400px] text-[24px] font-bold tracking-[0px] text-[#007A6C] px-0 py-0"
                style={{ borderRadius: '9999px', height: '60px' }}
              >
                Elolvasom az összes hírt
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        {/* Bottom wave */}
        <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,-40 1080,120 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>


      {/* Mayor's Welcome Message */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-10 xl:gap-12">
              <div className="flex justify-center md:justify-start w-full md:w-auto">
                <div className="w-full max-w-[262px] h-[406px] rounded-xl overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src="/media/EotvosPalArpad.png" alt="Gárdony polgármestere"
                    width={262}
                    height={406}
                    className="w-full h-full object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 262px"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-[#007A6C] mb-2">Polgármester köszöntője</h3>
                <h4 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-4">Kedves Látogató!</h4>
                <div className="font-[Inter] text-[16px] leading-6 font-normal text-[#1F2937] space-y-4">
                  <p>Sok szeretettel köszöntöm Önt Gárdony Város Önkormányzatának honlapján!</p>
                  <p>
                    Városunk vonzereje gyönyörű fekvésében, forrásaink gyógyhatásában, a környéken termő zamatos, jó boraiban, de
                    legfőképpen az itt élő emberek vendégszeretetében rejlik. Történelmi, kulturális hagyományaink, évtizedekre
                    visszatekintő rendezvényeink és természeti kincseink minden évszakban várják az itt élőket és a hozzánk
                    látogatókat.
                  </p>
                  <p>A személyes találkozás reményében kívánok virtuális barangolásához hasznos és kellemes időtöltést!</p>
                  <div className="space-y-1">
                    <p>Eötvös Pál Árpád</p>
                    <p>polgármester</p>
                  </div>
                </div>

                <div className="mt-10 sm:mt-8">
                  <Link href="/bemutatkozas" className="w-full sm:w-auto">
                    <Button
                      className="flex items-center justify-center w-full sm:w-[330px] text-[18px] font-bold tracking-[0px] text-[#007A6C] px-0 py-0"
                      style={{ borderRadius: '9999px', height: '45px' }}
                    >
                      Elolvasom a teljes köszöntőt
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Látnivalók és élmények */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-[#F7F6F2]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold font-[Inter] text-[#1F2937]">
              Látnivalók és élmények
            </h2>
            <p className="text-base sm:text-lg text-[#4B5563] leading-7">
              Tópart, természet, fürdők és nyugodt séták – Gárdony egyszerre pihentet és feltölt. Ismerd meg a város kedvelt helyeit!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((item) => (
              <article key={item.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E7EB] flex flex-col h-full">
                <div className="relative w-full h-[210px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <h4 className="text-xl font-semibold font-[Inter] text-[#111827]">{item.title}</h4>
                  <p className="text-sm sm:text-base leading-6 text-[#4B5563]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}