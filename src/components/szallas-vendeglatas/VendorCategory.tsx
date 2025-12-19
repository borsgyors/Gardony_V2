import React from "react"

export default function VendorCategory({ category }: { category: string }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-md border border-[#E6EEF3] text-[#0F172A] font-medium">
      <span className="capitalize">{category}</span>
    </div>
  )
}
