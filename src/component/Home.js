import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    let navigte = useNavigate();
    let orderConfirm = ()=>{
        navigte('orders')
    }
  return (
    <>
    <div>Home</div>
    <button onClick={orderConfirm}>Place Order</button>
    
    </>
  )
}
