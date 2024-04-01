import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Label = ({id, label}) => {
  return (
    <AnchorLink href={id} className='text-white my-2 cursor-pointer hover:text-gray-600'>
      {label}
    </AnchorLink>
  )
}

export default Label