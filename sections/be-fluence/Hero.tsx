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
import { delay, motion, Variants } from "framer-motion"

const Hero = () => {
  const text =
    "We help our partners integrate influencer marketing throughout the entire funnel -- from brand awareness to sales conversion."
  const words = text.split(" ")
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
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -10,
                clipPath: "inset(0 0 100% 0)",
                filter: "blur(2px)",
                scale: 1.2,
              },
              show: {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0 0)",
                filter: "blur(0px)",
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <HeroBadge />
          </motion.div>

          <HeroText>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(10px)", scale: 1.3 },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              We're <HighlightedText>CPA Oriented</HighlightedText> <br />
              Influencer Marketing Agency
            </motion.span>
          </HeroText>
{/* 
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 5, filter: "blur(2px)", scale: 1.01 },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
            className="mx-auto mt-8 max-w-lg text-sm text-foreground/70"
          >
            We help our partners integrate influencer marketing throughout the
            entire funnel -- from brand awareness to sales conversion.
          </motion.p> */}

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 5, filter: "blur(2px)", scale: 1.01 },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
                transition: { staggerChildren: 0.03, duration: 0.5 },
              },
            }}
            initial="hidden"
            animate="show"
            className="mx-auto mt-8 max-w-lg text-sm text-foreground/70"
          >
            {words.map((word, index) => (
              <span key={index} className="inline-block">
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="inline-block" // Essential for 'y' transforms to work
                >
                  {word}
                </motion.span>
                <span>&nbsp;</span>
              </span>
            ))}
          </motion.p>

          <motion.div
            className="mt-16 flex items-center justify-center gap-16"
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 1.2 }}
            animate={{
              opacity: [0, 1, 1],
              y: [10, 0, 0],
              scale: [1.3, 1.3, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              delay: 1.2,
            }}
            className="mt-20 flex justify-center"
          >
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
