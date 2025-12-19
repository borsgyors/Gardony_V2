"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, Download, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RendereletekPage() {
  const ordinances = [
    {
      year: 2025,
      title: "2025. évi rendeletek",
      description: "Gárdony Város Önkormányzat Képviselő-testületének 2025. évben hozott rendeleteinek gyűjteménye"
    },
    {
      year: 2024,
      title: "2024. évi rendeletek",
      description: "Gárdony Város Önkormányzat Képviselő-testületének 2024. évben hozott rendeleteinek gyűjteménye"
    },
    {
      year: 2023,
      title: "2023. évi rendeletek",
      description: "Gárdony Város Önkormányzat Képviselő-testületének 2023. évben hozott rendeleteinek gyűjteménye"
    }
  ]

  const specialRegulations = [
    {
      title: "Gárdony Város Építési Szabályzata (GÉSZ)",
      description: "Szabályozási terv – 2025. április 26.",
      link: "https://www.gardony.hu/_user/browser/File/2025_%20m%C3%A1jus/Szabalyozasi_terv_20250426.zip",
      fileType: "ZIP"
    },
    {
      title: "3/2009 (I. 28) számú rendelet",
      description: "Byggési szabályozást tartalmazó rendelet",
      link: "https://www.gardony.hu/index.php?pg=_rendeletek&ev=2009",
      fileType: "Link"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
            alt="Testületi ülés"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C7BA0]/70 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">
            Rendeletek
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Gárdony Város Önkormányzat Képviselő-testületének határozatai és rendeleteinek teljes gyűjteménye
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container max-w-6xl">
          {/* Info Alert */}
          <Alert className="mb-12 border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8]">
            <FileText className="h-6 w-6 text-[#2C7BA0]" />
            <AlertTitle className="text-2xl mb-2 text-[#2C7BA0]">Rendeletlista</AlertTitle>
            <AlertDescription className="text-lg text-[#2C3E50]">
              Az alábbi linkeken elérhető Gárdony Város Önkormányzatának hatályos rendeleteinek jegyzéke. A gardony.hu rendelettárban a hatályosság és a kihirdetés dátuma szerepel; a hatályon kívül helyezett rendeletek listája jelenleg Pótlás alatt.
            </AlertDescription>
          </Alert>

          {/* Ordinances by Year */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Rendeletek évenkénti bontásban
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ordinances.map((ord, idx) => (
                <a
                  key={idx}
                  href={`https://www.gardony.hu/index.php?pg=_rendeletek&ev=${ord.year}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1">
                    <CardHeader>
                      <Badge className="w-fit mb-3 bg-[#2C7BA0]">{ord.year}</Badge>
                      <CardTitle className="text-2xl">{ord.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{ord.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full gap-2 bg-[#2C7BA0] hover:bg-[#1A4D6B]">
                        Megtekintés
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Special Regulations */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Kiemelten fontos rendeletek és szervezeti dokumentumok
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {specialRegulations.map((reg, idx) => (
                <a
                  key={idx}
                  href={reg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1 border-l-4 border-[#3D8B7C]">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{reg.title}</CardTitle>
                        <Badge className="bg-[#3D8B7C]">{reg.fileType}</Badge>
                      </div>
                      <CardDescription className="text-base mt-2">{reg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full gap-2 bg-[#3D8B7C] hover:bg-[#2C6B5A]">
                        Letöltés / Megtekintés
                        <Download className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Jogalkotási program */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Jogalkotási programok és rendelet-tervezetek
            </h2>
            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-2xl">Rendelet-tervezetek és konzultáció</CardTitle>
                <CardDescription className="text-base">
                  Az Infotv. szerinti jogalkotási program, valamint a véleményezésre kibocsátott rendelet-tervezetek az alábbi linkről érhetők el:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/kozerdeku-adatok" className="no-underline">
                  <Button className="gap-2">
                    Közérdekű adatok oldalra
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Hatályon kívül helyezett rendeletek / kihirdetés információ */}
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Hatályon kívül helyezett rendeletek és kihirdetés
            </h2>
            <Card className="border-l-4 border-yellow-500 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl">Hatályon kívül helyezett rendeletek</CardTitle>
                <CardDescription className="text-base">
                  A hatályon kívül helyezett rendeletek jegyzéke és a kihirdetés dátumai jelenleg nem állnak rendelkezésre. A közzététel Pótlás alatt.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-yellow-600 text-white">Pótlás alatt</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
