import React from 'react'

const Section = ({id, name}) => {
  return (
    <section id={id} className='h-screen'>
        <h2>{name}</h2>
        <span>aquí va el contenido de la seccion {name}</span>
    </section>
  )
}

export default Section