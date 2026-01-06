"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  const footerLinks = [
    { label: "Adatvédelem", href: "/adatvedelem" },
    { label: "Süti tájékoztató", href: "/cookie-tajekoztato" },
    { label: "Impresszum", href: "/impresszum" },
    { label: "Panaszkezelés", href: "/panaszkezeles" },
    { label: "Súgó", href: "/sugo" },
    { label: "Akadálymentesítés", href: "/akadalymentesites" }
  ]

  return (
    <footer className="mt-0 overflow-x-hidden">
      {/* Highlight section */}
      <section className="relative h-[240px] sm:h-[260px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <Image
          src="/media/footervelenceito.png"
          alt="Velencei-tó légi fotó"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/45" />

        <div className="relative h-full flex items-center">
          <div className="container max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-6">
            <div className="text-left text-white space-y-2">
              <h2 className="text-3xl sm:text-[34px] font-semibold font-[Inter] leading-tight text-white">Gárdony most</h2>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl font-[Inter] leading-relaxed">
                Friss tartalmak a város hivatalos Facebook-oldaláról.
              </p>
            </div>

            <div className="flex-shrink-0 self-start sm:self-center">
              <a
                href="https://www.facebook.com/gardonyonkormanyzat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-[#007A6C] shadow-md transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] no-underline"
              >
                <Facebook className="w-6 h-6" />
                <span className="text-sm sm:text-base font-semibold font-[Inter]">Kövess minket Facebookon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Curved divider */}
        <svg className="absolute -bottom-[1px] left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,50 C320,110 1120,-10 1440,50 L1440,120 L0,120 Z" fill="#DFEDEA" />
        </svg>
      </section>

      {/* Main footer content */}
      <section className="relative bg-[#DFEDEA] pt-12 pb-8 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* City info */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold font-[Inter] text-[#0B3A2F]">Címer + logó</h3>
              <div className="flex items-center gap-3">
                <img src="/media/logo_whitebg.png" alt="Gárdony logó" className="w-12 h-12 object-contain" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B3A2F] font-[Inter]">Gárdony</p>
                  <p className="text-xs sm:text-sm text-[#32423C] font-[Inter] leading-5">Gárdony hivatalos önkormányzati honlapja – információk, ügyintézés, hírek és programok egy helyen.</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold font-[Inter] text-[#0B3A2F]">Főoldal</h3>
              <nav className="flex flex-col gap-2 text-sm text-[#32423C] font-[Inter]">
                <Link href="/ugyintezes" className="no-underline hover:text-[#007A6C]">Ügyintézés</Link>
                <Link href="/hirek" className="no-underline hover:text-[#007A6C]">Hírek</Link>
                <Link href="/bemutatkozas" className="no-underline hover:text-[#007A6C]">Programok</Link>
                <Link href="/bemutatkozas" className="no-underline hover:text-[#007A6C]">Városunk</Link>
                <Link href="/onkormanyzat" className="no-underline hover:text-[#007A6C]">Önkormányzat</Link>
                <Link href="/turizmus" className="no-underline hover:text-[#007A6C]">Turizmus</Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold font-[Inter] text-[#0B3A2F]">Kapcsolat</h3>
              <address className="not-italic flex flex-col gap-3 text-sm text-[#32423C] font-[Inter]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#007A6C] mt-0.5" />
                  <span>2483 Gárdony, Szabadság út 20-22</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#007A6C] mt-0.5" />
                  <a href="tel:+3622355370" className="no-underline hover:text-[#007A6C]">+36 22 355 370</a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#007A6C] mt-0.5" />
                  <a href="mailto:onkormanyzat@gardony.hu" className="no-underline hover:text-[#007A6C]">onkormanyzat@gardony.hu</a>
                </div>
              </address>
            </div>

            {/* Office hours */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold font-[Inter] text-[#0B3A2F]">Ügyfélfogadás</h3>
              <ul className="space-y-2 text-sm text-[#32423C] font-[Inter]">
                <li>Hétfő: 8:00-12:00, 13:00-17:30</li>
                <li>Szerda: 8:00-12:00</li>
                <li>Péntek: 8:00-12:00</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal bar */}
      <section className="relative bg-[#007A6C] text-white w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="container max-w-6xl px-4 sm:px-6 h-12 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm font-[Inter]">© 2025 Gárdony Város Önkormányzata. Minden jog fenntartva.</p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-[Inter]">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="no-underline hover:text-[#A7F3D0]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}