"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Building, Waves, Calendar, ArrowRight, TreePine, Sun, Heart, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BemutatkozasPage() {
  const mayorMessage = [
    "Kedves Látogató!",
    "Sok szeretettel köszöntöm Önt Gárdony Város Önkormányzatának honlapján!",
    "Négy településrészen – Agárdon, Csiribpusztán, Dinnyésen és Gárdonyban - több mint tizenháromezren élünk állandó lakosként, de ez a szám a valóságban jóval nagyobb, hiszen nagyon sok nyaralótulajdonos tölti nálunk a szabadidejét, nagy számban érkeznek turisták, sportolók, kerékpárosok, kirándulók, horgászok, akik a Velencei-tavat és Gárdonyt választják kikapcsolódásuk helyszínéül.",
    "Városunk vonzereje gyönyörű fekvésében, forrásaink gyógyhatásában, a környéken termő zamatos, jó boraiban, de legfőképpen az itt élő emberek vendégszeretetében rejlik. Történelmi, kulturális hagyományaink, évtizedekre visszatekintő rendezvényeink és természeti kincseink minden évszakban várják az itt élőket és a hozzánk látogatókat.",
    "A kiváló közlekedési kapcsolat Budapesttel és Székesfehérvárral a vállalkozások és az új otthont keresők számára is vonzóvá teszi településünket, amire nagyon büszkék vagyunk.",
    "Honlapunkon keresztül az érdeklődők megismerhetik városunk múltját, jelenét, nyomon követhetik az aktuális eseményeket. Az itt élők részére pedig szeretnénk megkönnyíteni a hivatalos ügyek intézését; oldalunkon megtalálhatják az összes fontos tudnivalót, letölthetnek nyomtatványokat, lehetőség van elektronikus ügyintézésre is.",
    "A személyes találkozás reményében kívánok virtuális barangolásához hasznos és kellemes időtöltést!"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Lake Background */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
            alt="Gárdony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/70 via-[#2C7BA0]/60 to-white/95" />
        </div>

        <div className="relative container h-full flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-left-4 duration-1200 max-w-3xl">
            <Badge className="mb-6 text-xl px-6 py-3 bg-white/20 backdrop-blur-sm border-white/50 text-white">
              <Heart className="w-5 h-5 mr-2" />
              Bemutatkozás
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Gárdony Város
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg leading-relaxed">
              Történelem, természet és közösség találkozása a Velencei-tó partján
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-3 text-xl px-10 py-7 h-auto bg-black text-white hover:bg-white hover:text-black transition-colors shadow-2xl">
                <Camera className="w-6 h-6" />
                Galéria megtekintése
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Polgármester köszöntője – hosszú verzió */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-10">
          </div>

          <article className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-10 lg:gap-12">
              <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-3">
                <div className="w-[262px] h-[406px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/media/EotvosPalArpad.png"
                    alt="Eötvös Pál Árpád portréja"
                    width={262}
                    height={406}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 262px"
                    priority
                  />
                </div>
                <div className="text-center md:text-left space-y-1">
                  <p className="font-semibold text-[#111827]">Eötvös Pál Árpád</p>
                  <p className="text-sm text-[#4B5563]">polgármester</p>
                </div>
              </div>

              <div className="flex-1 font-[Inter] text-[16px] leading-6 text-[#1F2937] space-y-4">
                <h3 className="text-sm sm:text-base font-semibold text-[#007A6C]">Polgármester köszöntője</h3>
                <h4 className="text-2xl sm:text-3xl font-semibold text-[#1F2937]">Kedves Látogató!</h4>

                {mayorMessage.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <div className="pt-4 space-y-1">
                  <p className="font-semibold text-[#111827]">Eötvös Pál Árpád</p>
                  <p className="text-sm text-[#4B5563]">polgármester</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#7C3AED] to-[#2C7BA0] bg-clip-text text-transparent">
              Gárdony számokban
            </h2>
            <p className="text-2xl text-[#2C3E50]">A város legfontosabb adatai egy pillantásra</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group animate-in fade-in duration-1000" style={{ animationDelay: '0ms' }}>
              <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl bg-gradient-to-br from-white to-[#E8F4F8] border-none h-full motion-reduce:transition-none">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">~10 300</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">Lakosság</p>
                  <p className="text-lg text-[#64748B] mt-2">Állandó lakosok száma</p>
                </CardContent>
              </Card>
            </div>

            <div className="group animate-in fade-in duration-1000" style={{ animationDelay: '100ms' }}>
              <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl bg-gradient-to-br from-white to-[#E8F4F8] border-none h-full motion-reduce:transition-none">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] bg-clip-text text-transparent">1989</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">Városi rang</p>
                  <p className="text-lg text-[#64748B] mt-2">Március 1-jén</p>
                </CardContent>
              </Card>
            </div>

            <div className="group animate-in fade-in duration-1000" style={{ animationDelay: '200ms' }}>
              <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl bg-gradient-to-br from-white to-[#E8F4F8] border-none h-full motion-reduce:transition-none">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2C7BA0] to-[#7C3AED] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#2C7BA0] to-[#7C3AED] bg-clip-text text-transparent">50 km</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">Budapesttől</p>
                  <p className="text-lg text-[#64748B] mt-2">Közvetlen közelség</p>
                </CardContent>
              </Card>
            </div>

            <div className="group animate-in fade-in duration-1000" style={{ animationDelay: '300ms' }}>
              <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl bg-gradient-to-br from-white to-[#E8F4F8] border-none h-full motion-reduce:transition-none">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3D8B7C] to-[#0EA5E9] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Waves className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-5xl bg-gradient-to-br from-[#3D8B7C] to-[#0EA5E9] bg-clip-text text-transparent">26 km²</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-[#64748B] font-semibold">Velencei-tó</p>
                  <p className="text-lg text-[#64748B] mt-2">Tó területe</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Divider */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
          alt="Lake Velence Nature"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container max-w-5xl relative">
          <Card className="mb-12 shadow-2xl border-none overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7C3AED] via-[#2C7BA0] to-[#3D8B7C]" />
            <CardHeader className="bg-gradient-to-br from-white to-[#E8F4F8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#2C7BA0] rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-5xl bg-gradient-to-r from-[#7C3AED] to-[#2C7BA0] bg-clip-text text-transparent">
                  Gárdony bemutatása
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 text-xl leading-relaxed pt-8">
              <p className="text-[#2C3E50]">
                Gárdony Magyarország <strong className="text-[#2C7BA0]">Közép-Dunántúl</strong> régiójában, Fejér vármegyében található város,
                amely a <strong className="text-[#3D8B7C]">Velencei-tó déli partján</strong> helyezkedik el. A város Budapesttől körülbelül
                50 kilométerre, a Balatontól pedig 46 kilométerre található.
              </p>
              <p className="text-[#2C3E50]">
                A város <strong className="text-[#7C3AED]">1989. március 1-jén</strong> kapta meg a városi rangot. Gárdony három fő településrészből áll:
                a központi Gárdonyból, a tóparti Agárdból és a természetközeli Dinnyésből.
              </p>
              <p className="text-[#2C3E50]">
                A <strong className="text-[#2C7BA0]">Velencei-tó</strong> Magyarország harmadik legnagyobb természetes tava, amely 26 km²
                területű sekély, nádasokkal tagolt vízfelület. A tó páratlan szépségű természeti
                környezetet biztosít a városnak.
              </p>
            </CardContent>
          </Card>

          {/* Settlements Section with Images */}
          <Card className="mb-12 shadow-2xl border-none overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '200ms' }}>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2C7BA0] via-[#3D8B7C] to-[#7C3AED]" />
            <CardHeader className="bg-gradient-to-br from-white to-[#E8F4F8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-5xl bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
                  Településrészek
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-10 pt-8">
              {/* Gárdony */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
                    alt="Gárdony központ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Badge className="mb-4 text-xl px-6 py-3 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C]">
                    Gárdony
                  </Badge>
                  <p className="text-xl leading-relaxed text-[#2C3E50]">
                    A város központi része, ahol a Polgármesteri Hivatal, az önkormányzati
                    intézmények, iskolák és a fontosabb közszolgáltatások találhatók.
                    Gárdony a város kereskedelmi és közigazgatási központja.
                  </p>
                </div>
              </div>

              {/* Gárdony Map */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  title="Gárdony város térkép"
                  src="https://www.google.com/maps?q=Gárdony+Hungary&output=embed"
                  className="w-full rounded-2xl"
                  style={{ height: 300, border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* Agárd */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <Badge className="mb-4 text-xl px-6 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#2C7BA0]">
                    Agárd
                  </Badge>
                  <p className="text-xl leading-relaxed text-[#2C3E50]">
                    A Velencei-tó partján fekvő üdülőövezet, amely a város turisztikai
                    központja. Agárd híres a 58°C-os termálvízéről, strandjaival és
                    vízi sportlehetőségeiről. Nyáron a város legnépesebb része.
                  </p>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
                    alt="Agárd strand"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Agárd Map */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  title="Agárd város térkép"
                  src="https://www.google.com/maps?q=Agárd+Hungary&output=embed"
                  className="w-full rounded-2xl"
                  style={{ height: 300, border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* Dinnyés */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
                    alt="Dinnyés természet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Badge className="mb-4 text-xl px-6 py-3 bg-gradient-to-r from-[#3D8B7C] to-[#2D8659]">
                    Dinnyés
                  </Badge>
                  <p className="text-xl leading-relaxed text-[#2C3E50]">
                    A város csendes, természetközeli része, amely megtartotta falusi jellegét.
                    Dinnyés különösen vonzó azok számára, akik a nyugodt, természet közeli
                    életmódot keresik. A Dinnyési Fertő természetvédelmi terület is itt található.
                  </p>
                </div>
              </div>

              {/* Dinnyés Map */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  title="Dinnyés város térkép"
                  src="https://www.google.com/maps?q=Dinnyés+Hungary&output=embed"
                  className="w-full rounded-2xl"
                  style={{ height: 300, border: 0 }}
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Nature Section */}
          <Card className="shadow-2xl border-none overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '400ms' }}>
            <div className="relative h-80 overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/scenic-cycling-path-along-lake-velence-s-e9b2ebed-20251130141514.jpg"
                alt="Velencei-tó természet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-5xl text-white drop-shadow-2xl">
                    Természeti értékek
                  </CardTitle>
                </div>
              </div>
            </div>
            <CardContent className="space-y-8 text-xl leading-relaxed pt-12 bg-gradient-to-br from-white to-[#E8F4F8]">
              <p className="text-[#2C3E50]">
                A <strong className="text-[#3D8B7C]">Velencei-tó és környéke</strong> gazdag madárvilágáról híres. A tó és a nádasok
                védett madárfajok tenyészőhelye, így a terület a <strong className="text-[#2C7BA0]">Ramsari egyezmény</strong> alapján
                nemzetközi jelentőségű vadvédelmi terület.
              </p>
              <p className="text-[#2C3E50]">
                A <strong className="text-[#3D8B7C]">Dinnyési Fertő</strong> és a Velencei-tó egy része a Velencei-tó és Dinnyési Fertő
                Természetvédelmi Terület részét képezi, amely egyedülálló élőhelyet biztosít
                számos védett növény- és állatfaj számára.
              </p>
              <p className="text-[#2C3E50]">
                A város környékén számos túraútvonal és kerékpárút található, amelyek lehetőséget
                biztosítanak a természet megismerésére és a aktív kikapcsolódásra.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <TreePine className="w-12 h-12 text-[#3D8B7C] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#2C7BA0] mb-2">Védett terület</h4>
                  <p className="text-lg text-[#64748B]">Ramsari egyezmény</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <Sun className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#2C7BA0] mb-2">Gazdag madárvilág</h4>
                  <p className="text-lg text-[#64748B]">Nemzetközi jelentőség</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <Waves className="w-12 h-12 text-[#2C7BA0] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#2C7BA0] mb-2">Aktív turizmus</h4>
                  <p className="text-lg text-[#64748B]">Túrák és kerékpározás</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col md:flex-row gap-6">
              <Link href="/turizmus">
                <Button size="lg" className="gap-3 text-xl px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-shadow">
                  <Waves className="w-6 h-6" />
                  Turizmus és Programok
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
              <Link href="/kapcsolat">
                <Button
                  size="lg"
                  className="gap-3 text-xl px-10 py-7 h-auto 
               bg-transparent border-2 
               !text-[#2C7BA0] border-[#2C7BA0]
               shadow-lg 
               hover:!bg-[#2C7BA0] hover:!text-white hover:!border-[#2C7BA0]
               transition-all"
                >
                  <MapPin className="w-6 h-6" />
                  Kapcsolat
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Footer Lake Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/colorful-sailboats-and-small-harbor-at-l-62673b5f-20251130141514.jpg"
          alt="Lake Velence Harbor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
    </div>
  )
}