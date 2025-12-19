"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { HeaderSearch } from "./HeaderSearch"
import { searchData } from "@/data/searchData"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const pathname = usePathname()

  const isLandingPage = pathname === "/"

  const mainNavigation = [
    {
      name: "Főoldal",
      href: "/"
    },
    {
      name: "Önkormányzat",
      href: "#",
      submenu: [
        { name: "Közérdekű adatok", href: "/kozerdeku-adatok" },
        { name: "Rendeletek", href: "/rendeletek" },
        { name: "Testületi döntések", href: "/testuleti-jegyzokonyvek" },
        { name: "Pályázatok", href: "/palyazatok" },
        { name: "Ügyintézés", href: "/elerhetoseg-ugyintezes" },
        { name: "Nyomtatványok", href: "/nyomtatvanytar" },
      ]
    },
    {
      name: "Turizmus",
      href: "/turizmus",
      submenu: [
        { name: "Strand", href: "/turizmus#strand" },
        { name: "Szálláshelyek", href: "/turizmus#szallashelyek" },
        { name: "Vendéglátás", href: "/turizmus#vendeglatas" },
        { name: "Attrakcióik", href: "/turizmus#attracio" },
        { name: "Évelnyaló", href: "/turizmus#eventos" },
        { name: "Galériák", href: "/turizmus#galeria" },
        { name: "Térkép", href: "/turizmus#terkep" },
      ]
    },
    {
      name: "Vendéglátás",
      href: "/szallas-vendeglatas",
      submenu: [
        { name: "Szálláshelyek", href: "/szallas-vendeglatas#szallashelyek" },
        { name: "Szállodák", href: "/szallas-vendeglatas#szallodak" },
        { name: "Panziók", href: "/szallas-vendeglatas#panzio" },
        { name: "Kempingek", href: "/szallas-vendeglatas#kempingek" },
        { name: "Vendéglátóhelyek", href: "/szallas-vendeglatas#vendeglatas" },
        { name: "Éttermek", href: "/szallas-vendeglatas#etermi" },
        { name: "Bárok", href: "/szallas-vendeglatas#barok" },
      ]
    },
    {
      name: "Hírek",
      href: "/hirek",
      submenu: [
        { name: "Összes hír", href: "/hirek" },
        { name: "Közlemények", href: "/hirek#kozlemenyek" },
        { name: "Történések", href: "/hirek#tortenések" },
        { name: "Események", href: "/hirek#események" },
      ]
    },
    {
      name: "Kapcsolat",
      href: "/kapcsolat",
      submenu: [
        { name: "Elérhetőség", href: "/elerhetoseg-ugyintezes" },
        { name: "Ügyfélfogadás", href: "/elerhetoseg-ugyintezes#ugyfelfogsas" },
        { name: "Információ", href: "/kapcsolat#info" },
      ]
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-[#2C7BA0] shadow-md">
      <div className="container px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0" aria-label="Gárdony — Főoldal">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/media/logo_removebg.png"
                alt="Gárdony Város logója"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-2xl md:text-3xl font-bold text-[#0F3A52] mb-0">
                Gárdony
              </h1>
              <p className="text-base text-[#2C7BA0] hidden md:block">A Velencei-tó fővárosa</p>
            </div>
          </Link>

          {/* Desktop Search Bar (second row, widens on focus) */}
          <div className="hidden md:flex w-full max-w-2xl lg:max-w-3xl focus-within:max-w-4xl xl:focus-within:max-w-5xl transition-all duration-300 mt-2 mx-auto">
            <HeaderSearch data={searchData} placeholder="Keresés..." />
          </div>

          {/* Desktop Navigation - Hidden on landing page (third row) */}
          <div className="hidden lg:flex w-full items-center gap-1.5 mt-2 flex-wrap justify-start">
            {!isLandingPage && mainNavigation.slice(0, 6).map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href} onClick={(e) => item.submenu && e.preventDefault()} className="no-underline">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-3 py-2 text-base font-medium text-[#2C3E50] hover:text-[#2C7BA0] hover:bg-[#E8F4F8] no-underline flex items-center gap-1.5 group/btn"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4 text-[#2C3E50] group-hover/btn:text-[#2C7BA0] transition-colors" />
                    )}
                  </Button>
                </Link>

                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.slice(0, 7).map((subitem) => (
                      <Link key={subitem.href} href={subitem.href} className="no-underline">
                        <div className="block px-4 py-3 hover:bg-[#E8F4F8] text-[#2C3E50] hover:text-[#2C7BA0] border-b last:border-b-0 no-underline">
                          {subitem.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="lg"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Bezárás' : 'Megnyitás'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Always-on mobile search bar to keep space for search across all pages */}
        <div className="block lg:hidden pb-4 w-full max-w-full transition-all duration-300 focus-within:scale-[1.01]">
          <HeaderSearch data={searchData} placeholder="Keresés..." />
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" role="navigation" aria-label="Mobil navigáció" className="lg:hidden pb-6 space-y-4">
            {/* Mobile Navigation Links - Hidden on landing page */}
            {!isLandingPage && mainNavigation.slice(0, 6).map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-[#2C3E50] hover:text-[#2C7BA0] hover:bg-[#E8F4F8] rounded"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedMenu === item.name ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.submenu && expandedMenu === item.name && (
                  <div className="pl-4 space-y-2 mt-2 bg-[#F8FBFC] rounded">
                    {item.submenu.slice(0, 7).map((subitem) => (
                      <Link key={subitem.href} href={subitem.href} className="no-underline">
                        <button
                          onClick={() => setMobileMenuOpen(false)}
                          className="w-full text-left px-4 py-2 text-base text-[#2C3E50] hover:text-[#2C7BA0] hover:bg-[#E8F4F8] rounded no-underline"
                        >
                          {subitem.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Non-submenu items */}
                {!item.submenu && (
                  <Link href={item.href}>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-left px-4 py-3 text-lg font-medium text-[#2C3E50] hover:text-[#2C7BA0] hover:bg-[#E8F4F8] rounded"
                    >
                      {item.name}
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}