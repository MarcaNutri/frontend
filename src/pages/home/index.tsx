import React, { useState } from "react";
import Style from './style.module.scss'
import Footer from 'Components/ScreenComponentes/Footer'
import NavBar from "Components/ScreenComponentes/NavBar";
import InputElementWithInnerLabel from "Components/FormElements/InputWithInnerLabel";
import ButtonElement from "Components/FormElements/Button";

const CostumerRegistration = () => {
  const [name, setName] = useState<string>("")
  const [date, setDate] = useState<string>("")


  return (
    <>
      <div className="max-w-[88rem] m-auto">
        <NavBar/>
        <div className="p-2 md:p-8">
          <div className="lg:flex justify-between items-center mt-6 mb-6">
            <h1 className={`${Style.title}`}>Faça seu cadastro</h1>
            <p className={`${Style.account} text-end lg:text-left`}>Já tem uma conta? <span className={`${Style.account_green}`}>Faça Login</span></p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CostumerRegistration
