import React from "react"

type Props = {
  children: React.ReactNode
}

const HeroText = ({ children }: Props) => {
  return (
    <h1 className="mx-auto mt-4 max-w-4xl text-6xl font-medium">{children}</h1>
  )
}

export default HeroText
