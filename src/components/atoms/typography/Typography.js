import React from "react"

export const Typography = ({ variant, children }) => {
  if (variant === "h1") {
    return <h1>{children}</h1>
  } else if (variant === "h2") {
    return <h2>{children}</h2>
  } else if (variant === "p") {
    return <p>{children}</p>
  }
}
