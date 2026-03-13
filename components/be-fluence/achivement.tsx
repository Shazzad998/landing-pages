import React from "react"
import Icon from "../Icon"
import { NumberTicker } from "../ui/number-ticker"

type Props = {
  icon: any
  value: string
  label: string
  delay?: number
}

const Achivement = ({ icon, value, label, delay = 0 }: Props) => {
  const extractNumberFromValue = (value: string): number => {
    const number = value.replace(/[^0-9]/g, "")
    return Number(number)
  }

  const extractStringFromValue = (value: string): string => {
    const string = value.replace(/[0-9]/g, "")
    return string
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-4xl">
        <Icon icon={icon} className="size-8 text-teal-500" />
        <span className="font-medium">
          {/* <NumberTicker value={extractNumberFromValue(value)}  delay={delay}/>
          {extractStringFromValue(value)} */}
          {value}
        </span>
      </div>
      <p className="text-sm">{label}</p>
    </div>
  )
}

export default Achivement
