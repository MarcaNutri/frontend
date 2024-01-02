'use client'
import react, {useState} from 'react'
import Styles from '../style.module.scss'

//Components
import ButtonElement from '@/components/formElements/button'
import InputElementPassword from '@/components/formElements/inputPassword'

const UpdatePassword = () => {

  const [email, setEmail] = useState<string>("")

  return (
    <form className={`flex justify-center items-center p-4`}>

      <div className='mt-24'>
        <div className='mb-4'>
          <InputElementPassword
            id="password"
            label="Senha"
            placeholder='Digite sua nova senha'
            value={email}
            updateValue={setEmail}
            inputStyle='inner'
          />
        </div>
        <InputElementPassword
          id="passwordConfirm"
          label="Confirme sua senha"
          placeholder='Confirme sua senha'
          value={email}
          updateValue={setEmail}
          inputStyle='inner'
        />
        <div className='flex flex-col justify-center items-center'>
          <p
            className={`${Styles.secundary_color} ${Styles.paragraph} text-center max-w-[34rem]  lg:text-xl mt-6 mb-8`}
          >
            A senha deve conter: no mínimo 8 caracteres; pelo menos: 1 número, 1 caractere especial [@$!%*?&#], 1 letra maiúscula e 1 letra minúscula..
          </p>
          <ButtonElement
            text='Redefinir sua senha'
            styleButton="round"
          />
        </div>
      </div>

    </form>
  )
}


export default UpdatePassword
