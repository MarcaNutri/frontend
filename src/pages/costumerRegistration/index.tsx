import React, { useState } from "react";
import Style from './style.module.scss'
import Footer from 'Components/ScreenComponentes/Footer'
import NavBar from "Components/ScreenComponentes/NavBar";
import InputElementWithInnerLabel from "Components/FormElements/InputWithInnerLabel";
import ButtonElement from "Components/FormElements/Button";

const CostumerRegistration = () => {
  const [name, setName] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [cpf, setCpf] = useState<string>("")
  const [cellPhone, setCellPhone] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [cep, setCep] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [emailConfirmation, setEmailConfirmation] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [terms, setTerms] = useState<boolean>(false)

  return (
    <>
      <div className="max-w-[88rem] m-auto">
        <NavBar/>
        <div className="p-2 md:p-8">
          <div className="lg:flex justify-between items-center mt-6 mb-6">
            <h1 className={`${Style.title}`}>Faça seu cadastro</h1>
            <p className={`${Style.account} text-end lg:text-left`}>Já tem uma conta? <span className={`${Style.account_green}`}>Faça Login</span></p>
          </div>
          <div className="bg-white rounded p-4 grid">
            <InputElementWithInnerLabel
              id="completedName"
              label="Nome completo"
              type="text"
              value={name}
              updateValue={setName}
              placeholder="Nome social ou de registro"
              classProp="mb-2"
            />

            <div className="lg:grid grid-cols-2 gap-2">
              <InputElementWithInnerLabel
                id="birthDate"
                label="Data de nascimento"
                type="text"
                value={date}
                updateValue={setDate}
                placeholder="DD/MM/AA"
                classProp="mb-2"
              />
              <InputElementWithInnerLabel
                id="cpf"
                label="Cpf"
                type="text"
                value={cpf}
                updateValue={setCpf}
                placeholder="digite seu cpf"
                classProp="mb-2"
              />
              <InputElementWithInnerLabel
                id="CellPhone"
                label="Celular"
                type="text"
                value={cellPhone}
                updateValue={setCellPhone}
                placeholder="(00) 00000-0000"
                classProp="mb-2"
              />
              <InputElementWithInnerLabel
                id="Gender"
                label="Gênero que você se identifica"
                type="text"
                value={gender}
                updateValue={setGender}
                classProp="mb-2"
              />
              <InputElementWithInnerLabel
                id="CEP"
                label="CEP"
                type="text"
                value={cep}
                updateValue={setCep}
                classProp="mb-2"
              />
              <InputElementWithInnerLabel
                id="adress"
                label="Endereço"
                type="text"
                value={address}
                placeholder="Digite seu endereço completo"
                updateValue={setAddress}
                classProp="mb-2"
              />
            </div>

            <InputElementWithInnerLabel
              id="email"
              label="Email"
              type="email"
              value={email}
              updateValue={setEmail}
              placeholder="Digite seu email"
              classProp="mb-2"
            />
            <InputElementWithInnerLabel
              id="emailConfirmation"
              label="Confirme seu email"
              type="email"
              value={emailConfirmation}
              updateValue={setEmailConfirmation}
              placeholder="Digite novamente seu email"
              classProp="mb-2"
            />

            <div className="lg:grid grid-cols-2 gap-2">
              <InputElementWithInnerLabel
                id="password"
                label="Password"
                type="email"
                value={password}
                updateValue={setPassword}
                placeholder="Digite uma senha"
                classProp="mb-2"
              />
              <InputElementWithInnerLabel
                id="passwordConfirmation"
                label="Confirme sua senha"
                type="email"
                value={passwordConfirmation}
                updateValue={setPasswordConfirmation}
                placeholder="Digite novamente sua senha"
                classProp="mb-2"
              />
            </div>
            <div className="lg:flex items-center justify-between items-center mt-6 mb-6">
              <p className={`${Style.account} text-end lg:text-left mb-4`}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  className={`${Style.checkbox} mt-2 mr-2`}
                />
                Li e estou de acordo com os <span className={`${Style.account_green}`}> termos de uso</span>.
              </p>
              <p className={`${Style.account} text-end lg:text-left`}>Já tem uma conta? <span className={`${Style.account_green}`}>Faça Login</span></p>
            </div>
            <ButtonElement
              id="submit"
              size="large"
              text="Cadastrar"
              styleButton="rounded"
              classProp="w-full max-w-[32rem] m-auto mt-16 mb-16"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CostumerRegistration
