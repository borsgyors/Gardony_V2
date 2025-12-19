"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, AlertTriangle, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KozerdekuAdatokPage() {
  const sections = [
    {
      title: "I. Szervezeti, személyzeti adatok",
      items: [
        { label: "Önkormányzat neve, székhelye, elérhetősége", detail: "Gárdony Város Önkormányzat, 2483 Gárdony, Szabadság út 20-22., tel.: +36 (22) 570-100/224, e-mail: onkormanyzat@gardony.hu", status: "elérhető", link: "/elerhetoseg-ugyintezes" },
        { label: "Szervezeti felépítés (organogram)", status: "Pótlás alatt" },
        { label: "Polgármester, alpolgármester, jegyző", status: "Pótlás alatt" },
        { label: "Képviselő-testület tagjai", status: "Pótlás alatt" },
        { label: "Hivatali egységek és elérhetőségeik", status: "Pótlás alatt" },
        { label: "Felügyelt költségvetési szervek", status: "Pótlás alatt" },
        { label: "Önkormányzati tulajdonú gazdálkodó szervezetek", status: "Pótlás alatt" },
        { label: "Közalapítványok", status: "Pótlás alatt" },
        { label: "Vezetők illetménye, juttatásai", status: "Pótlás alatt" }
      ]
    },
    {
      title: "II. Tevékenységre, működésre vonatkozó adatok",
      items: [
        { label: "Feladat- és hatáskörök", status: "Pótlás alatt" },
        { label: "SZMSZ (Szervezeti és Működési Szabályzat)", status: "Pótlás alatt" },
        { label: "Ügyintézési rend, ügyfélfogadás", status: "elérhető", link: "/elerhetoseg-ugyintezes", detail: "Ügyfélfogadás: H 8:00–17:30, Sze 8:00–12:00, P 8:00–12:00" },
        { label: "Közszolgáltatások", status: "Pótlás alatt" },
        { label: "Nyilvános kiadványok", status: "Pótlás alatt" },
        { label: "Testületi ülések rendje", status: "elérhető", link: "/testuleti-jegyzokonyvek" },
        { label: "Testületi és bizottsági jegyzőkönyvek", status: "részben elérhető", link: "/testuleti-jegyzokonyvek", detail: "2023.01.18 és 2023.06.14 jegyzőkönyvek elérhetők" },
        { label: "Közmeghallgatások", status: "Pótlás alatt" },
        { label: "Jogalkotási tervezetek, rendeletek", status: "elérhető", link: "/rendeletek" },
        { label: "Pályázatok", status: "elérhető", link: "/palyazatok" },
        { label: "Hirdetmények", status: "Pótlás alatt" },
        { label: "Közérdekű adatok igénylése", status: "elérhető", link: "/elerhetoseg-ugyintezes" }
      ]
    },
    {
      title: "III. Gazdálkodási adatok",
      items: [
        { label: "Éves költségvetés (aktuális)", status: "Pótlás alatt" },
        { label: "Költségvetés archív évekre", status: "Pótlás alatt" },
        { label: "Zárszámadás", status: "Pótlás alatt" },
        { label: "Szerződések (nettó 5 millió Ft felett)", status: "Pótlás alatt" },
        { label: "Támogatások", status: "Pótlás alatt" },
        { label: "Közbeszerzések", status: "Pótlás alatt" },
        { label: "Vagyonnyilatkozatok (ha releváns)", status: "Pótlás alatt" },
        { label: "EU által támogatott fejlesztések", status: "elérhető", link: "https://www.gardony.hu/projektek", external: true },
        { label: "Működés törvényessége, ellenőrzések", status: "Pótlás alatt" }
      ]
    }
  ]

  const missingDocs = [
    "Adatkezelési tájékoztató (GDPR) – Pótlás alatt",
    "Cookie tájékoztató – Pótlás alatt",
    "Akadálymentesítési nyilatkozat – Pótlás alatt",
    "SZMSZ letölthető PDF – Pótlás alatt",
    "Hatásköri jegyzék – Pótlás alatt",
    "Közbeszerzések teljes listája – Pótlás alatt"
  ]

  const resources = [
    {
      title: "Nyomtatványtár",
      description: "Ügyintézéshez szükséges nyomtatványok és formanyomtatványok",
      href: "/nyomtatvanytar"
    },
    {
      title: "Építési szabályzat (GÉSZ)",
      description: "Szabályozási terv – 2025. április 26.",
      href: "https://www.gardony.hu/_user/browser/File/2025_%20m%C3%A1jus/Szabalyozasi_terv_20250426.zip",
      external: true
    },
    {
      title: "TOP Plusz program",
      description: "Gárdony fenntartható városfejlesztési stratégiája",
      href: "https://www.gardony.hu/_user/browser/File/2024_%20m%C3%A1jus/TOP_Plusz_1_3_1.pdf",
      external: true
    },
    {
      title: "Projektek",
      description: "Települési klímastratégia, Kisfaludy 2030, valamint egyéb fejlesztések",
      href: "https://www.gardony.hu/projektek",
      external: true
    },
    {
      title: "Települési értéktár",
      description: "Gárdony közösségi és kulturális értékei",
      href: "https://gardonykultura.hu/telepulesi-ertektar/",
      external: true
    },
    {
      title: "Rendelettár",
      description: "Helyi önkormányzati rendeletek teljes gyűjteménye",
      href: "/rendeletek"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
            alt="Polgármesteri Hivatal"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C7BA0]/70 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">
            Közérdekű adatok
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Az Infotv. (2011. évi CXII. törvény) szerinti kötelező közérdekű adatok
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container max-w-6xl">
          {/* Info Section */}
          <Alert className="mb-12 border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8]">
            <FileText className="h-6 w-6 text-[#2C7BA0]" />
            <AlertTitle className="text-2xl mb-2 text-[#2C7BA0]">Információ közérdekű adatok igényléséhez</AlertTitle>
            <AlertDescription className="text-lg text-[#2C3E50]">
              A közérdekű adatokra irányuló igényt az alábbi elérhetőségeken nyújthatja be: <br/>
              <strong>E-mail:</strong> onkormanyzat@gardony.hu | <strong>Telefon:</strong> +36 (22) 570-100/224
            </AlertDescription>
          </Alert>

          {/* Main Sections */}
          <div className="space-y-16 mb-24">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.items.map((item, itemIdx) => {
                    const status = item.status || ""
                    const statusClass = status.includes("Pótlás") || status.includes("Nem áll")
                      ? "bg-yellow-500"
                      : status.includes("részben")
                        ? "bg-amber-500"
                        : status
                          ? "bg-green-600"
                          : "bg-gray-400"

                    const content = (
                      <Card className="hover:shadow-lg transition-all h-full border-l-4 border-[#2C7BA0]">
                        <CardContent className="pt-6 space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-lg font-medium text-[#0F172A] leading-snug">{item.label}</span>
                            {status && (
                              <Badge className={`${statusClass} text-white`}>{status}</Badge>
                            )}
                          </div>
                          {'detail' in item && item.detail && (
                            <p className="text-sm text-red-600 leading-relaxed">{item.detail}</p>
                          )}
                          {item.link && !('external' in item && item.external) && (
                            <div className="pt-1">
                              <Button variant="outline" size="sm" className="gap-2">
                                Megnyitás
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                          {'external' in item && item.external && (
                            <div className="pt-1 flex items-center gap-2 text-sm text-[#2C7BA0]">
                              Külső hivatkozás
                              <ExternalLink className="w-4 h-4" />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )

                    if (item.link && !('external' in item && item.external)) {
                      return (
                        <Link key={itemIdx} href={item.link} className="no-underline">
                          {content}
                        </Link>
                      )
                    }

                    if (item.link && 'external' in item && item.external) {
                      return (
                        <a
                          key={itemIdx}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline"
                        >
                          {content}
                        </a>
                      )
                    }

                    return (
                      <div key={itemIdx}>
                        {content}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Fontos dokumentumok és linkek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, idx) => {
                const card = (
                  <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        {resource.title}
                        {resource.external && <ExternalLink className="w-5 h-5 text-[#2C7BA0]" />}
                      </CardTitle>
                      <CardDescription className="text-base text-red-600">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full gap-2 bg-[#2C7BA0] hover:bg-[#1A4D6B]">
                        Megnyitás
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );

                if (resource.external) {
                  return (
                    <a key={idx} href={resource.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                      {card}
                    </a>
                  );
                }

                return (
                  <Link key={idx} href={resource.href} className="no-underline">
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Missing Documents Alert */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Pótlás alatt álló, kötelező jogi dokumentumok</h3>
                <ul className="space-y-2">
                  {missingDocs.map((doc, idx) => (
                    <li key={idx} className="text-lg text-yellow-800 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full"></span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
