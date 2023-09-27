import React from 'react'

const Section = ({id, name, component}) => {
  return (
    <section id={id} className='h-screen w-screen'>
        <h2>{name}</h2>
        {component}
    </section>
  )
}

export default Section