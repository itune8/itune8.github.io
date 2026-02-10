import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20",
        secondary: "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10",
        outline: "border border-white/20 text-white/70 hover:border-accent/50 hover:text-accent",
        success: "bg-green-500/10 text-green-400 border border-green-500/20",
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

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
