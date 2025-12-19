import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Platform = {
  name: string
  url: string
  description: string
}

export default function BookingPlatformCard({ platform }: { platform: Platform }) {
  return (
    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block no-underline">
      <Card className="h-full rounded-3xl border-3 border-[#CBD5E0] bg-white shadow-md hover:shadow-xl transition-all duration-300">
        <CardHeader className="px-6 pt-6 pb-0">
          <CardTitle className="text-2xl font-bold text-[#0F172A]">{platform.name}</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-4">
          <p className="text-base text-[#334155] leading-relaxed">{platform.description}</p>
        </CardContent>
      </Card>
    </a>
  )
}
