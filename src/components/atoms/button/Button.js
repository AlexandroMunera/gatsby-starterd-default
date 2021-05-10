import React from "react"
import * as styles from "./button.module.scss"

// type ButtonProps = {
//   text: string;
//   onClick: Function;
// };

export const Button = ({ type, children, onClick }) => (
  <button type={type} onClick={onClick} className= {styles.button}>
    {children}
  </button>
)
