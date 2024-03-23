import React from 'react'
import { useParams } from 'react-router-dom'

const RestMenu = () => {
    const {id} = useParams();
  
  return (
    <div>
      <h1>Rest ID : {id}</h1>
    </div>
  )
}

export default RestMenu
