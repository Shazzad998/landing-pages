"use client"

import Achivement from "@/components/be-fluence/achivement"
import FlickeringBackground from "@/components/be-fluence/filckering-background"
import HeroBadge from "@/components/be-fluence/hero-badge"
import HeroText from "@/components/be-fluence/hero-text"
import HighlightedText from "@/components/be-fluence/highlighted-text"
import PrimaryButton from "@/components/be-fluence/primary-button"
import {
  ArrowUpRight01Icon,
  MessageMultiple01Icon,
  ScanEyeIcon,
  UserStatusIcon,
} from "@hugeicons/core-free-icons"
import { motion, Variants } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FlickeringBackground />
      </motion.div>
      <div className="relative container mx-auto pt-64">
        <motion.div className="text-center" variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }} initial="hidden" animate="show">
          <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
          >
            <HeroBadge />
          </motion.div>
          <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
          >
            <HeroText>
              We're <HighlightedText>CPA Oriented</HighlightedText> <br />
              Influencer Marketing Agency
            </HeroText>
          </motion.div>

          <motion.p
            variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            className="mx-auto mt-8 max-w-lg text-sm text-foreground/70"
          >
            We help our partners integrate influencer marketing throughout the
            entire funnel -- from brand awareness to sales conversion.
          </motion.p>
          <motion.div
            className="mt-16 flex items-center justify-center gap-16"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Achivement
                icon={UserStatusIcon}
                value="7k+"
                label="Collaborating Influencers"
                delay={0.5}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Achivement
                icon={ScanEyeIcon}
                value="200k+"
                label="Views on our Porjects"
                delay={0.5}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Achivement
                icon={MessageMultiple01Icon}
                value="10k+"
                label="Successful Integrations"
                delay={0.5}
              />
            </motion.div>
          </motion.div>
          <motion.div variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}  className="mt-20 flex justify-center">
            <PrimaryButton
              href="#"
              icon={ArrowUpRight01Icon}
              label="Contact Us"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
