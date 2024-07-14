import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementBonus } from '../actions/bonusActions'

function Bonus( ) {

  let bonus = useSelector((state)=>state.bonusReducers)
  let dispatch = useDispatch()

  function increment(){
    dispatch(incrementBonus())
  }

  return (
    <div className='w-full border p-5'>
        <center>
        <h1 className='mt-2 text-2xl text-orange-600 font-semibold'>Bonus Component</h1>
        <h1 className='mt-3 text-2xl text-yellow-600 font-semibold'>Total point : {bonus.points}</h1>
        <button 
        onClick={increment}
        className='p-2 bg-slate-500 rounded-lg mt-5'>Increment +</button>
        </center>
    </div>
  )
}

export default Bonus