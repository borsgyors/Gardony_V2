"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Building } from "lucide-react"
import Image from "next/image"

export default function KapcsolatPage() {
  const officeHours = [
    { day: "Hétfő", hours: "08:00 - 12:00, 13:00 - 17:30", status: "open" },
    { day: "Kedd", hours: "Zárva", status: "closed" },
    { day: "Szerda", hours: "08:00 - 12:00", status: "open" },
    { day: "Csütörtök", hours: "Zárva", status: "closed" },
    { day: "Péntek", hours: "08:00 - 12:00", status: "open" },
    { day: "Szombat", hours: "Zárva", status: "closed" },
    { day: "Vasárnap", hours: "Zárva", status: "closed" }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Cím",
      content: ["2483 Gárdony", "Szabadság út 20-22"],
      color: "#2C7BA0"
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Telefon",
      content: ["+36 22 355 370", "+36 20 260 8951"],
      color: "#10B981"
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email",
      content: ["onkormanyzat@gardony.hu", "bejelentes@gardony.hu"],
      color: "#F59E0B"
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
          alt="Kapcsolat"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/70 via-[#10B981]/60 to-white/95" />

        <div className="relative container h-full flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 max-w-3xl">
            <Badge className="mb-6 text-xl px-6 py-3 bg-white/20 backdrop-blur-sm border-white/50 text-white">
              <Phone className="w-5 h-5 mr-2" /> Kapcsolat
            </Badge>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Lépjen kapcsolatba velünk
            </h1>

            <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg leading-relaxed">
              Elérhetőségek, ügyfélfogadás és kapcsolatfelvétel
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: "cover"
          }}
        />
      </div>

      {/* MAP */}
      <div className="container max-w-6xl mx-auto">
        <iframe
          title="Gárdony térkép"
          src="https://www.google.com/maps?q=G%C3%A1rdony&output=embed"
          className="w-full rounded-xl"
          style={{ height: 300, border: 0 }}
          loading="lazy"
        />
      </div>

      {/* CONTACT CARDS */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactInfo.map((info, i) => (
            <Card
              key={i}
              className="group hover:shadow-2xl transition transform hover:-translate-y-2 border-none text-center bg-gradient-to-br from-white to-[#F8FAFC]"
            >
              <CardHeader>
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition"
                  style={{ backgroundColor: `${info.color}15`, color: info.color }}
                >
                  {info.icon}
                </div>
                <CardTitle className="text-3xl mb-6" style={{ color: info.color }}>
                  {info.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {info.content.map((line, idx) => (
                  <p key={idx} className="text-xl text-[#2C3E50] font-medium">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* LAKE DIVIDER */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/stunning-panoramic-photograph-of-lake-ve-06c1cbb8-20251130141513.jpg"
          alt="Lake Velence"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* OFFICE HOURS + FORM */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`
          }}
        />

        <div className="container max-w-7xl mx-auto relative">

          {/* RESPONSIVE GRID (Új!) */}
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-[360px_1fr] 
              lg:grid-cols-[400px_1fr] 
              gap-12 
              items-start
            "
          >
            {/* OFFICE HOURS CARD */}
            <Card className="shadow-2xl border-none overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#10B981] via-[#3D8B7C] to-[#2C7BA0]" />

              <CardHeader className="bg-gradient-to-br from-white to-[#E8F4F8] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#3D8B7C] flex items-center justify-center">
                    <Clock className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <CardTitle className="text-4xl bg-gradient-to-r from-[#10B981] to-[#3D8B7C] text-transparent bg-clip-text">
                      Ügyfélfogadási idő
                    </CardTitle>
                    <p className="text-lg text-[#64748B] mt-2">
                      Gárdonyi Polgármesteri Hivatal
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-4">
                {officeHours.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#F8FAFC] to-white hover:shadow-lg transition"
                  >
                    <span className="text-lg font-bold text-[#1A1A1A] w-36">{item.day}</span>
                    <span className="text-lg text-[#2C3E50] flex-1 text-center">
                      {item.hours}
                    </span>
                    <Badge
                      className="text-lg px-6 py-3"
                      style={{ backgroundColor: item.status === "open" ? "#10B981" : "#64748B" }}
                    >
                      {item.status === "open" ? "Nyitva" : "Zárva"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CONTACT FORM */}
            <Card className="shadow-2xl border-none overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#2C7BA0] via-[#10B981] to-[#F59E0B]" />

              <CardHeader className="bg-gradient-to-br from-white to-[#E8F4F8] p-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2C7BA0] to-[#10B981] flex items-center justify-center">
                    <Send className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <CardTitle className="text-5xl bg-gradient-to-r from-[#2C7BA0] to-[#10B981] text-transparent bg-clip-text">
                      Üzenet küldése
                    </CardTitle>
                    <p className="text-2xl text-[#64748B] mt-2">
                      Küldjön üzenetet az önkormányzatnak
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 p-12">

                {/* Név */}
                <div className="space-y-4">
                  <Label htmlFor="name" className="text-2xl font-semibold text-[#1A1A1A]">
                    Név *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Teljes név"
                    className="text-xl h-16 border-2 border-[#CBD5E0] focus:border-[#10B981] rounded-xl"
                  />
                </div>

                {/* Email */}
                <div className="space-y-4">
                  <Label htmlFor="email" className="text-2xl font-semibold text-[#1A1A1A]">
                    Email cím *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="pelda@email.hu"
                    className="text-xl h-16 border-2 border-[#CBD5E0] focus:border-[#10B981] rounded-xl"
                  />
                </div>

                {/* Telefon */}
                <div className="space-y-4">
                  <Label htmlFor="phone" className="text-2xl font-semibold text-[#1A1A1A]">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+36 XX XXX XXXX"
                    className="text-xl h-16 border-2 border-[#CBD5E0] focus:border-[#10B981] rounded-xl"
                  />
                </div>

                {/* Tárgy */}
                <div className="space-y-4">
                  <Label htmlFor="subject" className="text-2xl font-semibold text-[#1A1A1A]">
                    Tárgy *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Üzenet tárgya"
                    className="text-xl h-16 border-2 border-[#CBD5E0] focus:border-[#10B981] rounded-xl"
                  />
                </div>

                {/* Üzenet */}
                <div className="space-y-4">
                  <Label htmlFor="message" className="text-2xl font-semibold text-[#1A1A1A]">
                    Üzenet *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Írja ide üzenetét..."
                    rows={8}
                    className="text-xl border-2 border-[#CBD5E0] focus:border-[#10B981] rounded-xl resize-none"
                  />
                </div>

                {/* Gombok */}
                <div className="flex gap-4 pt-6">
                  <Button className="gap-3 text-xl px-12 py-7 h-auto bg-gradient-to-r from-[#10B981] to-[#3D8B7C] hover:shadow-2xl rounded-xl">
                    <Send className="w-6 h-6" /> Küldés
                  </Button>
                  <Button variant="outline" className="gap-3 text-xl px-12 py-7 h-auto border-2 border-[#CBD5E0] hover:bg-[#F8FAFC] rounded-xl">
                    Törlés
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* INFO BOX */}
          <div className="mt-16">
            <Card className="border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8] shadow-2xl">
              <CardContent className="p-10 pt-14">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2C7BA0] to-[#10B981] flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-[#1A1A1A]">
                      Fontos információk
                    </h3>
                    <div className="space-y-4 text-xl text-[#2C3E50] leading-relaxed">
                      <p>
                        <strong className="text-[#2C7BA0]">Előzetes időpontfoglalás:</strong>{" "}
                        Bizonyos ügyekben előzetes időpont foglalása szükséges. Időpontot
                        foglalhat telefonon vagy e-mailben.
                      </p>

                      <p>
                        <strong className="text-[#3D8B7C]">Online ügyintézés:</strong>{" "}
                        Egyre több ügy intézhető elektronikusan a Kormányablak online felületén:
                        <a
                          href="https://magyarorszag.hu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2C7BA0] hover:underline ml-2"
                        >
                          magyarorszag.hu
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* FOOTER IMAGE */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/scenic-cycling-path-along-lake-velence-s-e9b2ebed-20251130141514.jpg"
          alt="Gárdony"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>

    </div>
  )
}
