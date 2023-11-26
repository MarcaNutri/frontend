import React, {ChangeEvent, useState} from "react";
import main from '../main.module.scss';
import style from './style.module.scss'
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
  error: string;
  disabled?: boolean;
}

const InputElement: React.FC<InputElementProps> = ({
  id,
  label,
  value,
  updateValue,
  placeholder = "teste",
  error = "",
  disabled = false
}) => {

  const [hidePassword, setHidePassword] = useState<boolean>(false)

  return(
    <div className="flex flex-col relative">
      <label htmlFor={`input${id}`} className={`${main.input_label}`}>{label}</label>
      <div className={`relative ${style.input_container}`}>
        <input
          id={`input${id}`}
          type={ hidePassword ? "text" : "password"}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { updateValue(e.target.value) }}
          className={error ? `${main.input_element} ${main.input_element_error}` : `${main.input_element}`}
          placeholder={placeholder}
          disabled={disabled}
        />
        <Image
          src={hidePassword ? EyeClose : EyeOpen}
          width={16}
          onClick={() => {setHidePassword(!hidePassword)}}
          alt="Hide password icon"
          className={hidePassword ? `mr-1 pointer ${style.show_img}` : `mr-1 pointer ${style.hidden_img}` }
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
          <p className={`${main.input_label} ${main.input_label_info}`}>{error}</p>
        </div>

      }
    </div>
  )
}

export default InputElement;
