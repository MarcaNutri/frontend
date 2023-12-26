'use client'
import React, { useEffect, useState } from "react";
import Style from './style.module.scss'
import Image from "next/image";

//Images
import Logo from '../../../../public/assets/logo-vazado.svg'
import LogoButton from '../../../../public/assets/logo-without-label.svg'
import Menu from '../../../../public/assets/menu.svg'

interface NavProps {
  ActiveFlg?: (value: boolean) => void
}

const NavBar: React.FC<NavProps> = ({ActiveFlg}) => {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    if(ActiveFlg) ActiveFlg(showMenu)
  },[showMenu])

  return(
    <>
      <div className={`flex justify-between lg:justify-evenly items-center p-6`}>
        <Image src={Logo} width={223} alt="Logo"/>
        <div className={`hidden lg:flex items-center`}>
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
        <button className={`${Style.login_button} hidden px-8 items-center lg:flex`}>
          <Image src={LogoButton} width={32} alt="Logo" className={`mr-5`}/>
          <span className={`${Style.login_button_text}`}>Login</span>
        </button>
        <Image
          src={Menu}
          width={24}
          alt="Menu"
          className={`flex mt-4 lg:hidden cursor-pointer hover:brightness-75 ease-in-out duration-200`}
          onClick={() => setShowMenu(event => !event)}
        />
      </div>
      <div className={`${showMenu ? 'sm:flex md:flex lg:flex' : 'hidden'} w-full justify-center align-items flex-wrap lg:hidden transition-opacity ease-in-out duration-300`}>
          <p
            className={`${Style.navbar_item} ${Style.navbar_item_active} mr-4 hover:brightness-75`}
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
    </>
  )
}

export default NavBar
