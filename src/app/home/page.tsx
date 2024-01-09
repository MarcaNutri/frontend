"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Style from './style.module.scss'

//Components
import ButtonElement from "@/components/formElements/button";

//IMAGES

//Header
import NutriHeader from '@public/assets/Home/NutriHeader.png'
import Clock from '@public/assets/Home/clock.svg'
import stethoscope from '@public/assets/Home/stethoscope.svg'
import Search from '@public/assets/search.svg'

//Partiner
import Nutricionista1 from '@public/assets/Home/rafaela.png'
import Nutricionista2 from '@public/assets/Home/natalia.png'
import Check from '@public/assets/Home/CheckWhite.svg'
import CheckGreen from '@public/assets/Home/checkgreen.svg'
import logoWhite from '@public/assets/marcaNutriWhite.svg'

//Find Nutri
import FindImage from '@public/assets/Home/findImageSection.png'
import FindImageMobile from '@public/assets/Home/findImageSectionMobile.png'

//Inform
import InformImg from '@public/assets/Home/informImg.png'
//General
import LogoRounded from '@public/assets/Home/logoRounded.svg'
import LogoRoundedGreen from '@public/assets/Home/logoRoundedGreen.svg'
import Location from '@public/assets/location.svg'
import LocationWhite from '@public/assets/locationWhite.svg'
import RoundedImage from '@public/assets/Home/roundedImages.png'


const Home = () => {
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

        {/* Header */}
        <header className={`${Style.container_header}`}>
          <div className="max-w-[88rem] lg:max-w-[120rem] m-auto">
            <div className="px-2 md:p-8 lg:p-12">
              <h1 className={`${Style.title} ${Style.primary_color} text-3xl md:text-6xl lg:text-8xl`}>
              O bom da vida é estar bem!
              </h1>
              <p className={`${Style.paragraph} ${Style.primary_color} text-base md:text-xl lg:text-xl`}>
                Encontre aqui os melhores nutricionistas próximos a você e agende sua consulta
              </p>

              <div className={`${Style.search_input_container} flex items-center justify-between`}>
                <div className="flex">
                  <Image src={Location} width={25} alt="icone de localização" className={``}/>
                  <div className="flex flex-col">
                    <label className={`${Style.search_input_label}`}>Cidade</label>
                    <select className={`${Style.search_input}`}>
                      <option value="Porto Alegre">Porto Alegre / RS</option>
                    </select>
                  </div>
                </div>
                <Image src={Search} width={16} alt="icone de busca" className={`${Style.search_input_icon}`}/>
              </div>
            </div>
          </div>

          <div className={`${Style.header_line}`}>
            <div className="max-w-[88rem] lg:max-w-[112rem] m-auto w-ful relative p-2 md:p-6 lg:p-6">

                <div className={`${Style.tips_container}`}>
                  {/* sessão de tips */}
                  <div className={`${Style.tips_header} mr-4`}>
                    <div className={`${Style.tips_icon}`}>
                      <Image src={Clock} width={33} alt="Logo"/>
                    </div>
                    <h4 className={`${Style.tips_title}`}>
                    Agendamento Rápido
                    </h4>
                    <div className={`${Style.tips_line}`}/>
                    <p >
                      Marque sua consulta online em minutos, sem complicações.
                    </p>
                  </div>

                  <div className={`${Style.tips_header}`}>
                    <div className={`${Style.tips_icon}`}>
                      <Image src={stethoscope} width={33} alt="Logo"/>
                    </div>
                    <h4 className={`${Style.tips_title}`}>
                    Agendamento Rápido
                    </h4>
                    <div className={`${Style.tips_line}`}/>
                    <p >
                      Transforme seu bem-estar com orientação nutricional personalizada.
                    </p>
                  </div>

                </div>

              <Image src={NutriHeader} width={800} alt="nutri" className={`hidden ${Style.nutri_image} lg:flex`}/>
            </div>

          </div>
        </header>
        {/*Final Header */}

        <section className="max-w-[88rem] lg:max-w-[100rem] m-auto mt-20 md:mt-40 lg:mt-40 p-2 md:p-6 lg:p-6">
          <div className="text-center">
            <p className={`${Style.primary_color} text-lg md:font-medium`}>Na
              <span className={`${Style.success_color} text-lg font-bold`}> Marca</span>
              <span className={`${Style.primary_color}  text-lg font-bold`}>Nutri</span>, Temos
            </p>
            <p className={`${Style.success_color} text-2xl md:text-5xl font-semibold mb-1`}>Saúde com especialistas</p>
            <p className={`${Style.secundary_color} text-base font-semibold md:font-medium md:text-xl`}>Consulte com os Melhores Profissionais da área de nutrição da cidade</p>
          </div>

          <h3 className={`${Style.title} ${Style.black_color} text-4xl mt-20 mb-8 md:text-5xl lg:text-5xl lg:mt-24 lg:mb-8`}>
            Nossas especialidades
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <div className={`${Style.container_specialty}`}>
              <Image src={LogoRounded}  alt="logo" className={`${Style.container_specialty_logo}`}/>
              <p className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}>Educação alimentar</p>
              <p className={`${Style.paragraph} font-normal text-sm md:font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
            <div className={`${Style.container_specialty} ${Style.container_specialty_green}`}>
              <Image src={LogoRoundedGreen} alt="logo" className={`${Style.container_specialty_logo}`}/>
              <p className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}>Educação nutricional</p>
              <p className={`${Style.paragraph} font-normal text-sm md:font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
            <div className={`${Style.container_specialty}`}>
              <Image src={LogoRounded} alt="logo" className={`${Style.container_specialty_logo}`}/>
              <p className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}>Nutrição Clínica</p>
              <p className={`${Style.paragraph} font-normal text-sm md:font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
            <div className={`${Style.container_specialty} ${Style.container_specialty_green}`}>
              <Image src={LogoRoundedGreen} alt="logo" className={`${Style.container_specialty_logo}`}/>
              <p className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}>Nutrição em saúde da mulher</p>
              <p className={`${Style.paragraph} font-normal text-sm md:font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
          </div>
        </section>


        {/* PARTINERS */}
        <section className={`${Style.container_partiner} text-white`}>
          <div
            className="max-w-[88rem] lg:max-w-[100rem] m-auto mt-20 md:mt-40 lg:mt-40 p-2 md:p-6 lg:p-6"
          >
            <div className="flex">
              <h3 className={`${Style.paragraph} text-center lg:text-5xl flex items-center mb-8 md:mb-16 m-auto`}>
                Parceiros da <Image src={logoWhite} width={screenSize < 767 ? 83 : 262} alt="MarcaNutri" className="ml-3 mb-1"/>
              </h3>
            </div>

            {/* Container partiners */}
            <div className="flex flex-wrap itens-center justify-center gap-2.5 md:gap-6 lg:gap-6">
              <div>
                <div className={`flex mb-8 md:mb-16`}>
                  <div style={{ minWidth: '83px' }}>
                    <Image
                      src={Nutricionista1}
                      width={screenSize < 767 ? 83 : 198}
                      alt="nutricionista"
                    />
                    <p className={`text-sm font-semibold block md:hidden`}>R$ 190,00</p>
                  </div>

                  <div className="mr-3 ml-3">
                    <p
                      className={` text-base md:text-2xl font-semibold`}
                    >
                      Rafaela Ratto <span className="text-sm">- CRN: 10554P</span>
                    </p>
                    <p className={`text-xs md:text-base ${Style.text_container}`}>
                    Nutricionista clínica com atuação na área esportiva e comportamental. 2 anos de atuação no mercado...
                    </p>
                    <p className={`text-base font-semibold hidden md:block`}>
                      R$: 190,00
                    </p>
                    <p className={`text-base font-semibold hidden md:block ${Style.text_container} flex`}>
                      <Image src={LocationWhite} width={25} alt="icone de localização"/> Endereço: Rua Andrade Neves 2998, Pelotas
                    </p>

                    <div className="block md:hidden">
                      <div className="flex flex-col justify-center">
                        <p className={`text-xs md:text-base font-semibold mb-2 mt-1`}>
                          Especialidades
                        </p>
                        <p className={`flex items-center text-xs md:text-base mb-1`}>
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Esportiva
                        </p>
                        <p className={`flex items-center text-xs md:text-base mb-1`}>
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Comportamental
                        </p>
                        <p className={`flex items-center text-xs md:text-base mb-1`}>
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Funcional
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <p className={`text-xs md:text-base font-semibold mb-2`}>
                      Especialidades
                    </p>
                    <p className={`flex items-center text-xs md:text-base mb-2`}>
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Esportiva
                    </p>
                    <p className={`flex items-center text-xs md:text-base mb-2`}>
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Comportamental
                    </p>
                    <p className={`flex items-center text-xs md:text-base mb-2`}>
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Funcional
                    </p>
                  </div>
                </div>
              </div>

              {/* Segunda Parceira */}

              <div>
                <div className={`flex mb-8 md:mb-16`}>
                  <div style={{ minWidth: '83px' }}>
                    <Image
                      src={Nutricionista2}
                      width={screenSize < 767 ? 83 : 198}
                      alt="nutricionista"
                    />
                    <p className={`text-sm font-semibold block md:hidden`}>R$ 120,00</p>
                  </div>

                  <div className="mr-3 ml-3">
                    <p
                      className={` text-base md:text-2xl font-semibold`}
                    >
                      Natalia Farias <span className="text-sm">- CRN: 11347P</span>
                    </p>
                    <p className={`text-xs md:text-base ${Style.text_container}`}>
                    Sou Nutricionista formada pela UFPEL. Atualmente trabalho com a nutrição clínica e esportiva...
                    </p>
                    <p className={`text-base font-semibold hidden md:block`}>
                      R$: 120,00
                    </p>
                    <p className={`text-base font-semibold hidden md:block ${Style.text_container} flex`}>
                      <Image src={LocationWhite} width={25} alt="icone de localização" className={``}/> Endereço: Rua Andrade Neves 2998, Pelotas
                    </p>

                    <div className="block md:hidden">
                      <div className="flex flex-col justify-center">
                        <p className={`text-xs md:text-base font-semibold mb-2 mt-1`}>
                          Especialidades
                        </p>
                        <p className={`flex items-center text-xs md:text-base mb-1`}>
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Esportiva
                        </p>
                        <p className={`flex items-center text-xs md:text-base mb-1`}>
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Clínica
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <p className={`text-xs md:text-base font-semibold mb-2`}>
                      Especialidades
                    </p>
                    <p className={`flex items-center text-xs md:text-base mb-2`}>
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Esportiva
                    </p>
                    <p className={`flex items-center text-xs md:text-base mb-2`}>
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Clínica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final partiners section */}

        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          lg:justify-between md:mt-40 lg:mt-40 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <div className={`${Style.primary_color} ${Style.paragraph}`}>
            <h2 className="text-base font-bold mb-4 md:text-3xl">A melhor rede de especialista em nutrição você encontra aqui</h2>
            <div className="flex flex-wrap gap-4 text-xs mb-4">
              <div>
                <p className="flex font-bold mb-2 lg:text-2xl">
                  <Image
                    src={CheckGreen}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Agendamento personalizado
                </p>
                <p className="font-light lg:text-xl">Diga adeus às longas esperas </p>
              </div>
              <div>
                <p className="flex font-bold mb-2 lg:text-2xl">
                  <Image
                    src={CheckGreen}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Acesso rápido e fácil
                </p>
                <p className="font-light w-60 lg:text-xl">
                  Esteja sempre em dia com sua saúde monitorando com apenas um click sua evolução.
                </p>
              </div>
            </div>
            <ButtonElement
              text="Agendar Agora"
              size="large"
              styleButton="rounded"
            />
          </div>
          <Image
            src={RoundedImage}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-1 md:mr-2"
          />
        </section>

        {/* Section find nutri */}

        <section
          className={`${Style.container_find_nutri} flex flex-col justify-center items-center text-white p-2 md:p-6 lg:p-6 md:mt-40 lg:mt-40`}
        >
          <div
            className="max-w-[88rem] lg:max-w-[100rem] m-auto"
          >
            <div className="text-center">
              <h3 className={`${Style.paragraph} text-2xl lg:text-5xl mb-8 md:mb-16`}>
                Como encontrar meu nutricionista
              </h3>
            </div>
            <Image
              src={screenSize < 767 ? FindImageMobile : FindImage }
              alt="Check - icon"
              className="mb-8"
            />
          </div>
          <ButtonElement
            text="Agendar Agora"
            size="large"
            styleButton="rounded"
          />
        </section>

        <section
          className={`max-w-[88rem] flex gap-10 flex-wrap lg:flex-wrap lg:flex-nowrap items-center justify-center m-auto text-white p-2
            md:p-6 lg:p-6 mt-20 md:mt-40 lg:mt-40 lg:max-w-[112rem]`
          }
        >
          <Image
            src={InformImg}
            alt="Check - icon"
            className="mb-8"
          />

          <div className="lg:ml-40">
            <h3 className={`${Style.paragraph} ${Style.primary_color} text-2xl lg:text-5xl mb-4 md:mb-8`}>Informações sobre Benefícios:</h3>
            <p className={`${Style.paragraph} ${Style.secundary_color} text-base font-semibold md:font-medium md:text-2xl`}>
              Acompanhamento de um profissional da nutrição não apenas ajuda a alcançar objetivos especificos, como perda de peso ou controle de doenças, mas também promove uma abordagem holística para a saúde fornecendo suporte personalizado para suas necessidades individuais.
              </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
