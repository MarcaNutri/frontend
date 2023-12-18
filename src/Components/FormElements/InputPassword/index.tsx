import React, {ChangeEvent, useState} from "react";
import Main from '../main.module.scss';
import Style from './style.module.scss'
import Image from "next/image";
import Error from "../../../../public/assets/Error.svg"
import EyeOpen from "../../../../public/assets/eye-close.svg"
import EyeClose from "../../../../public/assets/eye-open.svg"

interface InputElementProps {
  id: string;
  label: string;
  value: string | undefined;
  updateValue: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  inputStyle?: string;
  classProp?: string;
}

const InputElement: React.FC<InputElementProps> = ({
  id,
  label,
  value,
  updateValue,
  inputStyle = "standart",
  placeholder = "teste",
  error = "",
  disabled = false,
  required = false,
  classProp=""
}) => {

  const [hidePassword, setHidePassword] = useState<boolean>(false)

  return(
    <div className="flex flex-col relative">
      <label htmlFor={`input${id}`} className={`${Main.input_label} ${inputStyle === "inner" && Style.label_inner}`}>
      {`${label} ${required ? "*" : ""}`}
      </label>
      <div className={`relative ${Style.input_container}`}>
        <input
          id={`input${id}`}
          type={ hidePassword ? "text" : "password"}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { updateValue(e.target.value) }}
          className={`${Main.input_element} ${ error && Main.input_element_error} ${classProp} ${ inputStyle === "inner" && Style.input_inner}`}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <Image
          src={hidePassword ? EyeClose : EyeOpen}
          width={16}
          onClick={() => {setHidePassword(!hidePassword)}}
          alt="Hide password icon"
          className={hidePassword ?
            `mr-1 pointer ${Style.show_img} ${inputStyle === "inner" && Style.show_img_inner}`
            : `mr-1 pointer ${Style.hidden_img} ${inputStyle === "inner" && Style.hidden_img_inner}` }
        />
      </div>

      {
        error &&
        <div className="flex items-center">
          <Image
            src={Error}
            width={16}
            alt="Error - icon"
            className="mr-1"
          />
          <p className={`${Main.input_label} ${Main.input_label_info}`}>{error}</p>
        </div>

      }
    </div>
  )
}

export default InputElement;
