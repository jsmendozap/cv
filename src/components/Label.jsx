import React from 'react'

const Label = ({id, label}) => {
  return (
    <li className='text-white my-2 cursor-pointer hover:text-gray-600'>
      <a href={id}>{label}</a>
    </li>
  )
}

export default Label