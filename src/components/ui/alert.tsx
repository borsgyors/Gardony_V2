import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const alertVariants = cva(
  "relative w-full rounded-lg border-2 p-6 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-white border-[#CBD5E0] text-[#1A1A1A]",
        info: "bg-[#E8F4F8] border-[#2C7BA0] text-[#1A4D6B]",
        success: "bg-[#D1FAE5] border-[#2D8659] text-[#166534]",
        warning: "bg-[#FEF3C7] border-[#F59E0B] text-[#92400E]",
        destructive: "bg-[#FEE2E2] border-[#DC2626] text-[#991B1B]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={alertVariants({ variant, className })}
    {...props}
  />
))
Alert.displayName = "Alert"

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={`mb-2 text-xl font-semibold leading-tight tracking-tight ${className || ""}`}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-lg leading-relaxed [&_p]:leading-relaxed ${className || ""}`}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"