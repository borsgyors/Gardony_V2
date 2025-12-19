"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, Download, ExternalLink, Clock, Users, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PalyazatokPage() {
  const activeCall = {
    title: "Ügyvezető igazgatói pályázat",
    companies: ["Gárdonyi Városüzemeltetési Kft.", "Agárdi Zöld Kft."],
    deadline: "2025. december 1. 10:00",
    publishDate: "2025. október 31.",
    positions: "Közös ügyvezető igazgatói tisztség",
    summary: [
      "Gazdálkodó szervezetek vezetésére kiírt pályázat",
      "Gárdonyi Városüzemeltetési Kft.: strandok, kemping, parkolók üzemeltetése",
      "Agárdi Zöld Kft.: zöldterület-kezelés, településrendezés, közúti áruszállítás",
      "Jogviszony: határozatlan; Próbaidő: 6 hónap",
      "Munkakör betölthetőségének időpontja: 2026. január 1."
    ],
    requirements: [
      "Büntetlenelőélet",
      "Középfokú végzettség",
      "Vezetői tapasztalat"
    ],
    submissionDetails: "Pályázatok: 1 eredeti + 2 másolat, zárt borítékban, postai úton vagy személyesen; Gárdony Város Polgármesteri Hivatal (2483 Gárdony, Szabadság út 20-22.)",
    contact: "titkarsag@gardony.hu"
  }

  const pastCalls = [
    {
      title: "Pályázatok (Archívum)",
      description: "Korábbi pályázati felhívások az önkormányzat honlapján archiválva"
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
            Pályázatok
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Gárdony Város Önkormányzat pályázati felhívásai
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F0F9FC] to-white">
        <div className="container max-w-6xl">
          {/* Active Calls */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Aktuális pályázati felhívások
            </h2>
            
            <Card className="border-l-4 border-red-500 bg-gradient-to-br from-white to-red-50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <CardTitle className="text-3xl">{activeCall.title}</CardTitle>
                    <Badge className="mt-3 bg-red-600">{activeCall.positions}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Companies */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Érintett szervezetek
                  </h3>
                  <ul className="space-y-2 ml-7">
                    {activeCall.companies.map((company, idx) => (
                      <li key={idx} className="text-lg text-[#2C3E50]">
                        • {company}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Dates */}
                <div className="bg-white rounded-lg p-4 border border-[#CBD5E1]">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Fontos dátumok
                  </h3>
                  <div className="space-y-2 ml-7 text-lg text-[#2C3E50]">
                    <p><strong>Közzétételezés:</strong> {activeCall.publishDate}</p>
                    <p><strong>Pályázati határidő:</strong> {activeCall.deadline}</p>
                    <p><strong>Munkakör betölthetősége:</strong> {activeCall.requirements[2]}</p>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">Pályázat rövid ismertetése</h3>
                  <ul className="space-y-2 ml-7">
                    {activeCall.summary.map((point, idx) => (
                      <li key={idx} className="text-base text-[#2C3E50]">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-[#F1F5F9] rounded-lg p-4">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Pályázati feltételek
                  </h3>
                  <ul className="space-y-2 ml-7">
                    {activeCall.requirements.map((req, idx) => (
                      <li key={idx} className="text-base text-[#2C3E50]">
                        ✓ {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submission */}
                <div className="bg-white border border-[#CBD5E1] rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Pályázat benyújtása</h3>
                  <p className="text-base mb-3 text-[#2C3E50]">{activeCall.submissionDetails}</p>
                  <div className="text-base text-[#2C3E50]">
                    <p><strong>Kapcsolattartás:</strong></p>
                    <p className="mt-1">E-mail: <a href={`mailto:${activeCall.contact}`} className="text-[#2C7BA0] hover:text-[#1A4D6B] underline">{activeCall.contact}</a></p>
                  </div>
                </div>

                {/* Full Details */}
                <Link href="/kozerdeku-adatok">
                  <Button className="w-full gap-2 bg-red-600 hover:bg-red-700">
                    Teljes pályázati felhívás és dokumentumok
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Pályázat közzétételének helyei
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Ahol megtalálható a pályázati felhívás</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 ml-7 text-lg text-[#2C3E50]">
                  <li>• Gárdony Város Önkormányzatának honlapja (gardony.hu)</li>
                  <li>• Gárdony Város Hivatalos Facebook oldala</li>
                  <li>• turizmus.com magazin honlapja</li>
                  <li>• profession.hu</li>
                  <li>• jobline.hu</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function Building({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l2-3h2l2 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
    </svg>
  )
}
