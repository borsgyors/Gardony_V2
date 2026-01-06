"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUp, ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { CommandPalette } from "@/components/search/CommandPalette"
import { commandPaletteData } from "@/data/commandPaletteData"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  // Always reset scroll on route change so the navbar stays anchored up top.
  useEffect(() => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

  // Scroll listener: sticky toggles immediately; back-to-top is lightly debounced to avoid jitter.
  useEffect(() => {
    if (typeof window === "undefined") return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          // Smooth immediate toggle for sticky state
          setIsSticky(currentY > 10)
          setShowBackToTop(currentY > 300)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Measure header height and expose it for spacer to prevent layout shift when sticky.
  useEffect(() => {
    if (typeof window === "undefined") return
    const el = headerRef.current
    if (!el) return

    const updateSize = () => {
      const nextHeight = el.getBoundingClientRect().height
      setHeaderHeight(nextHeight)
    }

    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(updateSize) : null
    resizeObserver?.observe(el)
    updateSize()

    const onResize = () => updateSize()
    window.addEventListener("resize", onResize)
    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const mainNavigation = [
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
    <>
      {/* Spacer: always present, smoothly adjusts height to prevent layout shift */}
      {/* When scrolled, spacer expands to header height; when at top, it collapses to 0 */}
      <div
        style={{
          height: isSticky ? `${headerHeight}px` : '0px',
          transition: 'height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        aria-hidden="true"
      />

      <header
        ref={headerRef}
        className={`z-50 w-full bg-white transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isSticky ? 'fixed top-0 inset-x-0 shadow-lg' : 'relative shadow-md'
        }`}
        style={{
          willChange: 'transform, box-shadow',
        }}
      >
      <div className="max-w-[1440px] mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Prosto One */}
          <Link
            href="/"
            className="no-underline flex-shrink-0"
            aria-label="Gárdony — Főoldal"
            style={{
              width: '211px',
              height: '34px',
            }}
          >
            <h1
              style={{
                fontFamily: "'Prosto One', sans-serif",
                fontWeight: 400,
                fontSize: '36px',
                lineHeight: '34px',
                color: '#0F7464',
                margin: 0,
              }}
            >
              GÁRDONY
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  onClick={(e) => item.submenu && e.preventDefault()}
                  className="no-underline text-base font-medium text-[#2C3E50] hover:text-[#007A6C] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 -ml-4 top-full pt-3 w-56 bg-white shadow-lg rounded-md opacity-0 pointer-events-none invisible transition-opacity duration-150 ease-out group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto z-50">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href} className="no-underline">
                        <div className="block px-4 py-3 hover:bg-[#E8F4F8] text-[#2C3E50] hover:text-[#007A6C] border-b last:border-b-0 text-sm">
                          {subitem.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-3 h-[60px]">
            {/* Bug Report */}
            <Link href="/hibabejelentes-applikacio" className="no-underline" aria-label="Hibabejelentés">
              <div className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity">
                <Image
                  src="/media/bugreport.svg"
                  alt="Hibabejelentés"
                  width={25}
                  height={25}
                />
              </div>
            </Link>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/gardonyvaros"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              aria-label="Facebook"
            >
              <div className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity">
                <Image
                  src="/media/facebook.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </div>
            </a>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="h-full aspect-square flex items-center justify-center rounded bg-[#007A6C] hover:bg-[#006858] transition-colors"
              aria-label="Keresés"
            >
              <Image
                src="/media/search.svg"
                alt="Keresés"
                width={22}
                height={22}
              />
            </button>
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" role="navigation" aria-label="Mobil navigáció" className="lg:hidden pb-6 space-y-4">
            {/* Mobile Navigation Links */}
            {mainNavigation.map((item) => (
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

      <CommandPalette
        data={commandPaletteData}
        open={searchOpen}
        onOpenChange={setSearchOpen}
        hideTrigger
        triggerLabel="Keresés..."
      />
      </header>

      {/* Back to Top Button - Outside header for proper positioning */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-[70] h-14 w-14 rounded-full bg-[#007A6C] text-white shadow-xl hover:shadow-2xl hover:bg-[#006858] active:scale-95 transition-all duration-300 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7BA0]"
          aria-label="Vissza a tetejére"
          style={{
            animation: 'fadeInUp 0.3s ease-out',
          }}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}