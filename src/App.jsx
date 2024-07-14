import { useState } from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';

function App() {
  const acount = useSelector((state)=>state.amountReducer)
  const bonus = useSelector((state)=>state.bonusReducers)
  return (
    <>
      <div className='p-5'>
        <p className='text-orange-600 font-bold text-xl'>App</p>
        <h1 className='mt-2 text-2xl text-yellow-500 font-semibold'>Current Amount: {acount.amount}</h1>
        <h1 className='mt-2 text-2xl text-yellow-500 font-semibold'>Total Bonus: {bonus.points}</h1>
      </div>
      <Account/>
      <Bonus/>
    </>
  );
}

export default App;
