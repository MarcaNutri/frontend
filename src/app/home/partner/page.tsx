"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Style from './style.module.scss'

//Components
import ButtonElement from "@/components/formElements/button";

//IMAGES

//Header
import NutriHeader from '@public/assets/Home/NutriHeaderYoung.png'
import ImageSectionOne from '@public/assets/Home/imageSectionOne.png'
import ImageSectionTwo from '@public/assets/Home/imageSectionTwo.png'
import ImageSectionThree from '@public/assets/Home/imageSectionThree.png'
import ImageSectionFour from '@public/assets/Home/imageSectionFour.png'
import EyeStar from '@public/assets/eyeStar.svg'
import stethoscope from '@public/assets/Home/stethoscope.svg'
import Line from '@public/assets/Home/line.svg'

//Partiner
import Check from '@public/assets/Home/CheckWhite.svg'
import CheckGreen from '@public/assets/Home/checkgreen.svg'

//Find Nutri
import FindImage from '@public/assets/Home/perfilIcons.png'
import FindImageMobile from '@public/assets/Home/perfilIconsMobile.png'

//Inform
import InformImg from '@public/assets/Home/informImg.png'
import RoundedImage from '@public/assets/Home/roundedImages.png'
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

        {/* Header */}
        <header className={`${Style.container_header}`}>
          <div className="max-w-[88rem] lg:max-w-[120rem] m-auto">
            <div className="px-2 md:p-8 lg:p-12">
              <h1 className={`${Style.title} ${Style.primary_color} text-3xl md:text-6xl lg:text-8xl`}>
              O bom da vida é estar bem!
              </h1>
              <p className={`${Style.paragraph} ${Style.primary_color} mb-6 max-w-[60rem] text-base md:text-xl lg:text-3xl`}>
                Conectamos paciente que querem ter uma alimentação mais saudável a nutricionistas qualificados.
              </p>
              <ButtonElement
                text="Quero atender na marca nutri"
                size="large"
                styleButton="rounded"
              />
            </div>
          </div>

          <div className={`${Style.header_line}`}>
            <div className="max-w-[88rem] lg:max-w-[112rem] m-auto w-ful relative p-2 md:p-6 lg:p-6">

                <div className={`${Style.tips_container}`}>
                  {/* sessão de tips */}
                  <div className={`${Style.tips_header} mr-4`}>
                    <div className={`${Style.tips_icon}`}>
                      <Image src={EyeStar} width={33} alt="Logo"/>
                    </div>
                    <h4 className={`${Style.tips_title}`}>
                    Aumente sua Visibilidade
                    </h4>
                    <div className={`${Style.tips_line}`}/>
                    <p >
                      Alcance um público mais amplo ao fazer parte da Marca Nutri.
                    </p>
                  </div>

                  <div className={`${Style.tips_header}`}>
                    <div className={`${Style.tips_icon}`}>
                      <Image src={stethoscope} width={33} alt="Logo"/>
                    </div>
                    <h4 className={`${Style.tips_title}`}>
                    Parceria para o Crescimento
                    </h4>
                    <div className={`${Style.tips_line}`}/>
                    <p>
                    Junte-se a uma plataforma comprometida em impulsionar o sucesso e crescimento dos nutricionistas parceiros.
                    </p>
                  </div>

                </div>

              <Image src={NutriHeader} width={800} alt="nutri" className={`hidden ${Style.nutri_image} lg:flex`}/>
            </div>

          </div>
        </header>
        {/*Final Header */}

        <section
          className={`max-w-[88rem] flex gap-10 flex-wrap lg:flex-wrap lg:flex-nowrap items-center justify-center m-auto text-white p-2
            md:p-6 lg:p-6 mt-20 md:mt-52 lg:mt-52 lg:max-w-[112rem]`
          }
        >
          <Image
            src={InformImg}
            alt="Check - icon"
            className="mb-8"
          />

          <div className="lg:ml-16">
            <h3 className={`${Style.paragraph} ${Style.primary_color} text-2xl lg:text-5xl mb-4 md:mb-8`}>Benefícios de se Tornar um Nutricionista Parceiro:</h3>
            <p className={`${Style.paragraph} ${Style.secundary_color} text-base font-semibold md:font-medium md:text-2xl`}>
            Aqui você terá acesso a uma base de clientes diversificada, facilidade de agendamento, pagamentos simplificados e promoção profissional.
            </p>
          </div>
        </section>

        {/* Section perfil nutri */}

        <section
          className={`${Style.container_find_nutri} flex flex-col justify-center items-center text-white p-2 md:p-6 lg:p-6 md:mt-40 lg:mt-40`}
        >
          <div
            className="max-w-[88rem] lg:max-w-[100rem] m-auto"
          >
            <div className="text-center">
              <h3 className={`${Style.paragraph} text-2xl lg:text-5xl mb-8 md:mb-16`}>
              O que é essencial incluir em um perfil profissional?
              </h3>
            </div>
            <Image
              src={screenSize < 767 ? FindImageMobile : FindImage }
              alt="Check - icon"
              className="mb-8"
            />
          </div>
        </section>

        {/* infos section */}
        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <div className={`${Style.primary_color} ${Style.paragraph}`}>
            <p className="font-light max-w-[44rem] lg:text-xl">
            Cada nutricionista é uma peça única no quebra-cabeça da saúde. Destaque sua especialização e ajude a construir um quadro mais completo para atrair pacientes específicos.
            </p>
          </div>
          <Image
            src={RoundedImage}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-1 md:mr-2"
          />
        </section>

        <Image
          src={Line}
          alt="line - icon"
          className="w-full"
        />

        {/* GERENC section */}
        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <Image
            src={ImageSectionOne}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-4 md:mr-2 ml-4"
          />
          <div className={`${Style.primary_color} ${Style.paragraph} flex items-center justify-center flex-col max-w-[58rem]`}>
            <p className="max-w-[44rem] text-xl lg:text-3xl text-center mb-8">
              O nosso gerenciamento de agendamentos:
            </p>
            <div className="flex items-center justify-center gap-3 flex-col mb-8 flex-wrap md:flex-row lg:flex-row md:flex-nowrap lg:flex-nowrap">
              <div>
                <p className={`lg:text-xl ${Style.secundary_color} mb-4`}>
                  Visão Geral do Calendário:
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl ${Style.secundary_color} mb-4`}>
                  Ao acessar o painel, você será recebido com uma visão clara e intuitiva do seu calendário.
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl ${Style.secundary_color} mb-4`}>
                  Cada consulta é destacada com informações essenciais, como nome do paciente, necessidades da consulta e horário.
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl ${Style.secundary_color}`}>
                  A diferenciação de cores ajuda a identificar rapidamente os horários disponíveis, ocupados e pendentes.
                </p>
              </div>

              <div>
                <p className={`lg:text-xl ${Style.secundary_color} mb-4`}>
                Controle Total sobre os Horários:
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl ${Style.secundary_color} mb-4`}>
                  Cada consulta agendada exibe opções claras para aceitar, rejeitar ou reagendar.
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl ${Style.secundary_color} mb-4`}>
                  O sistema envia notificações automáticas para pacientes quando há uma resposta sobre a consulta.
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl ${Style.secundary_color}`}>
                  Receba alertas instantâneos sobre novas solicitações de consulta, alterações no agendamento ou cancelamentos.
                </p>
              </div>

            </div>

            <p className="max-w-[44rem] text-xl lg:lg:text-xl text-center mt-4 mb-6">
            Histórico Organizado:
            </p>

            <div className="flex items-center justify-center gap-3 flex-col flex-wrap md:flex-row lg:flex-row md:flex-nowrap lg:flex-nowrap">
              <p className={`flex max-w-[32rem] font-light lg:text-xl ${Style.secundary_color}`}>
                <Image src={CheckGreen} width={33} alt="check icon" className="mr-2"/>
                Receba alertas instantâneos sobre novas solicitações de consulta, alterações no agendamento ou cancelamentos.
              </p>
              <p className={`flex max-w-[32rem] font-light lg:text-xl ${Style.secundary_color}`}>
                <Image src={CheckGreen} width={33} alt="check icon" className="mr-2"/>
                Receba alertas instantâneos sobre novas solicitações de consulta, alterações no agendamento ou cancelamentos.
              </p>
            </div>

          </div>
        </section>

        <Image
          src={Line}
          alt="line - icon"
          className="w-full"
        />

        {/* infos section */}
        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <div className={`${Style.primary_color} ${Style.paragraph}`}>
            <p className="font-light max-w-[44rem] lg:text-xl mb-8">
            Com a <span className="font-bold">MarcaNutri</span>, seu gerenciamento de consultas se torna eficiente, permitindo que você se concentre no que faz de melhor: oferecer aconselhamento nutricional excepcional e promover a saúde.
            </p>
            <ButtonElement
              text="Quero atender na marca nutri"
              size="large"
              styleButton="rounded"
            />
          </div>
          <Image
            src={ImageSectionTwo}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-1 md:mr-2"
          />
        </section>

        {/* PAYMENT */}
        <section className={`${Style.container_partiner} text-white flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 md:p-6 lg:p-8`}
        >
          <Image
            src={ImageSectionThree}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-4 md:mr-2 ml-4"
          />
          <div className={`${Style.paragraph} flex items-center justify-center flex-col max-w-[58rem]`}>
            <p className="max-w-[44rem] text-xl lg:text-3xl text-center mb-6">
            Políticas de Pagamento e Tarifas para Nutricionistas:
            </p>
            <div className="flex items-center justify-center gap-3 mb-8 flex-col flex-wrap md:flex-row lg:flex-row md:flex-nowrap lg:flex-nowrap">
              <div>
                <p className={`lg:text-xl mb-4`}>
                Remuneração:
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl  mb-4`}>
                Os nutricionistas serão remunerados de acordo com o número de agendamentos realizados através da plataforma.
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl`}>
                A remuneração será calculada com base em uma porcentagem pré-acordada do valor da consulta.
                </p>
              </div>

              <div>
                <p className={`lg:text-xl  mb-4`}>
                Pagamento por Agendamento:
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl  mb-4`}>
                O nutricionista só efetuará o pagamento quando houver agendamentos concretizados pela plataforma.
                </p>
                <p className={`max-w-[32rem] font-light lg:text-xl`}>
                Os pagamentos aos nutricionistas serão processados de maneira segura e eficiente.
                </p>
              </div>

            </div>

            <p className="max-w-[44rem] text-xl lg:lg:text-xl text-center mt-4 mb-8">
            Compromisso de Entrega de Clientes:
            </p>

            <div className="flex items-center justify-center gap-3 flex-col flex-wrap md:flex-row lg:flex-row md:flex-nowrap lg:flex-nowrap">
              <p className={`flex max-w-[32rem] font-light lg:text-xl`}>
                <Image src={Check} width={33} alt="check icon" className="mr-2"/>
                Comprometemo-nos a promover ativamente a plataforma para atrair clientes em potencial.
              </p>
              <p className={`flex max-w-[32rem] font-light lg:text-xl`}>
                <Image src={Check} width={33} alt="check icon" className="mr-2"/>
                Monitoraremos o desempenho da plataforma em gerar agendamentos para os nutricionistas.
              </p>
            </div>

          </div>
        </section>

        {/* infos section */}
        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          md:mt-20 lg:mt-20 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <div className={`${Style.primary_color} ${Style.paragraph}`}>
            <p className="font-light max-w-[44rem] lg:text-xl mb-8">
            Ao aderir à nossa plataforma, os nutricionistas podem confiar em um modelo de pagamento justo e transparente, alinhado com o compromisso de impulsionar o crescimento dos seus negócios.
            </p>
          </div>
          <Image
            src={ImageSectionFour}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-1 md:mr-2"
          />
        </section>

        <Accordion
          title="Nutricionistas"
          contents={[
            {
              title:'A plataforma é segura?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'Recebo lembretes das consultas agendadas?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'Serei avaliado por meus pacientes?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'O que são as taxas sobre agendamento?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
              title:'Como eu recebo o valor da consulta?',
              content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]}
        />
      </div>
    </>
  )
}

export default Partner
