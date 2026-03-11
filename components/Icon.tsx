import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import React from 'react'

type Props = {
    icon: IconSvgElement
    color?: string
    strokeWidth?: number
    className?: string
}

const Icon = ({icon, strokeWidth = 1.5, className}: Props) => {
  return (
    <HugeiconsIcon icon={icon} strokeWidth={strokeWidth} className={className} />
  )
}

export default Icon