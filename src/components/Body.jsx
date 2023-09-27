import React from 'react'
import Section from './Section'
import Home from '../pages/Home'
import { useLang } from '../context/Lang'


const Body = () => {

  const { lang } = useLang()

  return (
    <div className='w-full w-5/6 flex flex-col justify-center items-center flex-grow overflow-x-hidden'> 
      <Section id='home' name='' component={<Home/>}/>
      <Section id='about' name={lang === 'es' ? 'Acerca de mí' : 'About Me'}/>
      <Section id='interest' name={lang === 'es' ? 'Intereses' : 'My Interests'}/>
      <Section id='experiences' name={lang === 'es' ? 'Experiencia laboral' : 'Work Experience'}/>
      <Section id='publications' name={lang === 'es' ? 'Publicaciones' : 'Publications'}/>
      <Section id='contact' name={lang === 'es' ? 'Contacto' : 'Contact'}/>
    </div>
  )
}

export default Body