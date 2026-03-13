"use client"
import NavItem from "@/components/be-fluence/nav-item"
import Icon from "@/components/Icon"
import {
  AiAudioIcon,
  ContactIcon,
  GameController03Icon,
  Home01FreeIcons,
  Mail01Icon,
  SentIcon,
} from "@hugeicons/core-free-icons"
import { motion } from "motion/react"
import Link from "next/link"

const delay = 1
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      delay: delay,
      delayChildren: 1,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
  transition: {
    duration: 0.5,
  },
}

export default function BeFluenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-linear-to-b from-background from-40% to-teal-500/10">
      <motion.nav
        initial={{ opacity: 0, x: -20 , filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0 , filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed top-1/2 left-4 z-50 flex w-fit -translate-y-1/2 flex-col items-center gap-2 rounded-full border p-1"
      >
        {" "}
        <NavItem
          icon={Home01FreeIcons}
          href="#"
          label="Home"
          active={true}
        />{" "}
        <NavItem icon={GameController03Icon} href="#" label="Home" />{" "}
        <NavItem icon={ContactIcon} href="#" label="Home" />{" "}
      </motion.nav>

      <header className="fixed top-0 right-0 left-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay }}
              className="flex flex-col items-start tracking-tighter"
            >
              <span className="text-xl font-black italic">BE</span>
              <span className="-mt-2 ml-4 text-xl font-black italic">
                Fluence
              </span>
            </motion.div>
            <motion.nav
              className="flex items-center gap-2"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <Link
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground"
                >
                  <Icon icon={Mail01Icon} className="size-5" strokeWidth={2} />
                </Link>
              </motion.div>
              <motion.div variants={item}>
                <Link
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground"
                >
                  <Icon icon={SentIcon} className="size-5" strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.nav>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}
