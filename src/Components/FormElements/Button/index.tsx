import React from "react";
import style from '../Button/style.module.scss'

interface ButtonElementProps {
  id?:string;
  size?:string;
  text:string;
  disabled?:boolean
  styleButton?:string
}


const ButtonElement : React.FC<ButtonElementProps> = ({
  id,
  size,
  text,
  disabled,
  styleButton = "primary"
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
    } else {
      classButton = classButton + ` ${style.button_secundary}`
    }

    return classButton
  }

  return(
    <button
      id={id}
      className={handleSizeButton()}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default ButtonElement
