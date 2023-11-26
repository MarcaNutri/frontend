import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Input from '../Components/FormElements/Input/index'
import InputPassword from '../Components/FormElements/InputPassword/index'
import Button from '../Components/FormElements/Button/index'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const [teste, setTeste ] = useState<string | undefined>()

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-2`}
    >
      <div className="mb-1 w-full">
        <Input
          id="standart"
          label={"label"}
          type={"text"}
          value={teste}
          updateValue={setTeste}
          error=""
        />
      </div>

      <div className="mb-1 w-full">
        <Input
          id="standart"
          label={"label"}
          type={"text"}
          value={teste}
          updateValue={setTeste}
          error=""
          infoText="texto teste"
        />
      </div>

      <div className="mb-1  w-full">
        <Input
          id="disabled"
          label={"Disabled"}
          type={"text"}
          value={teste}
          updateValue={setTeste}
          disabled
          error=""
        />
      </div>
      <div className="mb-1  w-full">
        <Input
          id="error"
          label={"error"}
          type={"text"}
          value={teste}
          updateValue={setTeste}
          error="Erro teste"
        />
      </div>
      <div className="mb-1  w-full">
        <InputPassword
          id="error"
          label={"Password"}
          value={teste}
          updateValue={setTeste}
          error=""
        />
      </div>

      <div className="mb-1  w-full mt-2">
        <Button
          id="button-standart-small"
          size="medium"
          text="Button small"
        />
      </div>

      <div className="mb-1  w-full">
        <Button
          id="button-standart-medium"
          size="medium"
          text="Button Medium"
        />
      </div>

      <div className="mb-1  w-full">
        <Button
          id="button-standart-large"
          size="large"
          text="Button large"
        />
      </div>

      <div className="mb-1  w-full">
        <Button
          id="button-standart-large-disabled"
          size="large"
          text="Button large disabled"
          disabled={true}
        />
      </div>

      <div className="mb-1  w-full mt-2">
        <Button
          id="button-standart-small-secundary"
          size="medium"
          text="Button small secundary"
          styleButton="secundary"
        />
      </div>

      <div className="mb-1  w-full">
        <Button
          id="button-standart-medium-secundary"
          size="medium"
          text="Button Medium secundary"
          styleButton="secundary"
        />
      </div>

      <div className="mb-1  w-full">
        <Button
          id="button-standart-large-secundary"
          size="large"
          text="Button large secundary"
          styleButton="secundary"
        />
      </div>

      <div className="mb-1  w-full">
        <Button
          id="button-standart-large-disabled-secundary"
          size="large"
          text="Button large secundary disabled "
          styleButton="secundary"
          disabled={true}
        />
      </div>
    </main>
  )
}

export default Home
