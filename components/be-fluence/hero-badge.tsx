import Icon from "../Icon"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1">
      <span className="relative inline-block px-1 pr-1.5 before:absolute before:top-px before:right-0 before:bottom-px before:left-0 before:block before:rotate-16 before:-skew-y-16 before:rounded-sm before:bg-foreground">
        <span className="relative font-extrabold text-background italic">
          BE
        </span>
      </span>
      <span>Over 7+ Years of Experience</span>
      <Icon icon={ArrowRight02Icon} className="size-5" />
    </div>
  )
}

export default HeroBadge
