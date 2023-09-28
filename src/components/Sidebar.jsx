import usa from '../media/united-states.png'
import spain from '../media/spain.png'
import foto from '../media/Foto.jpg'
import React from 'react'
import Label from './Label'
import Language from './Language'
import { useLang } from '../context/Lang'

const Sidebar = () => {

  const { lang } = useLang()

  return (
    <div className='flex flex-col h-screen w-1/6 bg-black items-center justify-center fixed'>
        <img src={foto} alt='foto' className='rounded-full h-32 w-32 object-cover object-top mb-7 border-4 border-gray-500'/>
        <span className='text-white font-bold'>Juan S. Mendoza</span>
        <span className='text-gray-400'>{lang === 'es' ? 'Ingeniero Forestal' : 'Forest Engineer'}</span>
        <div className='flex flex-col my-10'>
          <Label id='#home' label={lang === 'es' ? 'Inicio' : 'Home'}/>
          <Label id='#about' label={lang === 'es' ? 'Acerca' : 'About'}/>
          <Label id='#interest' label={lang === 'es' ? 'Intereses' : 'My Interests'}/>
          <Label id='#experiences' label={lang === 'es' ? 'Experiencia laboral' : 'Work Experience'}/>
          <Label id='#publications' label={lang === 'es' ? 'Publicaciones' : 'Publications'}/>
        </div>
        <div className='flex'>
          <Language flag={spain} name='es'/>
          <Language flag={usa} name='en' />
        </div>
    </div>
  )
}

export default Sidebar