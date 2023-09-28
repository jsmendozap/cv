import React from 'react'

const Section = ({id, component}) => {
  return (
    <section id={id} className='h-screen w-screen'>
        {component}
    </section>
  )
}

export default Section