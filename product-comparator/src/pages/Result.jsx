import React from 'react'
import { useLocation,Link} from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import {useQuery} from '@tanstack/react-query'
const Result = () => {
let location=useLocation()
const [flipkart,setflipkart]=useState([])
const[amazon,setamazon]=useState([])
const[sel_flip,setsel_flip]=useState([])
const[sel_amaz,setsel_amaz]=useState([])
var {isFetching}=useQuery(['res'],()=>{
  return (axios.post('http://localhost:5000/result',{res:location.state.search}).then((res)=>{
    setflipkart(res.data.flipkart)
    setamazon(res.data.amazon)
    setsel_flip(res.data.flipkart[0])
    setsel_amaz(res.data.amazon[0])
  }).then(()=>{return 1}))})
const handleChange_f = (event) => {
  setsel_flip(flipkart[event.target.value]) ;
};
const handleChange_a = (event) => {
  setsel_amaz(amazon[event.target.value]) ;
};
if(isFetching)
{
 return <h1>loading</h1>
}
  return (
    <div>
      <div className='nav'>
          <Link to="/">Home</Link>
      </div>
     <div >
      <h1>Flipkart</h1>
        {
          <label>
          <select  onChange={handleChange_f}>
            {flipkart.map((flip,i) => (
              <option key={i} value={i}>{flip.title}</option>
            ))}
          </select>
        </label>
        }
        <img src={sel_flip.img} alt="Product" />
        <p>{sel_flip.price}</p>
        <a href={sel_flip.f_link} target="_blank" rel="noopener noreferrer">Visit</a>
      </div>
      <div >
        <h1>Amazon</h1>
        {
          <label>
          <select onChange={handleChange_a}>
            {amazon.map((amaz,i) => (
              <option key={i} value={i}>{amaz.title}</option>
            ))}
          </select>
          <img src={sel_amaz.img} alt="Product" />
          <p>{sel_amaz.price}</p>
        <a href={sel_amaz.a_link} target="_blank" rel="noopener noreferrer">Visit</a>  
        </label>
        }
      </div>
    </div>
  )
}
export default Result