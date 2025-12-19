import * as React from "react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`flex min-h-[120px] w-full rounded-lg border-2 border-[#CBD5E0] bg-white px-5 py-4 text-lg text-[#1A1A1A] placeholder:text-[#64748B] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#2C7BA0] focus-visible:ring-offset-2 focus-visible:border-[#2C7BA0] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ${className || ""}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"