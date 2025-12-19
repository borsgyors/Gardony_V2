"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MapPin, Phone, Mail, FileText, ExternalLink, Clock, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElerhetosegUgyintezesPage() {
  const officeDays = [
    { day: "Hétfő", hours: "8:00–17:30" },
    { day: "Szerda", hours: "8:00–12:00" },
    { day: "Péntek", hours: "8:00–12:00" }
  ]

  const countryOfficeDays = [
    { day: "Hétfő", hours: "8:00–18:00" },
    { day: "Kedd", hours: "7:30–15:00" },
    { day: "Szerda", hours: "8:00–18:00" },
    { day: "Csütörtök", hours: "7:30–16:00" },
    { day: "Péntek", hours: "8:00–11:00" }
  ]

  const eservices = [
    {
      title: "ePapír",
      description: "Elektronikus papíralapú ügyintézés",
      url: "https://epapir.gov.hu/",
      topics: "Önkormányzati igazgatás, kereskedelmi ügyek"
    },
    {
      title: "Önkormányzati Hivatali Portál (OHP)",
      description: "Online ügyintézési felület",
      url: "https://ohp-20.asp.lgov.hu/szolgaltatasok",
      topics: "Méhtartás bejelentés (ASP-IGAZ-MTB-2021)"
    }
  ]

  const caseTypes = [
    {
      title: "Általános önkormányzati beadvány",
      channel: "Elektronikus (ePapír)",
      deadline: "Pótlás alatt",
      fee: "Pótlás alatt"
    },
    {
      title: "Méhtartás bejelentés (ASP-IGAZ-MTB-2021)",
      channel: "Elektronikus (OHP)",
      deadline: "Pótlás alatt",
      fee: "Pótlás alatt"
    },
    {
      title: "Egyéb helyi ügyek (papíralapú)",
      channel: "Személyesen, ügyfélfogadási időben",
      deadline: "Pótlás alatt",
      fee: "Pótlás alatt"
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
            Elérhetőségek és ügyintézés
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Gárdony Város Önkormányzat és Polgármesteri Hivatal ügyfélfogadása, elérhetőségei és elektronikus ügyintézési lehetőségei
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container max-w-6xl">
          {/* Primary Address Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Polgármesteri Hivatal
            </h2>

            <Card className="border-l-4 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#2C7BA0]" />
                  Cím és nyitvatartás
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Address */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">Irodahelyiség</h3>
                  <p className="text-xl text-[#2C3E50] font-semibold">
                    2483 Gárdony, Szabadság út 20-22.
                  </p>
                </div>

                {/* Ügyfélfogadás */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Ügyfélfogadás
                  </h3>
                  <div className="grid gap-3 md:grid-cols-3">
                    {officeDays.map((day, idx) => (
                      <div key={idx} className="bg-white p-3 rounded border border-[#CBD5E1]">
                        <p className="font-semibold text-[#0F172A]">{day.day}</p>
                        <p className="text-[#2C3E50]">{day.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-4">Elérhetőség</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#2C7BA0]" />
                      <div>
                        <p className="text-sm text-[#64748B]">Telefonszám:</p>
                        <p className="text-lg font-semibold text-[#0F172A]">
                          +36 (22) 570-100 / 224 mellék<br/>
                          +36 (22) 570-136
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#2C7BA0]" />
                      <div>
                        <p className="text-sm text-[#64748B]">E-mail cím:</p>
                        <p className="text-lg font-semibold text-[#0F172A]">
                          <a href="mailto:onkormanyzat@gardony.hu" className="hover:text-[#2C7BA0] transition">
                            onkormanyzat@gardony.hu
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#2C7BA0]" />
                      <div>
                        <p className="text-sm text-[#64748B]">Weboldal:</p>
                        <p className="text-lg font-semibold text-[#0F172A]">www.gardony.hu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Official Gateway Info */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Elektronikus ügyintézés – Hivatali kapu
            </h2>

            <Card className="border-l-4 border-[#3D8B7C]">
              <CardHeader>
                <CardTitle className="text-2xl">Gárdony Város Polgármesteri Hivatal – Hivatali kapu adatok</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="bg-[#F1F5F9] p-4 rounded">
                  <p className="text-base text-[#2C3E50]">
                    <strong>Rövidített név:</strong> GARDONYPH<br/>
                    <strong>Teljes név:</strong> Gárdonyi Polgármesteri Hivatal<br/>
                    <strong>KRID azonosító:</strong> 600139746
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* E-Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Online ügyintézési felületek
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {eservices.map((service, idx) => (
                <a key={idx} href={service.url} target="_blank">
                  <Card className="hover:shadow-lg transition-all h-full cursor-pointer hover:-translate-y-1 border-l-4 border-[#3D8B7C]">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        {service.title}
                        <ExternalLink className="w-5 h-5 text-[#3D8B7C]" />
                      </CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <Badge className="bg-[#3D8B7C] mb-2">Elérhető ügyek</Badge>
                        <p className="text-sm text-[#2C3E50]">{service.topics}</p>
                      </div>
                      <Button className="w-full gap-2 bg-[#3D8B7C] hover:bg-[#2C6B5A]">
                        Megnyitás
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Ügytípusok és elérhetőségük (E-ügyintézés tv.) */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Ügytípusok – elektronikus/papíralapú teljesíthetőség
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {caseTypes.map((item, idx) => (
                <Card key={idx} className="border-l-4 border-[#2C7BA0] bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm">{item.channel}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-[#334155]">
                    <p><strong>Ügyintézési határidő:</strong> {item.deadline}</p>
                    <p><strong>Illeték / díj:</strong> {item.fee}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#475569]">Amint hivatalos határidő- és díjinformáció rendelkezésre áll, frissítjük a fenti táblázatot.</p>
          </div>

          {/* Government Window */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Okmányiroda – Kormányablak
            </h2>

            <Card className="border-l-4 border-[#0EA5E9]">
              <CardHeader>
                <CardTitle className="text-2xl">Gárdony Járási Hivatal Kormányablak Osztály</CardTitle>
                <CardDescription className="text-lg mt-2">2483 Gárdony, Szabadság út 20-22.</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Hours */}
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Ügyfélfogadási idő
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
                    {countryOfficeDays.map((day, idx) => (
                      <div key={idx} className="bg-white p-3 rounded border border-[#CBD5E1] text-center">
                        <p className="font-semibold text-[#0F172A]">{day.day}</p>
                        <p className="text-sm text-[#2C3E50]">{day.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-[#E0F2FE] p-4 rounded">
                  <p className="text-base text-[#2C3E50]">
                    <strong>E-mail:</strong> kormanyablak.gardony@fejer.gov.hu<br/>
                    <strong>Időpontfoglalás:</strong> <a href="https://idopontfoglalo.kh.gov.hu/" target="_blank" className="text-[#0EA5E9] hover:underline">https://idopontfoglalo.kh.gov.hu/</a><br/>
                    vagy a <strong>1818</strong>-as telefonszámon
                  </p>
                </div>

                {/* Available Services */}
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">Intézhető ügyek</h3>
                  <Link href="https://www.gardony.hu/index.php?pg=sub_24">
                    <Button variant="outline" className="gap-2">
                      Teljes ügycsoportok listája
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nyomtatványok link */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Nyomtatványok és dokumentumok
            </h2>
            <Link href="/nyomtatvanytar">
              <Card className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl">Ügyintézéshez szükséges nyomtatványok</CardTitle>
                  <CardDescription>Az önkormányzati ügyek intézéséhez szükséges formanyomtatványok és dokumentumok</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
