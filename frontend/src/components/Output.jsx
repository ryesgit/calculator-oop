import React, { useContext } from 'react'
import NumberContext from '../../context/numberContext.js';

const Output = () => {
    const { numbers, number, result, operation } = useContext(NumberContext);
  return (
    <div className=' bg-white w-full h-1/4 opacity-75'>
      { console.log(JSON.stringify(numbers, null, 4)) }
        <p>{(numbers.first_num && operation) ? numbers.first_num : number} {operation ? operation : ''} {(number && operation) ? number : operation ? numbers.second_num : ''}</p>
        {/* <p>{(numbers.length > 0 && operation) ? numbers.map(number => number) : ''} {operation ? operation : ''} {number}</p> */}
        <p>Result: {result}</p>
    </div>
  )
}

export default Output;