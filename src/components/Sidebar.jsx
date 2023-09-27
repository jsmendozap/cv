import usa from '../media/united-states.png'
import spain from '../media/spain.png'
import foto from '../media/Foto.jpg'
import React from 'react'
import Label from './Label'
import Language from './Language'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen w-1/6 bg-black items-center justify-center fixed'>
        <img src={foto} alt='foto' className='rounded-full h-32 w-32 object-cover object-top mb-7 border-4 border-gray-500'/>
        <span className='text-white font-bold'>Juan S. Mendoza</span>
        <span className='text-gray-400'>Ingeniero Forestal</span>
        <div className='flex flex-col my-10'>
          <Label id='#home' label='Inicio'/>
          <Label id='#about' label='Acerca de mí'/>
          <Label id='#interest' label='Intereses'/>
          <Label id='#experiences' label='Experiencia laboral'/>
          <Label id='#publications' label='Publicaciones'/>
          <Label id='#contact' label='Contacto'/>
        </div>
        <div className='flex'>
          <Language flag={spain} />
          <Language flag={usa} />
        </div>
    </div>
  )
}

export default Sidebar