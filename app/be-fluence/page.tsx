"use client"

import Hero from "@/sections/be-fluence/Hero"
import { motion } from "motion/react"

const page = () => {
  return (
    <>
      <Hero />
      <StaggerList />
    </>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function StaggerList() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-2"
    >
      <motion.li variants={item}>Item 1</motion.li>
      <motion.li variants={item}>Item 2</motion.li>
      <motion.li variants={item}>Item 3</motion.li>
    </motion.ul>
  )
}

export default page
