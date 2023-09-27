import React from 'react'
import Section from './Section'
import Home from '../pages/Home'

const Body = () => {
  return (
    <div className='w-full w-5/6 flex flex-col justify-center items-center flex-grow overflow-x-hidden'> 
      <Section id='home' name='' component={<Home/>}/>
      <Section id='about' name='Acerca de mí'/>
      <Section id='interest' name='Intereses'/>
      <Section id='experiences' name='Experiencia laboral'/>
      <Section id='publications' name='Publicaciones'/>
      <Section id='contact' name='Contacto'/>
    </div>
  )
}

export default Body