import React from 'react'
import forest from '../media/forest.jpg'
import ReactTyped from "react-typed";
import { useLang } from '../context/Lang';

const Home = () => {

  const { lang } = useLang()

  const es_strings = ['Ingenieria Forestal', 'Sensores Remotos', 'Análisis espacial', 'Modelación Forestal']
  const en_strings = ['Forest Engineering', 'Remote Sensing', 'Spatial Analysis', 'Forest Modeling']

  return (
    <div>
        <img src={forest} alt='forest' className='h-screen w-screen'/>
        <div className="absolute top-24 left-1/2 flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-green-600">Juan Mendoza</h1>
                <p className="mt-4 text-2xl text-gray-900 font-semibold">
                    {''}
                    <ReactTyped 
                        strings={lang === 'es'? es_strings : en_strings}
                        typeSpeed={80} loop />    
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default Home