import React from 'react'
import { useLang } from '../context/Lang'

const Language = ({ flag, name }) => {

  const { setLang } = useLang()

  return (
    <img src={flag} alt='language' className='mr-5 w-6 cursor-pointer' onClick={() => setLang(name)}/>
  )
}

export default Language