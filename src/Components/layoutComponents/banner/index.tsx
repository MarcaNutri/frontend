'use client'
import React, { useEffect, useState } from "react";
import Style from './style.module.scss'
import Image from "next/image";

interface NavProps {
  text?: string;
}

const Banner: React.FC<NavProps> = ({text}) => {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return(
    <>
      <div className={`${Style.container} p-8 mt-6`}>
        <div className="max-w-[95rem] m-auto">
          <h2 className="text-left md:text-2xl lg:text-4xl">{text}</h2>
        </div>
      </div>
    </>
  )
}

export default Banner
