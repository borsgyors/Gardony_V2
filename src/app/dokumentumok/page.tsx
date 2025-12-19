"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Search, Calendar, ArrowRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DokumentumokPage() {
  const documents = [
    {
      id: 1,
      title: "Szálláshely-üzemeltetési engedély nyilvántartás",
      category: "Nyilvántartások",
      date: "2025-04-20",
      type: "PDF",
      size: "245 KB"
    },
    {
      id: 2,
      title: "Testületi ülés jegyzőkönyv - 2025. március",
      category: "Jegyzőkönyvek",
      date: "2025-03-30",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      id: 3,
      title: "Önkormányzati rendeletek 2025",
      category: "Rendeletek",
      date: "2025-01-15",
      type: "PDF",
      size: "890 KB"
    },
    {
      id: 4,
      title: "Költségvetési beszámoló 2024",
      category: "Pénzügyek",
      date: "2025-02-28",
      type: "PDF",
      size: "2.1 MB"
    },
    {
      id: 5,
      title: "Közterület-használati kérelem űrlap",
      category: "Űrlapok",
      date: "2025-01-10",
      type: "PDF",
      size: "156 KB"
    },
    {
      id: 6,
      title: "Építési engedély kérelem",
      category: "Űrlapok",
      date: "2025-01-10",
      type: "PDF",
      size: "198 KB"
    },
    {
      id: 7,
      title: "Gárdony Településrendezési Terv",
      category: "Tervek",
      date: "2024-11-15",
      type: "PDF",
      size: "5.4 MB"
    },
    {
      id: 8,
      title: "Tulajdonosi hozzájárulás kérelem",
      category: "Űrlapok",
      date: "2024-12-20",
      type: "PDF",
      size: "134 KB"
    }
  ]

  const categories = [
    { name: "Összes", color: "#F59E0B" },
    { name: "Nyilvántartások", color: "#2C7BA0" },
    { name: "Jegyzőkönyvek", color: "#DC2626" },
    { name: "Rendeletek", color: "#7C3AED" },
    { name: "Pénzügyek", color: "#10B981" },
    { name: "Űrlapok", color: "#0EA5E9" },
    { name: "Tervek", color: "#EC4899" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Municipal Building Background */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
            alt="Hivatali dokumentumok"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/70 via-[#F59E0B]/60 to-white/95" />
        </div>
        
        <div className="relative container h-full flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 max-w-3xl">
            <Badge className="mb-6 text-xl px-6 py-3 bg-white/20 backdrop-blur-sm border-white/50 text-white">
              <FileText className="w-5 h-5 mr-2" />
              Dokumentumok
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Hivatalos Dokumentumok
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg leading-relaxed">
              Rendeletek, jegyzőkönyvek, űrlapok és hivatalos közlemények
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-7 h-7 text-[#64748B] group-focus-within:text-[#F59E0B] transition-colors" />
                  <Input
                    placeholder="Dokumentum keresése..."
                    className="pl-16 pr-6 text-xl h-16 border-2 border-[#CBD5E0] focus:border-[#F59E0B] rounded-2xl shadow-lg bg-white"
                  />
                </div>
                <Button size="lg" className="h-16 px-10 text-xl gap-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] hover:shadow-xl transition-shadow rounded-2xl">
                  <Search className="w-6 h-6" />
                  Keresés
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-7 h-7 text-[#64748B]" />
              <h3 className="text-2xl font-bold text-[#2C3E50]">Kategóriák:</h3>
            </div>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {categories.map((cat, index) => (
                <Button
                  key={cat.name}
                  variant={index === 0 ? "default" : "outline"}
                  size="lg"
                  className="text-lg px-6 py-6 h-auto rounded-2xl hover:scale-105 transition-transform shadow-lg"
                  style={{
                    backgroundColor: index === 0 ? cat.color : 'transparent',
                    borderColor: cat.color,
                    color: index === 0 ? 'white' : cat.color
                  }}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container relative">
          <div className="max-w-5xl mx-auto space-y-6">
            {documents.map((doc, index) => (
              <div
                key={doc.id}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="transform-gpu translate-y-0 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 border-none overflow-hidden bg-gradient-to-br from-white to-[#FEF3C7]/20 motion-reduce:transition-none">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 ease-out">
                          <FileText className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A] group-hover:text-[#F59E0B] transition-colors">{doc.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-[#64748B]">
                          <Badge 
                            variant="outline" 
                            className="text-lg px-4 py-2 border-2"
                            style={{ 
                              borderColor: categories.find(c => c.name === doc.category)?.color,
                              color: categories.find(c => c.name === doc.category)?.color
                            }}
                          >
                            {doc.category}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-6 h-6" />
                            <span className="text-lg font-medium">{doc.date}</span>
                          </div>
                          <span className="text-lg font-medium">{doc.type} • {doc.size}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <Button 
                        size="lg" 
                        className="gap-3 text-lg px-8 py-6 h-auto bg-gradient-to-r from-[#F59E0B] to-[#DC2626] hover:shadow-xl transition-all rounded-2xl group-hover:scale-105"
                      >
                        <Download className="w-6 h-6" />
                        Letöltés
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="max-w-5xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Card className="border-2 border-[#F59E0B] bg-gradient-to-br from-white to-[#FEF3C7]/30 shadow-2xl">
              <CardContent className="p-10 pt-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-[#1A1A1A]">További információk</h3>
                    <p className="text-xl text-[#2C3E50] leading-relaxed mb-6">
                      Ha nem találja a keresett dokumentumot, vagy kérdése van a dokumentumokkal kapcsolatban, 
                      kérjük vegye fel velünk a kapcsolatot telefonon vagy emailben.
                    </p>
                    <Link href="/kapcsolat">
                      <Button size="lg" variant="outline" className="gap-3 text-lg px-8 py-6 h-auto border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all rounded-2xl">
                        Kapcsolat
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Lake Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/stunning-panoramic-photograph-of-lake-ve-06c1cbb8-20251130141513.jpg"
          alt="Lake Velence"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
    </div>
  )
}