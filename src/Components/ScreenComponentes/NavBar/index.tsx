import React from "react";
import Style from './style.module.scss'
import Logo from '../../../../public/assets/logo-vazado.svg'
import LogoButton from '../../../../public/assets/logo-without-label.svg'
import Image from "next/image";

const navBar = () => {

  return(
    <div className={`flex justify-evenly items-center p-6`}>
      <Image src={Logo} width={223} alt="Logo"/>
      <div className={`flex items-center`}>
        <p
          className={`${Style.navbar_item} ${Style.navbar_item_active} mr-4 hover:brightness-75 ease-in-out duration-200`}
        >
          Home
        </p>
        <p
          className={`${Style.navbar_item} mr-4 hover:brightness-75 ease-in-out duration-200`}
        >
          Saúde com especialistas
        </p>
        <p
          className={`${Style.navbar_item} mr-4 hover:brightness-75 ease-in-out duration-200`}
        >
          Parceiros
          </p>
        <p
          className={`${Style.navbar_item} mr-4 hover:brightness-75 ease-in-out duration-200`}
        >
          Para Nutris
          </p>
        <p
          className={`${Style.navbar_item} hover:brightness-75 ease-in-out duration-200`}
        >
          Como funciona
          </p>
      </div>
      <button className={`flex ${Style.login_button} px-8 items-center`}>
        <Image src={LogoButton} width={32} alt="Logo" className={`mr-5`}/>
        <span className={`${Style.login_button_text}`}>Login</span>
      </button>
    </div>
  )
}

export default navBar
