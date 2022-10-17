import React from 'react'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import  {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
const Home = () => {
  const [search,setsearch]=useState('')
  const navigate=useNavigate()
  return (
     <div className='nav'>
          <NavLink id='home' to="/" >Home</NavLink>
          <input type='text' name='search'  id='search' placeholder='Enter the product' onChange={(e)=>{setsearch(e.target.value)}}></input>
          <button type='submit'className='btn' onClick={()=>navigate('/result',{state:{search}})}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
          </div>
  )
}
export default Home
