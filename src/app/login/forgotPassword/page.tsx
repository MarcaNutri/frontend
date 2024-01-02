'use client'
import react, {useState} from 'react'
import Styles from './style.module.scss'

//Components
import Image from 'next/image'
import ButtonElement from '@/components/formElements/button'
import InputElement from '@/components/formElements/input'

//Images
import Logo from "../../../../public/assets/logo-vazado.svg"

const forgotPassword = () => {

  const [email, setEmail] = useState<string>("")
  const [isAlredySended, setIsAlredySended] = useState<boolean>(true)

  return (
    <div className={`${Styles.container} flex justify-center items-center p-4`}>
      {
        isAlredySended ?
          (
          <div className="max-w-[34rem] w-full bg-white px-6 py-12 rounded-md">
            <Image src={Logo} width="223" className='m-auto' alt="Logo"/>
            <hr className="mt-4 mb-6"/>
            <h2
              className={`${Styles.secundary_color} ${Styles.title} mb-4 text-center lg:text-2xl`}
            >
              Redefinição de senha
            </h2>

            <div className='flex flex-col justify-center items-center'>
              <p
                className={`${Styles.secundary_color} ${Styles.paragraph} text-center max-w-[22rem]  lg:text-2xl mt-6 mb-8`}
              >
                Confira a sua caixa de e-mail!
              </p>

              <p
                className={`${Styles.secundary_color} ${Styles.paragraph} font-light text-center max-w-[24rem]  lg:text-xl mb-12`}
              >
                Enviamos para você um <span className={`${Styles.primary_color}`}>e-mail*</span> com as informações para redefinir a sua senha.
              </p>

              <ButtonElement
                text='Enviar e-mail de redefinição'
                styleButton="round"

              />
            </div>

          </div>
          )
        :
          (
            <form className="max-w-[34rem] w-full bg-white px-6 py-12 rounded-md">
              <Image src={Logo} width="223" className='m-auto' alt="Logo"/>
              <hr className="mt-4 mb-6"/>
              <h2
                className={`${Styles.secundary_color} ${Styles.title} mb-4 text-center lg:text-2xl`}
              >
                Redefinição de senha
              </h2>

              <div className='p-6'>
                <InputElement
                  id="email"
                  label="E-mail"
                  type="email"
                  placeholder='Digite seu e-mail de acesso'
                  value={email}
                  updateValue={setEmail}
                />
                <div className='flex flex-col justify-center items-center'>
                  <p
                    className={`${Styles.secundary_color} ${Styles.paragraph} text-center max-w-[22rem]  lg:text-2xl mt-6 mb-8`}
                  >
                    * O e-mail precisa ser válido e estar cadastrado no sistema.
                  </p>
                  <ButtonElement
                    text='Enviar e-mail de redefinição'
                    styleButton="round"
                  />
                </div>
              </div>

            </form>
          )
      }

    </div>
  )
}


export default forgotPassword
