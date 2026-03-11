import React from "react"
import { IconSvgElement } from "@hugeicons/react"
import Link from "next/link"
import Icon from "../Icon"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
  icon: IconSvgElement
  href: string
  label: string
  active?: boolean
}

const NavItem = ({ icon, href, label, active }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex size-10 items-center justify-center rounded-full",
        active && "bg-accent"
      )}
    >
      <Tooltip>
        <TooltipTrigger>
          <Icon icon={icon} className="size-5 text-accent-foreground" />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  )
}

export default NavItem
