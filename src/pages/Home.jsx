import React from 'react'
import forest from '../media/forest.jpg'
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div>
        <img src={forest} alt='forest' className='h-screen w-screen'/>
        <div className="absolute top-24 left-1/2 flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-green-600">Juan Mendoza</h1>
                <p className="mt-4 text-2xl text-gray-900 font-semibold">
                    {''}
                    <ReactTyped 
                        strings={["Ingenieria Forestal",
                                  "Sistemas de Información Geográfica",
                                  "Modelación Forestal",
                                  "Programación"
                                  ]
                                }
                        typeSpeed={80} loop />    
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default Home