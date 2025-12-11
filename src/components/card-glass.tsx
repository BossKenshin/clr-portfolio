import * as React from "react"

import { cn } from "@/lib/utils"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./ui/card"

const CardGlass = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={className}
    {...props}
  />
))
CardGlass.displayName = "CardGlass"

const CardGlassHeader = CardHeader
CardGlassHeader.displayName = "CardGlassHeader"

const CardGlassTitle = CardTitle
CardGlassTitle.displayName = "CardGlassTitle"

const CardGlassDescription = CardDescription
CardGlassDescription.displayName = "CardGlassDescription"

const CardGlassContent = CardContent
CardGlassContent.displayName = "CardGlassContent"

const CardGlassFooter = CardFooter
CardGlassFooter.displayName = "CardGlassFooter"

export { CardGlass, CardGlassHeader, CardGlassFooter, CardGlassTitle, CardGlassDescription, CardGlassContent }
