import FlickeringBackground from "@/components/be-fluence/filckering-background"
import Icon from "@/components/Icon"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  MessageMultiple01Icon,
  MessageSquareCode,
  ScanEyeIcon,
  UserStatusIcon,
} from "@hugeicons/core-free-icons"

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <section id="hero" className="relative min-h-screen">
        <FlickeringBackground />
        <div className="relative container mx-auto pt-64">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1">
              <span className="relative inline-block px-1 pr-1.5 before:absolute before:top-px before:right-0 before:bottom-px before:left-0 before:block before:rotate-16 before:-skew-y-16 before:rounded-sm before:bg-foreground">
                <span className="relative font-extrabold text-background italic">
                  BE
                </span>
              </span>
              <span>Over 7+ Years of Experience</span>
              <Icon icon={ArrowRight02Icon} className="size-5" />
            </div>
            <h1 className="mx-auto mt-4 max-w-4xl text-6xl font-medium">
              We're{" "}
              <span className="inline-block -rotate-1 rounded-md bg-linear-to-t from-primary to-primary/40 px-2 py-1 font-semibold text-teal-200">
                <span className="inline-block bg-linear-to-r from-teal-200 to-teal-50 bg-clip-text text-transparent">
                  Hello World
                </span>
              </span>{" "}
              <br />
              Influencer Marketing Agency
            </h1>

            <p className="mx-auto mt-8 max-w-lg text-sm text-foreground/70">
              We help our partners integrate influencer marketing throughout the
              entire funnel -- from brand awareness to sales conversion.
            </p>
            <div className="mt-16 flex items-center justify-center gap-16">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-4xl">
                  <Icon
                    icon={UserStatusIcon}
                    className="size-8 text-teal-500"
                  />
                  <span className="font-medium">7K+</span>
                </div>
                <p className="text-sm">Collaborating Influencers</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-4xl">
                  <Icon icon={ScanEyeIcon} className="size-8 text-teal-500" />
                  <span className="font-medium">200M+</span>
                </div>
                <p className="text-sm">Views on our Porjects</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-4xl">
                  <Icon
                    icon={MessageSquareCode}
                    className="size-8 text-teal-500"
                  />
                  <span className="font-medium">10K+</span>
                </div>
                <p className="text-sm">Successful Integrations</p>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button className="group flex cursor-pointer items-center gap-2 rounded-full bg-foreground py-1 pr-1 pl-5 font-medium text-background duration-200 hover:bg-primary hover:text-primary-foreground border border-primary shadow-lg shadow-primary/70 hover:shadow-primary/10">
                Contact Us{" "}
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-foreground group-hover:text-primary">
                  <Icon
                    icon={ArrowUpRight01Icon}
                    strokeWidth={2}
                    className="size-5 duration-200 group-hover:rotate-45"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
