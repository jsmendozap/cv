import React from 'react'
import foto from '../media/Foto.jpg'
import { useLang } from '../context/Lang'
import email from '../media/gmail.png'
import gh from '../media/github.png'
import linkedin from '../media/linkedin.png'

const About = ({ title, subtitle, info }) => {

    const { lang } = useLang()

    return (
        <div className='mt-8 ml-72 mr-16'>
            <div className='text-left pb-5 border-b-2 border-gray-200'>
                <h2 className='font-bold text-gray-900 text-5xl pb-2' style={{fontFamily: 'Bree Serif'}}>
                    {lang === 'en' ? title.en : title.es}
                </h2>
                <h3 className='text-red-700' style={{fontFamily: 'Inclusive Sans'}}>
                    {lang === 'en' ? subtitle.en : subtitle.es}
                </h3>
            </div>
            <div className='flex flex-row mt-10 h-96'>
                <img src={foto} alt='foto' className='h-80 mr-20 border-2 border-gray-200 rounded-md'/>
                <div className='flex flex-col'>
                    <div className='pb-4 border-b-2 border-red-100'>
                        <div style={{fontFamily: 'Inclusive Sans'}}>
                            <p className='font-semibold text-3xl pb-2'>
                                {lang === 'en' ? info.en[0] : info.es[0]}
                            </p>
                            <span className='font-semibold text-xl'>
                                {lang === 'en' ? info.en[1] : info.es[1]}
                            </span>
                        </div>
                        <p className='text-justify text-lg pt-6' style={{fontFamily: 'Mukta'}}>
                            {lang === 'en' ? info.en[2] : info.es[2]}
                        </p>
                    </div>
                    <div className='mt-4 mb-3 text-left'>
                        <p className='flex mb-3'>
                            <img src={email} alt='e-mail' className='w-5 h-5 mr-2'/>
                            <span>jsmendozap@gmail.com</span>
                        </p>
                        <p className='mb-3'>
                            <a className='flex' href='https://github.com/jsmendozap' target='_blank'>
                                <img src={gh} alt='GitHub' className='w-5 h-5 mr-2'/>
                                <span>@jsmendozap</span>
                            </a>
                        </p>
                        <p>
                            <a className='flex' href='https://www.linkedin.com/in/jsmendozap/' target='_blank'>
                                <img src={linkedin} alt='Linkdin' className='w-5 h-5 mr-2'/>
                                <span>Juan Mendoza</span>
                            </a>
                        </p>
                    </div>
                    <span className='rounded-full p-3 bg-gray-400 w-32 ml-96'>
                        <a href={lang === 'en' ? 'CV.pdf' : 'HV.pdf'} download='CV.pdf'>
                            {lang === 'en' ? 'Download CV' : 'Descargar CV'}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About