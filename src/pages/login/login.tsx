import Image from 'next/image'
import react, {useState} from 'react'
import NutriImg from "../../../public/assets/login-nutri.png"
import InputElement from 'Components/FormElements/Input'
import PasswordInput from '../../Components/FormElements/InputPassword/index'

const Login = () => {

  const [isNutri, setIsNutri] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [credential, setCredential] = useState<string>("")
  const [Password, setPassword] = useState<string>("")

  return (
    <div className="h-screen md:flex lg:flex">
      <Image src={NutriImg} width={"1110"} height={1080} alt="nutricionista"/>

      <div className="flex items-center justify-center m-auto">
        <div className="flex flex-col w-80">
          <h1>Faça Login na sua conta</h1>

          <div>
            <div>
              Nutricionista
            </div>
            <div>
              Pacientes
            </div>
          </div>

          <InputElement
            id="Nutri"
            type="text"
            label="Cpf/Cnpj"
            value={credential}
            updateValue={setCredential}
          />

          <InputElement
            id="client"
            type="email"
            label="E-mail"
            value={email}
            updateValue={setCredential}
          />

        </div>
      </div>

    </div>
  )
}

export default Login
