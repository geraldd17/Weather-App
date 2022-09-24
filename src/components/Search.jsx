import React from 'react'
import { useState } from 'react'

const Search = () => {
 const [city, setcity] = useState("")
 const onSubmit = (e) => {
    e.preventDefault()
    console.log(city)
 }

  return (
 <form onSubmit={onSubmit}>
    <div className='form-imput-principal'>
        <input type="text" className='form-input' placeholder='Buscar Ciudad' onChange={(e) => setcity(e.target.value)} />
        <button className='form-btn' type='submit'>Buscar</button>
    </div>
 </form>
  )
}

export default Search