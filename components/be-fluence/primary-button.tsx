import Link from "next/link"
import Icon from "../Icon"
import { IconSvgElement } from "@hugeicons/react"

type Props = {
  href: string
  icon: IconSvgElement
  label: string
}

const PrimaryButton = ({ href, icon, label }: Props) => {
  return (
    <Link
      href={href}
      className="group flex cursor-pointer items-center gap-2 rounded-full border border-primary bg-foreground py-1 pr-1 pl-5 font-medium text-background shadow-lg shadow-primary/70 duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-primary/10"
    >
      {label}{" "}
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-foreground group-hover:text-primary">
        <Icon
          icon={icon}
          strokeWidth={2}
          className="size-5 duration-200 group-hover:rotate-45"
        />
      </span>
    </Link>
  )
}

export default PrimaryButton
