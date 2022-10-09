import React from 'react'
import { useLocation,Link} from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
const Result = () => {
let location=useLocation()
useEffect(()=>{
  axios.post('http://localhost:5000/result',{res:location.state.search}).then(function (response) {
    console.log(response);
  })
},[])
  return (
    <div>
      <div className='nav'>
          <Link to="/">Home</Link>
      </div>
     <h1>{location.state.search}</h1>
    </div>
  )
}
export default Result

