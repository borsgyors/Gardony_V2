import React from "react"
import BookingPlatformCard from "./BookingPlatformCard"

const bookingPlatforms = [
  {
    name: "Szallas.hu – Gárdony",
    url: "https://www.szallas.hu/gardony",
    description: "A legismertebb magyar szállásfoglaló. Apartmanok, panziók és hotelek."
  },
  {
    name: "Booking.com – Gárdony",
    url: "https://www.booking.com/city/hu/gardony.hu.html",
    description: "Nemzetközi foglalási oldal valós idejű árakkal és értékelésekkel."
  },
  {
    name: "Airbnb – Gárdony",
    url: "https://www.airbnb.com/s/Gárdony--Hungary/homes",
    description: "Egyedi apartmanok, tóparti szállások, privát szobák."
  }
]

export default function BookingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">Szállásfoglalási platformok</h2>
          <p className="text-2xl text-[#2C3E50] max-w-3xl mx-auto">Hasznos külső oldalak, ahol gyorsan kereshetsz és foglalhatsz szállást Gárdonyban.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookingPlatforms.map((p, i) => (
            <BookingPlatformCard key={i} platform={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
