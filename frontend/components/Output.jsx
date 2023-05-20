import React, { useContext } from 'react'
import NumberContext from '../context/numberContext.js';

const Output = () => {
    const { numbers, number, result, operation } = useContext(NumberContext);
  return (
    <div className=' bg-white w-full h-1/4 opacity-75'>
        <p>{numbers.length > 0 ? numbers.map(number => number) : ''} {operation ? operation : ''} {number}</p>
        <p>Result: {result}</p>
    </div>
  )
}

export default Output;