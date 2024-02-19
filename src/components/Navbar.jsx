import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className='flex items-center w-11/12 max-w-[1100px] mx-auto justify-between'>
      <div>
      <NavLink to="/">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTos4hVvG3NJtS2hUUL2doWBnZaOeDqtV-kA&usqp=CAU'
          width={120} height={20}
          className='relative -mt-2' alt=""
        /></NavLink>
      </div>
      <div className='flex justify-normal space-x-10 mt-4 text-white'>
      <NavLink to="/">
      <h1 className='text-lg relative -top-0'>Home</h1>
      </NavLink>
        
        <div className='text-2xl'>
        <NavLink to="/cart" >
          <BsFillCartFill/>
        </NavLink>
        <div className="relative bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce -top-7 -right-2 rounded-full top- text-white">{cart.length}</div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
