import react, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import LogoBranco from '../../../../public/assets/Footer/MarcaNutri-branco.svg'
import Email from '../../../../public/assets/Footer/email.svg'
import WhatsApp from '../../../../public/assets/Footer/whatsapp.svg'
import Facebook from '../../../../public/assets/Footer/facebook.svg'
import Instagram from '../../../../public/assets/Footer/instagram.svg'

const Footer = () => {
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
  }, []) // O array vazio garante que o useEffect seja executado apenas uma vez, sem dependências

  return (
    <div className={`relative bottom-0 w-full`}>
      <div className={`${styles.footer_border} mt-32 lg:mt-32`} />
      <div className={`${styles.footer_background} p-4`}>
        <div
          className={`m-auto ${styles.footer_content} flex flex-col justify-center lg:justify-normal`}
        >
          <div
            className={`flex flex-col justify-center lg:justify-normal lg:flex-row lg:items-center lg:justify-between m-auto`}
          >
            <Image src={LogoBranco} width={260} alt="MarcaNutri" />
            <div className={`flex flex-col lg:flex-row`}>
              <div className="mr-20">
                <p className="font-semibold">Menu</p>
                <div className={`${styles.footer_line} cursor-pointer`} />
                <p className={`cursor-pointer`}>Quem somos</p>
                <p className={`cursor-pointer`}>Pra você</p>
              </div>
              <div className="mr-20 mb-6 mt-6 lg:mb-0 lg:mt-0">
                <p className="font-semibold">Links úteis</p>
                <div className={`${styles.footer_line}`} />
                <p className={`cursor-pointer`}>Politica de Privacidade</p>
                <p className={`cursor-pointer`}>Termos e Condições</p>
                <p className={`cursor-pointer`}>Ajuda e Suporte</p>
              </div>
              <div className="mb-6 lg:mb-0">
                <p className="font-semibold">Fale conosco</p>
                <div className={`${styles.footer_line}`} />
                <p className="flex mt-2">
                  <Image src={Email} width={28} alt="email" className="mr-2" />{' '}
                  contato@marcanutri.com
                </p>
                <button
                  className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`}
                  onClick={() => { window.open(`https://wa.me/5399254275?text=${'Olá, vim através do MarcaNutri e preciso de auxílio!'}`)}}
                >
                  <Image
                    src={WhatsApp}
                    width={38}
                    alt="email"
                    className="mr-3"
                  />{' '}
                  Atendimento
                </button>
              </div>
            </div>
          </div>
          <p>Demétrio ribeiro, 1219 - Pelotas RS CEP 96030-022</p>
          <div className="flex mt-4 mb-4">
            <Image
              src={Facebook}
              width={40}
              alt="facebook"
              className="mr-2 cursor-pointer hover:brightness-90 ease-in-out duration-200"
              onClick={() => {window.open("https://www.facebook.com/marcanutri")}}
            />

            <Image
              src={Instagram}
              width={40}
              alt="instagram"
              className="mr-2 cursor-pointer hover:brightness-90 ease-in-out duration-200"
              onClick={() => {window.open("https://www.instagram.com/marcanutri/")}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
