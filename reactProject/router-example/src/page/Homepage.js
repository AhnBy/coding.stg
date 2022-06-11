import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage=()=>{
        navigate('/products?q=pants')
    }
  return (
    <div>
        <h1>Homepage</h1>
        <Link to='/about'>Go to Aboutpage</Link>
        <button onClick={goProductPage}>Go to product page</button>
    </div>
  )
}

export default Homepage