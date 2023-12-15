import React, { useState } from "react";
import Footer from 'Components/ScreenComponentes/Footer'
import NavBar from "Components/ScreenComponentes/NavBar";
import InputElementWithInnerLabel from "Components/FormElements/InputWithInnerLabel";

const CostumerRegistration = () => {
  const [teste, setTeste] = useState<string>("")
  return (
    <>
      <NavBar/>
      <div className="p-6">
        <div className="flex justify-between items-center mt-6 mb-6">
          <h1>Faça seu cadastro</h1>
          <p>Já tem uma conta? <span>Faça Login</span></p>
        </div>
        <div className="bg-white rounded p-2">
          <InputElementWithInnerLabel
            id="teste"
            label="teste"
            type="text"
            value={teste}
            updateValue={setTeste}
          />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CostumerRegistration
