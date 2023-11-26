import React, {ChangeEvent} from "react";
import main from '../main.module.scss';
import style from './style.module.scss'
import Image from "next/image";
import Error from "../../../../public/assets/Error.svg"
import Info from "../../../../public/assets/info.svg"

interface TextAreaElementProps {
  id: string;
  label: string;
  type: string;
  value: string | undefined;
  updateValue: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  infoText?: string
}

const TextAreaElement: React.FC<TextAreaElementProps> = ({
  id,
  label,
  type,
  value,
  updateValue,
  placeholder = "teste",
  error = "",
  disabled = false,
  infoText = ""
}) => {

  return(
    <div className="flex flex-col">
      <label htmlFor={`input${id}`} className={`${main.input_label}`}>{label}</label>
      <textarea
        id={`input${id}`}
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { updateValue(e.target.value) }}
        className={error ? `${main.input_element} ${main.input_element_error}` : `${main.input_element}`}
        placeholder={placeholder}
        disabled={disabled}
      />
      {
       !error && infoText &&
        <div className="flex items-center">
          <Image
            src={Info}
            width={16}
            alt="Icone de sucesso"
            className={`mr-1 ${style.info_success}`}
          />
          <p className={`${main.input_label} ${main.input_label_info}`}>{infoText}</p>
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
          <p className={`${main.input_label} ${main.input_label_info_error}`}>{error}</p>
        </div>
      }
    </div>
  )
}

export default TextAreaElement;
