import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

  const Cart = () => {
  const {cart} = useSelector((state)=>state)
  const [totalAmount,setTotalAmount] =useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc+ curr.price,0));
  },[cart])

  return (
  <div>
    
    {
      cart.length>0 ? 
      (<div className="flex items-center w-11/12 max-w-[1160px] mx-auto justify-between">


<div >
  {
    cart.map( (item,index) => { 
      return <CartItem key={item.id} item={item} itemIndex={index} />
    } )
  }
</div>

<div className="flex flex-col w-[30%] mt-[-20px]">

  <div className="flex flex-col">
    <div  className="font-semibold text-xl text-green-800 ">Your Cart</div>
    <div className="text-4xl font-bold uppercase text-green-700">Summary</div>
    <p>
      <span className="text-gray-700 font-semibold relative top-4 text-xl">
      Total Items: {cart.length}</span>
    </p>
  </div>

  <div className="flex flex-col l-2 top-40 relative">
    <p className="text-xl font-bold">Total Amount: ${totalAmount}</p>
    <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl  animate-pulse">
      CheckOut Now
    </button>
  </div>

</div>


</div>) : 
      ((<div className="flex flex-col items-center justify-center mt-80">
      <h1 className="text-xl font-semibold">Cart Is Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-700 px-8 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
          Shop Now
        </button>
      </Link>
    </div>))
    }
  </div>
  )
};

export default Cart;
