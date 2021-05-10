import React from "react"

type props = {
  children: React.ReactNode
}
export const Label: React.FC<props> = ({ children }) => <span>{children}</span>
