"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves, Heart } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
          alt="Velencei-tó"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A4D6B]/60 via-[#2C7BA0]/50 to-white/95" />
      </div>

      <div className="relative container h-full flex flex-col justify-center items-center text-center text-white">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Szállás és Vendéglátás Gárdonyban</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-white/90">Éttermek, kávézók, helyi vendéglátóhelyek és szállásfoglalási lehetőségek a Velencei-tónál.</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/turizmus">
              <Button size="lg" className="gap-3 text-xl px-8 py-4 bg-[#2C7BA0] hover:bg-[#1A4D6B] shadow-2xl">
                <Waves className="w-5 h-5" /> Fedezd fel
              </Button>
            </Link>
            <Link href="/bemutatkozas">
              <Button size="lg" variant="outline" className="gap-3 text-xl px-8 py-4 bg-white/20 border-white/30 text-white">
                <Heart className="w-5 h-5" /> A városról
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
