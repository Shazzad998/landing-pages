
import { FlickeringGrid } from "../ui/flickering-grid"

type Props = {}

const FlickeringBackground = (props: Props) => {
  return (
    <div className="absolute top-0 w-full -translate-y-3/5">
      <div className="relative mx-auto aspect-video w-4/5 overflow-hidden rounded-full">
        <FlickeringGrid
          className="overflow-hidden rounded-full"
          color="#47edd7"
        />
        <div className="absolute inset-0 rounded-full bg-radial from-teal-500 from-10% to-transparent to-50% opacity-25"></div>
        <div className="absolute inset-0 rounded-full bg-radial from-transparent from-10% to-background to-70%"></div>
      </div>
    </div>
  )
}

export default FlickeringBackground
