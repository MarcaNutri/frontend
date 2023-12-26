import React from "react";
import style from '../Button/style.module.scss'

interface ButtonElementProps {
  id?:string;
  size?:string;
  text:string;
  disabled?:boolean
  styleButton?:string
  classProp?:string
  type?:any
}


const ButtonElement : React.FC<ButtonElementProps> = ({
  id,
  size,
  text,
  type = "button",
  disabled,
  styleButton = "primary",
  classProp = ""
}) => {

  const handleSizeButton = () => {

    let classButton = ""

    if(size === "small") {
      classButton = `${style.button_small}`
    } else if (size === "medium" || !size) {
      classButton = `${style.button_medium}`
    } else if( size === "large") {
      classButton = `${style.button_large}`
    }

    if(styleButton == "primary") {
      classButton = classButton + ` ${style.button_primary}`
    } else if("round") {
      classButton = classButton + ` ${style.button_round}`
    } else {
      classButton = classButton + ` ${style.button_secundary}`
    }

    return classButton
  }

  return(
    <button
      id={id}
      className={`${handleSizeButton()} ${classProp}`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default ButtonElement
