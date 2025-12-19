"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, Download, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TestulatiJegyzokonyveKPage() {
  const minutes = [
    {
      date: "2023. június 14.",
      title: "Testületi jegyzőkönyv – 2023.06.14",
      description: "Gárdony Város Önkormányzat Képviselő-testületének 2023. június 14-én tartott nyilvános ülésének jegyzőkönyve",
      link: "https://www.gardony.hu/_user/browser/File/2023_%20j%C3%BAnius/kivonatok%2006_14/Test%C3%BCleti%20jegyz%C5%91k%C3%B6nyv%20-%202023_06_14_.pdf",
      details: "Tartalmazza: határozatok, közbeszerzési döntések, testületi döntések"
    },
    {
      date: "2023. január 18.",
      title: "Testületi jegyzőkönyv – 2023.01.18",
      description: "Gárdony Város Önkormányzat Képviselő-testületének 2023. január 18-án tartott nyilvános ülésének jegyzőkönyve",
      link: "https://www.gardony.hu/_user/browser/File/2023_%20janu%C3%A1r/kivonatok%2001_18_/Test%C3%BCleti%20jegyz%C5%91k%C3%B6nyv%20-%202023_01_18_.pdf",
      details: "Tartalmazza: határozatok, pályázati és közbeszerzési részletek"
    }
  ]

  const electCommittee = {
    title: "Helyi Választási Bizottság – Jegyzőkönyvek",
    description: "Helyi Választási Bizottság 2024. évi üléseiből készített jegyzőkönyvek sorozata",
    status: "Pótlás alatt"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
            alt="Testületi ülés"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C7BA0]/70 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">
            Testületi jegyzőkönyvek
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Gárdony Város Önkormányzat Képviselő-testületének nyilvános üléseiről készített jegyzőkönyvek
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container max-w-6xl">
          {/* Info Alert */}
          <Alert className="mb-12 border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8]">
            <FileText className="h-6 w-6 text-[#2C7BA0]" />
            <AlertTitle className="text-2xl mb-2 text-[#2C7BA0]">Döntéshozatal nyilvánossága</AlertTitle>
            <AlertDescription className="text-lg text-[#2C3E50]">
              Az alábbi jegyzőkönyvek az Infotv. szerinti közzétételnek megfelelően tartalmazzák az Önkormányzat Képviselő-testületének nyilvános üléseiről készített официális dokumentumokat. A jegyzőkönyvek az ülés megtartottságát, napirendjét, szavazások eredményeit és meghozott határozatokat dokumentálják.
            </AlertDescription>
          </Alert>

          {/* Main Minutes */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Testületi ülések jegyzőkönyvei
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {minutes.map((minute, idx) => (
                <a
                  key={idx}
                  href={minute.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1 border-l-4 border-[#2C7BA0]">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-[#2C7BA0]" />
                        <Badge className="bg-[#2C7BA0]">{minute.date}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{minute.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{minute.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-[#2C3E50]">
                        <strong>Tartalom:</strong> {minute.details}
                      </p>
                      <Button className="w-full gap-2 bg-[#2C7BA0] hover:bg-[#1A4D6B]">
                        Letöltés (PDF)
                        <Download className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Meghívók, napirendek (Pótlás alatt) */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Meghívók és napirendek
            </h2>
            <Card className="border-l-4 border-yellow-500 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-2xl">Testületi ülések meghívói és napirendjei</CardTitle>
                <CardDescription className="text-base">A meghívók és napirendek közzététele Pótlás alatt. Amint elérhető, ide kerülnek a letölthető PDF-ek.</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-yellow-600 text-white">Pótlás alatt</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Bizottságok */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Bizottságok
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-yellow-500 bg-yellow-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Bizottsági tagok és hatáskörök</CardTitle>
                    <Badge className="bg-yellow-600 text-white">Pótlás alatt</Badge>
                  </div>
                  <CardDescription className="text-base">A bizottsági tagok listája, hatáskörei és üléseinek jegyzőkönyvei feltöltésre várnak.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-l-4 border-yellow-500 bg-yellow-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Bizottsági jegyzőkönyvek</CardTitle>
                    <Badge className="bg-yellow-600 text-white">Pótlás alatt</Badge>
                  </div>
                  <CardDescription className="text-base">A bizottsági ülések jegyzőkönyvei a közzétételi követelmények szerint ide kerülnek.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Electoral Committee */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Helyi Választási Bizottság
            </h2>
            <Card className="border-l-4 border-yellow-500 bg-yellow-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{electCommittee.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{electCommittee.description}</CardDescription>
                  </div>
                  <Badge className="bg-yellow-600 text-white">{electCommittee.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#2C3E50] mb-4">
                  A Helyi Választási Bizottság üléseiből készített jegyzőkönyvek és döntések listája a gardony.hu oldalon hamarosan elérhető lesz.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Kapcsolódó tartalmak
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/rendeletek" className="no-underline">
                <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-2xl">Rendeletek és határozatok</CardTitle>
                    <CardDescription>A testületi üléseken meghozott rendeletek és határozatok gyűjteménye</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/kozerdeku-adatok" className="no-underline">
                <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-2xl">Közérdekű adatok</CardTitle>
                    <CardDescription>Döntéshozatal rendje és a testület ülésről szóló további információk</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
