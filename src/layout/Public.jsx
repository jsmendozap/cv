import React from 'react'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'

const Public = () => {
  return (
    <div className='flex flex-row'>
        <Sidebar />
        <Body />
    </div>
  )
}

export default Public