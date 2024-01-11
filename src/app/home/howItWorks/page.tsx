"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Style from './style.module.scss'

//IMAGES
import ImageSectionThree from '@public/assets/Home/imageSectionSix.png'
import ImageSectionFour from '@public/assets/Home/imageSectionSeven.png'

//Inform
import InformImg from '@public/assets/Home/informImg.png'
import Accordion from "@/components/accordion";


const Partner = () => {
  const [screenSize, setScreenSize] = useState<any>()

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {

    setScreenSize(window?.innerWidth)
    // Adicionar um ouvinte de redimensionamento
    window.addEventListener('resize', updateScreenSize)

    // Remover o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  return (
    <>
      <div>

        <section
          className={`max-w-[88rem] flex gap-10 flex-wrap lg:flex-wrap lg:flex-nowrap items-center justify-center m-auto text-white p-2
            md:p-6 lg:p-6 mt-20 md:mt-20 lg:mt-20 lg:max-w-[112rem]`
          }
        >
          <div className="lg:ml-16">
            <p className={`${Style.paragraph} ${Style.secundary_color} text-base font-normal md:text-2xl`}>
            A consulta a um Nutricionista vai além da simples busca por uma dieta. É uma oportunidade de compreendermos melhor nossos hábitos alimentares, aprendermos a nutrir nosso corpo de maneira equilibrada e, consequentemente, promover um bem-estar duradouro. Este profissional é capaz de proporcionar orientação personalizada, considerando não apenas objetivos de peso, mas também o fortalecimento da autoestima, a prevenção de doenças e a promoção de uma relação saudável com a comida.
            </p>
          </div>

          <Image
            src={InformImg}
            alt="Check - icon"
            className="mb-8"
          />
        </section>

        {/* PAYMENT */}
        <section className={`${Style.container_partiner} text-white flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 py-8 md:p-6 lg:p-8`}
        >
          <Image
            src={ImageSectionThree}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-4 md:mr-2 ml-4"
          />

         <div className="lg:ml-16">
            <p className={`${Style.paragraph} text-base font-thin md:text-2xl max-w-[44rem]`}>
            Além disso, a consulta a um Nutricionista não é exclusiva para quem busca grandes transformações. Mesmo pequenos ajustes na alimentação podem ter impactos significativos na nossa saúde geral. Seja qual for o seu objetivo, desde o gerenciamento do peso até a melhoria da qualidade de vida, um Nutricionista pode fornecer as ferramentas necessárias para alcançar essas metas de forma sustentável.            </p>
          </div>
        </section>

        {/* infos section */}
        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <div className={`${Style.secundary_color} ${Style.paragraph}`}>
            <p className="font-light max-w-[44rem] lg:text-xl mb-8">
            Aqui na MarcaNutri, você tem tudo isto com apenas um click, agendamento personalizado, acesso rápido e fácil e o melhor, você faz tudo isso no conforto de sua casa e escolhe o melhor dia e horario para ir até o consultório realizar sua consulta, diga adeus a longas filas de espera.            </p>
          </div>
          <Image
            src={ImageSectionFour}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-1 md:mr-2"
          />
        </section>

        <Accordion
          title="Paciente"
          contents={[
            {
              title:'O que é a MarcaNutri?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'Como posso me cadastrar no MarcaNutri?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'A plataforma é segura?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'Como serei notificado das minhas consultas?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'Como é realizado o processo de pagamento?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]}
        />
      </div>
    </>
  )
}

export default Partner
