'use client'
import React, { useState } from "react";
import Style from './style.module.scss'

//Apis
import * as apis from "@/services/api"

//Libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import InputElement from "@/components/formElements/input";
import InputPassword from "@/components/formElements/inputPassword"
import ButtonElement from "@/components/formElements/button";
import SelectElement from "@/components/formElements/select";
import Link from "next/link";
import Router from "next/router";

const CostumerRegistration = () => {
  const [name, setName] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [cpf, setCpf] = useState<string>("")
  const [cellPhone, setCellPhone] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [cep, setCep] = useState<string>("")
  const [cepError, setCepError] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [neighborhood, setNeighborhood] = useState<string>("")
  const [street, setStreet] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [emailConfirmation, setEmailConfirmation] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [terms, setTerms] = useState<boolean>(false)
  const [block,  setBlock] = useState<boolean>(true)

  const handleCep = (cep:string) => {
    if(cep.length < 8) {
      setCepError("Cep deve conter 8 caracteres.")
      return
    }

    apis.getAddressInfoByCEP(cep).then(response => {
      setState(response.data.uf)
      setCity(response.data.localidade)
      setStreet(response.data.logradouro)
      setNeighborhood(response.data.bairro)
      setBlock(false)
    }).catch(error => {
      toast.error("Não foi possível carregar os dados do seu endereço, insira manualmente.")
      setBlock(false)
    })
  }

  const handleSave = (e:any) => {
    e.preventDefault();

      apis.handleRegisterCustomer(
        // {
        //   typeUser: "customer",
        //   name: name,
        //   birthday: date,
        //   phoneNumber: cellPhone,
        //   document: cpf,
        //   gender:gender,
        //   cep: cep,
        //   state: state,
        //   city: city,
        //   neighborhood: neighborhood,
        //   email: email,
        //   password: password
        // },
        {
          "typeUser": "CUSTOMER",
          "name": "Guilherme Costa da Silva",
          "birthday": "1999-10-11",
          "phoneNumber": "53981081518",
          "document": "49138046008",
          "gender": "MASCULINO",
          "cep": "89253515",
          "state": "São Paulo",
          "city": "São Paulo",
          "neighborhood": "Praça da Sé",
          "email": "guilherme_rgcosta@hotmail.com",
          "password": "@Test01234"
        }
      )
      .then(response => {
        toast.success("Cadastrado com sucesso!")

        setTimeout(() => { Router.push('/login')}, 2000)
        console.log(response,'resposta')
      })
      .catch(error => {
        toast.error("Não foi possivel realizar o cadastro")
        console.log(error, 'errr')
      })
  }

  return (
    <>
      <div className="max-w-[88rem] m-auto">
        <ToastContainer
          theme="colored"
        />
        <div className="p-2 md:p-8">
          <div className="lg:flex justify-between items-center mt-6 mb-16">
            <h1 className={`${Style.title}`}>Faça seu cadastro</h1>
            <p className={`${Style.account} text-end lg:text-left`}>Já tem uma conta?
            <span className={`${Style.account_green}`}><Link href="/login" prefetch={false}>Faça Login</Link></span>
            </p>
          </div>

          <form
            onSubmit={(e) => handleSave(e)}
            className="bg-white rounded p-4 grid"
          >
            <InputElement
              id="completedName"
              label="Nome completo"
              type="text"
              value={name}
              updateValue={setName}
              placeholder="Nome social ou de registro"
              classProp="mb-2"
              inputStyle="inner"
              required
            />

            <div className="lg:grid grid-cols-2 gap-x-2">
              <InputElement
                id="birthDate"
                label="Data de nascimento"
                type="text"
                value={date}
                updateValue={setDate}
                placeholder="DD/MM/AA"
                classProp="mb-2"
                inputStyle="inner"
              />
              <InputElement
                id="cpf"
                label="CPF"
                type="text"
                value={cpf}
                updateValue={setCpf}
                placeholder="digite seu cpf"
                classProp="mb-2"
                inputStyle="inner"
                required
              />
              <InputElement
                id="CellPhone"
                label="Celular"
                type="text"
                value={cellPhone}
                updateValue={setCellPhone}
                placeholder="(00) 00000-0000"
                classProp="mb-2"
                inputStyle="inner"
              />
              <SelectElement
                id="Gender"
                label="Gênero que você se identifica"
                value={gender}
                updateValue={setGender}
                classProp="mb-2"
                inputStyle="inner"
                options={[
                  { value: 'homem', label: 'Homem'},
                  { value: 'mulher', label: 'Mulher'},
                  { value: 'não informado', label: 'Prefiro não informar'},
                ]}
              />
              <InputElement
                id="CEP"
                label="CEP"
                type="text"
                value={cep}
                updateValue={setCep}
                classProp="mb-2"
                inputStyle="inner"
                error={cepError}
                resetError={setCepError}
                max={8}
                min={8}
                onBlur={(e) => handleCep(e)}
                required
              />

             <SelectElement
                id="state"
                label="Estado"
                value={state}
                updateValue={setState}
                classProp="mb-2"
                inputStyle="inner"
                disabled={block}
                options={[
                  { value: 'AC', label: 'Acre' },
                  { value: 'AL', label: 'Alagoas' },
                  { value: 'AP', label: 'Amapá' },
                  { value: 'AM', label: 'Amazonas' },
                  { value: 'BA', label: 'Bahia' },
                  { value: 'CE', label: 'Ceará' },
                  { value: 'DF', label: 'Distrito Federal' },
                  { value: 'ES', label: 'Espírito Santo' },
                  { value: 'GO', label: 'Goiás' },
                  { value: 'MA', label: 'Maranhão' },
                  { value: 'MT', label: 'Mato Grosso' },
                  { value: 'MS', label: 'Mato Grosso do Sul' },
                  { value: 'MG', label: 'Minas Gerais' },
                  { value: 'PA', label: 'Pará' },
                  { value: 'PB', label: 'Paraíba' },
                  { value: 'PR', label: 'Paraná' },
                  { value: 'PE', label: 'Pernambuco' },
                  { value: 'PI', label: 'Piauí' },
                  { value: 'RJ', label: 'Rio de Janeiro' },
                  { value: 'RN', label: 'Rio Grande do Norte' },
                  { value: 'RS', label: 'Rio Grande do Sul' },
                  { value: 'RO', label: 'Rondônia' },
                  { value: 'RR', label: 'Roraima' },
                  { value: 'SC', label: 'Santa Catarina' },
                  { value: 'SP', label: 'São Paulo' },
                  { value: 'SE', label: 'Sergipe' },
                  { value: 'TO', label: 'Tocantins' },
                ]}
              />

              <InputElement
                id="city"
                label="Cidade"
                type="text"
                value={city}
                placeholder="Digite sua cidade"
                updateValue={setCity}
                classProp="mb-2"
                inputStyle="inner"
                disabled={block}
              />

              <InputElement
                id="neighborhood"
                label="Bairro"
                type="text"
                value={neighborhood}
                placeholder="Digite seu bairro"
                updateValue={setNeighborhood}
                classProp="mb-2"
                inputStyle="inner"
                disabled={block}

              />

              <InputElement
                id="street"
                label="Rua"
                type="text"
                value={street}
                placeholder="Digite sua rua"
                updateValue={setStreet}
                classProp="mb-2"
                inputStyle="inner"
                disabled={block}
              />
            </div>

            <InputElement
              id="email"
              label="Email"
              type="email"
              value={email}
              updateValue={setEmail}
              placeholder="Digite seu email"
              classProp="mb-2"
              inputStyle="inner"
              required
            />
            <InputElement
              id="emailConfirmation"
              label="Confirme seu email"
              type="email"
              value={emailConfirmation}
              updateValue={setEmailConfirmation}
              placeholder="Digite novamente seu email"
              classProp="mb-2"
              inputStyle="inner"
              required
            />

            <div className="lg:grid grid-cols-2 gap-2">
              <InputPassword
                id="password"
                label="Senha"
                value={password}
                updateValue={setPassword}
                placeholder="Digite uma senha"
                classProp="mb-2"
                inputStyle="inner"
                required
              />
              <InputPassword
                id="passwordConfirmation"
                label="Confirme sua senha"
                value={passwordConfirmation}
                updateValue={setPasswordConfirmation}
                placeholder="Digite novamente sua senha"
                classProp="mb-2"
                inputStyle="inner"
                required
              />
            </div>
            <div className="lg:flex items-center justify-between items-center mb-6">
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
              <p className={`${Style.account} text-end lg:text-left`}>Já tem uma conta?
              <span className={`${Style.account_green}`}><Link href="/login" prefetch={false}>Faça Login</Link></span>
              </p>
            </div>
            <ButtonElement
              id="submit"
              size="large"
              text="Cadastrar"
              type="submit"
              styleButton="rounded"
              classProp="w-full max-w-[32rem] m-auto mt-16 mb-16"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default CostumerRegistration
