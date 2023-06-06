import React from 'react'
import { useNavigate } from 'react-router-dom'
export const OrderSummary = () => {
  let navigte = useNavigate();
    return (
    <>
    <div>Order Confirm</div>
    <button onClick={()=>{navigte(-1)}}>Back</button>
    </>
  )
}
