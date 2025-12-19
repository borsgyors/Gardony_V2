import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border-2 px-4 py-2 text-base font-semibold transition-colors focus:outline-none focus:ring-3 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#2C7BA0] text-white shadow hover:bg-[#1A4D6B]",
        secondary:
          "border-transparent bg-[#3D8B7C] text-white shadow hover:bg-[#2D7C6E]",
        outline: "border-[#CBD5E0] text-[#1A1A1A] bg-white",
        success:
          "border-transparent bg-[#2D8659] text-white shadow hover:bg-[#236B47]",
        warning:
          "border-transparent bg-[#F59E0B] text-[#1A1A1A] shadow hover:bg-[#D97706]",
        destructive:
          "border-transparent bg-[#DC2626] text-white shadow hover:bg-[#B91C1C]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={badgeVariants({ variant, className })} {...props} />
  )
}