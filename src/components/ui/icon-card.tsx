import * as React from "react"

export interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description?: string
  href?: string
}

export const IconCard = React.forwardRef<HTMLDivElement, IconCardProps>(
  ({ className, icon, title, description, href, ...props }, ref) => {
    const CardContent = (
      <div
        ref={ref}
        className={`group flex flex-col items-center text-center p-8 rounded-xl border-2 border-[#CBD5E0] bg-white shadow-md hover:shadow-xl hover:border-[#2C7BA0] transition-all duration-300 cursor-pointer ${className || ""}`}
        {...props}
      >
        <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-[#E8F4F8] text-[#2C7BA0] group-hover:bg-[#2C7BA0] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{title}</h3>
        {description && (
          <p className="text-base text-[#2C3E50] leading-relaxed">{description}</p>
        )}
      </div>
    )

    if (href) {
      return <a href={href}>{CardContent}</a>
    }

    return CardContent
  }
)
IconCard.displayName = "IconCard"
