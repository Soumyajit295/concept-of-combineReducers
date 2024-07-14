import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementAmount, incrementAmount, incrementAmountByValue } from '../actions/amountActions';

function Account() {

  let [value,setValue] = useState('')

  const state = useSelector((state)=>state.amountReducer)
  const dispatch = useDispatch()

  function increment(){
    dispatch(incrementAmount())
  }

  function decrement(){
    dispatch(decrementAmount())
  }

  function incrementByVal(val){
    dispatch(incrementAmountByValue(parseFloat(val)))
  }

  return (
    <div className='w-full border p-5'>
      <center>
        <h1 className='mt-2 text-2xl text-orange-600 font-semibold'>Account Component</h1>
        <h1 className='mt-3 text-2xl text-yellow-600 font-semibold'>Amount: {state.amount}</h1>
      </center>
      <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-5 items-center mt-5 mx-auto'>
        <button
          onClick={increment}
          className='p-2 bg-slate-500 rounded-lg w-full md:w-auto'>
          Increment +
        </button>
        <button
          onClick={decrement}
          className='p-2 bg-slate-500 rounded-lg w-full md:w-auto'>
          Decrement -
        </button>
        <input
          onChange={(e)=>{setValue(e.target.value)}}
          className='p-2 rounded-lg w-full md:w-auto'
          type='text'
          placeholder='Enter amount'
        />
        <button
          onClick={()=>incrementByVal(value)}
          className='p-2 bg-slate-500 rounded-lg w-full md:w-auto'>
          Increment by {value}
        </button>
      </div>
    </div>
  );
}

export default Account;
