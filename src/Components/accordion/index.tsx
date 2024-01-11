'use client'
import react, {useEffect} from 'react'
import Style from './style.module.scss'

//images
import arrowDown from '@public/assets/arrowDown.svg'
import Image from 'next/image'
import ButtonElement from '../formElements/button'

interface AccordionItem {
  title: string;
  content: string;
}

const Accordion: React.FC<{ contents: AccordionItem[]; title: string }> = ({ contents, title }) => {

  useEffect(() => {
    const acc = document.getElementsByClassName(`${Style.accordion}`);

    const handleClick = function(this: HTMLElement) {
      this.classList.toggle("active");
      const panel = this.nextElementSibling as HTMLElement;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    };

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", handleClick);
    }

    return () => {
      // Remover os event listeners quando o componente for desmontado
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className='max-w-[88rem] m-auto p-4'>

      <div className='flex items-center flex-wrap justify-between mt-24 mb-24'>
        <p className={`${Style.paragraph} text-2xl lg:text-3xl ${Style.primary_color} mb-4`}>Perguntas frequentes</p>
        <div className='flex items-center p-6 bg-white rounded-lg mb-4'>
          <div className={`${Style.badge} mr-4 text-xl `}>{title}</div>
          <p className={`${Style.paragraph} text-xl lg:text-2xl ${Style.primary_color} font-light`}>Possui dúvidas?</p>
        </div>
      </div>

      <div>
        {
          contents?.map((item, index) => (
            <div key={index} className='mb-4'>
              <div className={`${Style.accordion} flex items-center justify-between`}>
                <p className={`${Style.paragraph} text-xl lg:text-2xl ${Style.primary_color}`}>{item.title}</p>
                <Image src={arrowDown} width={39} className="arrow"  alt="arrow"/>
              </div>
              <div className={`${Style.panel} ${Style.paragraph} text-lg lg:text-xl ${Style.secundary_color}`}>
                <p>{item.content}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Accordion
