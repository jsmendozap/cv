import React from 'react'
import Section from './Section'

const Body = () => {
  return (
    <div className='w-5/6 flex flex-col justify-center items-center'> 
      <Section id='#home' name='Inicio'/>
      <Section id='#about' name='Acerca de mí'/>
      <Section id='#interest' name='Intereses'/>
      <Section id='#experiences' name='Experiencia laboral'/>
      <Section id='#publications' name='Publicaciones'/>
      <Section id='#contact' name='Contacto'/>
    </div>
  )
}

export default Body