import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

type Vendor = {
  name: string
  category: string
  url: string
  description: string
}

export default function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <a href={vendor.url} target="_blank" rel="noopener noreferrer" className="no-underline group block">
      <Card className="h-full rounded-3xl border-3 border-[#CBD5E0] bg-white shadow-lg transform-gpu translate-y-0 transition-transform duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 overflow-hidden motion-reduce:transition-none">
        <div className="relative overflow-hidden h-32 bg-[#F8FAFC] flex items-center justify-center">
          <div className="text-4xl font-semibold text-[#1A4D6B]">{vendor.name.charAt(0)}</div>
        </div>
        <CardHeader className="px-6 pt-6 pb-0">
          <CardTitle className="text-2xl font-bold text-[#0F172A]">{vendor.name}</CardTitle>
          <p className="text-sm text-[#64748B] mt-2 capitalize">{vendor.category}</p>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-4">
          <p className="text-base text-[#334155] leading-relaxed mb-4">{vendor.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#475569]">Részletek</span>
            <ArrowRight className="w-5 h-5 text-[#2C7BA0] group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
