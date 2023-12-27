import React, {ChangeEvent} from "react";
import Main from '../main.module.scss';
import Style from './style.module.scss'
import Image from "next/image";
import Error from "../../../../public/assets/Error.svg"
import Info from "../../../../public/assets/info.svg"

interface Option {
  value: string;
  label: string;
}

interface SelectElementProps {
  id: string;
  label: string;
  value: string | undefined;
  updateValue: (value: string) => void;
  firstOption?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  infoText?: string;
  classProp?: string;
  inputStyle?: string;
  options: Option[]
}

const SelectElement: React.FC<SelectElementProps> = ({
  id,
  label,
  value,
  inputStyle = "standart",
  updateValue,
  firstOption = "Escolha uma opção",
  error = "",
  disabled = false,
  infoText = "",
  classProp="",
  required = false,
  options = []
}) => {

  return(
    <div className="flex flex-col relative">
      <label
        htmlFor={`input${id}`}
        className={`${Main.input_label} ${inputStyle === "inner" && Style.label_inner}` }
      >
        {`${label} ${required ? "*" : ""}`}
      </label>
      <select
        id={`input${id}`}
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => { updateValue(e.target.value) }}
        className={`${Main.input_element} ${error && Main.input_element_error} ${classProp} ${inputStyle === "inner" && Style.input_inner}`}
        disabled={disabled}
        required={required}
      >
       <option value="">
        {firstOption}
       </option>
       {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {
       !error && infoText &&
        <div className="flex items-center">
          <Image
            src={Info}
            width={16}
            alt="Icone de sucesso"
            className={`mr-1 ${Style.info_success}`}
          />
          <p className={`${Main.input_label} ${Main.input_label_info}`}>{infoText}</p>
        </div>
      }
      {
        error &&
        <div className="flex items-center">
          <Image
            src={Error}
            width={16}
            alt="Icone de erro"
            className="mr-1"
          />
          <p className={`${Main.input_label} ${Main.input_label_info_error}`}>{error}</p>
        </div>
      }
    </div>
  )
}

export default SelectElement;
