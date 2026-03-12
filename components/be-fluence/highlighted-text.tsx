import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HighlightedText = ({children}: Props) => {
  return (
    <span className="inline-block -rotate-1 rounded-md bg-linear-to-t from-primary to-primary/40 px-2 py-1 font-semibold text-teal-200">
        <span className="inline-block bg-linear-to-r from-teal-200 to-teal-50 bg-clip-text text-transparent">
            {children}
        </span>
    </span>
  )
}

export default HighlightedText