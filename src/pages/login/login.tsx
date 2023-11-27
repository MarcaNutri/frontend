import Image from 'next/image'
import react, {useState} from 'react'
import NutriImg from "../../../public/assets/Login/login-nutri.png"
import ClientImg from "../../../public/assets/Login/login-client.png"
import NutriImgTab from "../../../public/assets/Login/nutri-icon.svg"
import ClientImgTab from "../../../public/assets/Login/client-icon.svg"
import InputElement from 'Components/FormElements/Input'
import PasswordInput from '../../Components/FormElements/InputPassword/index'
import Styles from './style.module.scss'

const Login = () => {

  const [isNutri, setIsNutri] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [credential, setCredential] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <div className="h-screen md:flex lg:flex w-full p-2">
      <Image src={ isNutri ? NutriImg : ClientImg} width={"1110"} className="rounded-bl-lg rounded-tl-lg" height={1080} alt="nutricionista"/>

      <div className={`flex items-center justify-center m-auto ${Styles.container_aba} p-8`}>
        <div className="flex flex-col w-full">
          <h1 className={`${Styles.title} mb-10`}>Faça Login na sua conta</h1>

          <div className="flex justify-center mb-14">
            <div
              onClick={() => { setIsNutri(true)}}
              className={isNutri ? `${Styles.tab_active} mr-4 flex items-center` : `${Styles.tab_disabled} mr-4 flex items-center`}
            >
              <Image
                src={NutriImgTab}
                width={isNutri ? 36 : 22}
                className={isNutri ? `mr-2 ${Styles.tab_active}` : `mr-2 ${Styles.tab_disabled}`}
                alt="nutri tab icon"
              /> Nutricionista
            </div>
            <div
              onClick={() => { setIsNutri(false)}}
              className={isNutri ? `${Styles.tab_disabled} flex items-center` : `${Styles.tab_active} flex items-center`}
            >
              <Image
                src={ClientImgTab}
                width={isNutri ? 22 : 36}
                className={isNutri ? `mr-2 ${Styles.tab_disabled}` : `mr-2 ${Styles.tab_active}`}
                alt="client tab icon"
              /> Pacientes
            </div>
          </div>

          {
            isNutri ?
              <InputElement
                id="Nutri"
                type="text"
                label="Cpf/Cnpj"
                placeholder="Digite seu cpf/cnpj"
                value={credential}
                updateValue={setCredential}
                classProp="mb-6"
              />
            :
            <InputElement
              id="client"
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              updateValue={setCredential}
              classProp="mb-6"
            />
          }

          <PasswordInput
            id="password"
            label="Senha"
            placeholder="*********"
            value={password}
            updateValue={setPassword}
            error=""
          />

        </div>
      </div>

    </div>
  )
}

export default Login
