import Link from "next/link"
import { Metadata } from "next"
import Hero from "@/components/szallas-vendeglatas/Hero"
import VendorCard from "@/components/szallas-vendeglatas/VendorCard"
import BookingSection from "@/components/szallas-vendeglatas/BookingSection"
import VendorCategory from "@/components/szallas-vendeglatas/VendorCategory"

export const metadata: Metadata = {
  title: 'Szállás és Vendéglátás — Gárdony',
  description: 'Éttermek, kávézók, vendéglátóhelyek és szállásfoglalási lehetőségek Gárdonyban a Velencei-tó mellett.',
}

type Vendor = {
  name: string
  category: string
  url: string
  description: string
}

const vendors: Vendor[] = [
  {
    name: "Fehér Fregatt Vendéglő",
    category: "étterem",
    url: "https://xn--grdony-pta.cylex.hu/",
    description: "Klasszikus magyar fogások és házias ízek Gárdony központjában."
  },
  {
    name: "Gulyás Csárda",
    category: "étterem",
    url: "https://velenceito.info/vendeglatas/ettermek/",
    description: "Autentikus magyar csárdaélmény a Velencei-tó közelében."
  },
  {
    name: "Ponty Étterem",
    category: "étterem",
    url: "https://xn--grdony-pta.cylex.hu/",
    description: "Halételek és hagyományos magyar fogások."
  },
  {
    name: "Dolce e Salato Kávézó és Cukrászda",
    category: "kávézó",
    url: "https://xn--grdony-pta.cylex.hu/",
    description: "Hangulatos kávézó olasz süteményekkel."
  },
  {
    name: "Egészségedre! Reggeliző és Kávézó",
    category: "kávézó",
    url: "https://xn--grdony-pta.cylex.hu/",
    description: "Reggeli és brunch a város központjában."
  },
  {
    name: "W Burger & Pie",
    category: "gyors étkezés",
    url: "https://xn--grdony-pta.cylex.hu/",
    description: "Hamburger, lángos és street food klasszikusok."
  },
  {
    name: "Vibe chill & food",
    category: "gyors étkezés",
    url: "https://xn--grdony-pta.cylex.hu/",
    description: "Chill hangulat és könnyű fogások."
  }
]

export default function AccommodationPage() {
  const categories = Array.from(new Set(vendors.map(v => v.category)))

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">Vendéglátóhelyek</h2>
            <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">Válogatás helyi éttermekből, kávézókból és street food helyekből — kényelmesen böngészhető kártyákkal.</p>
          </div>

          <div className="flex gap-4 items-center overflow-x-auto pb-6">
            {categories.map((cat) => (
              <VendorCategory key={cat} category={cat} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((v, idx) => (
              <VendorCard key={idx} vendor={v} />
            ))}
          </div>
        </div>
      </section>

      <BookingSection />

      <section className="py-20">
        <div className="container text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Fedezd fel Gárdony teljes vendéglátó- és szálláskínálatát!</h3>
          <p className="text-lg text-[#475569] mb-8 max-w-2xl mx-auto">Keress tovább, foglalj szállást, vagy böngéssz a helyi gasztronómiai ajánlatok között — Gárdony minden évszakban vár.</p>
          <Link href="/turizmus" className="inline-flex items-center gap-3 bg-[#2C7BA0] hover:bg-[#1A4D6B] text-white px-8 py-4 rounded-lg text-xl shadow-lg no-underline transition-colors duration-300">
            Tovább a teljes listához
          </Link>
        </div>
      </section>
    </div>
  )
}
