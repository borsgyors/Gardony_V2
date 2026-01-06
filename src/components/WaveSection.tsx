import React from "react"
import clsx from "clsx"

type WaveSectionProps = {
  children: React.ReactNode
  className?: string
}

export function WaveSection({ children, className }: WaveSectionProps) {
  return (
    <section className={clsx("relative w-full overflow-hidden", className)}>
      
      {/* TOP WAVE – fehér → zöld */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-[100px]"
      >
        <path
          d="
            M0,60
            C240,20 480,100 720,60
            C960,20 1200,100 1440,60
            L1440,0
            L0,0
            Z
          "
          fill="#ffffff"
        />
      </svg>

      {/* CONTENT BACKGROUND */}
      <div className="relative bg-[#B3D7D366]">
        {children}
      </div>

      {/* BOTTOM WAVE – zöld → fehér */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[100px] rotate-180"
      >
        <path
          d="
            M0,60
            C240,20 480,100 720,60
            C960,20 1200,100 1440,60
            L1440,0
            L0,0
            Z
          "
          fill="#ffffff"
        />
      </svg>

    </section>
  )
}
