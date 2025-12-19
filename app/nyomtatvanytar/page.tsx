"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ExternalLink, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NyomtatvanytarPage() {
  const formCategories = [
    {
      title: "Lakóhelyi nyilvántartás és címügyek",
      forms: [
        { name: "Kérelem lakás rendeltetési egységeire vonatkozó hatósági bizonyítvány kiadása iránt", year: 2022 },
        { name: "Kérelem lakcímnyilvántartásba való felvételre", year: 2019 },
        { name: "Címigazolási kérelem", year: 2019 }
      ]
    },
    {
      title: "Közigazgatási ügyek",
      forms: [
        { name: "Közterület-használat engedély iránti kérelem", year: 2022 },
        { name: "Fakivágási engedélykérelem/bejelentés formanyomtatvány", year: 2025 },
        { name: "Bejelentés vendéglátóhely üzlettípus besorolásáról", year: 2021 }
      ]
    },
    {
      title: "Szociális és rászoruló gyermekek támogatása",
      forms: [
        { name: "Formanyomtatvány – RGYK jogosultság és hátrányos helyzet megállapítása", year: 2024 },
        { name: "Környezettanulmány – Hátrányos helyzet, halmozottan hátrányos helyzet megállapítása", year: 2021 }
      ]
    },
    {
      title: "Bírósági ügyek – Közigazgatási jogérvényesítés",
      forms: [
        { name: "Űrlap keresetlevél benyújtásához – Jegyző birtokvédelmi ügyben hozott határozat megváltoztatása", year: 2017 },
        { name: "K01 Űrlap – Közigazgatási szerv határozatának bírósági felülvizsgálata iránti keresetlevél benyújtásához", year: 2017 }
      ]
    },
    {
      title: "Egyéb nyomtatványok",
      forms: [
        { name: "Méhtartás bejelentése (ASP-IGAZ-MTB-2021)", year: 2022 }
      ]
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
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C7BA0]/70 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">
            Nyomtatványtár
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Ügyintézéshez szükséges nyomtatványok és formanyomtatványok
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container max-w-6xl">
          {/* Info Card */}
          <Card className="mb-12 border-l-4 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8]">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Search className="w-6 h-6 text-[#2C7BA0]" />
                Nyomtatványok és elektronikus ügyintézés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[#2C3E50] mb-4">
                Az alábbi nyomtatványok az Önkormányzat ügyfélszolgálatán személyesen is elérhető. Az elektronikus ügyintézési lehetőségekről az alábbi linkeken tájékozódhat:
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://epapir.gov.hu/" target="_blank">
                  <Button variant="outline" className="gap-2">
                    ePapír
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://ohp-20.asp.lgov.hu/szolgaltatasok" target="_blank">
                  <Button variant="outline" className="gap-2">
                    Önkormányzati Hivatali Portál
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Form Categories */}
          <div className="space-y-12">
            {formCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
                  {category.title}
                </h2>

                <div className="grid gap-4">
                  {category.forms.map((form, formIdx) => (
                    <Card key={formIdx} className="hover:shadow-md transition-all border-l-4 border-[#2C7BA0]">
                      <CardContent className="pt-6 flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#0F172A]">{form.name}</h3>
                          <Badge className="mt-2 bg-[#F59E0B] text-white">{form.year}</Badge>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 ml-4"
                          asChild
                        >
                          <a href="#" target="_blank">
                            Letöltés
                            <Download className="w-4 h-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-16 bg-[#F1F5F9] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Segítségre van szüksége?</h3>
            <p className="text-lg text-[#2C3E50] mb-6">
              Ha nem találja a szükséges nyomtatványt, vagy további kérdése van az ügyintézésről, forduljon az alábbi elérhetőségeken:
            </p>
            <Link href="/elerhetoseg-ugyintezes">
              <Button className="gap-2 bg-[#2C7BA0] hover:bg-[#1A4D6B]">
                Elérhetőségek és ügyintézés
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
