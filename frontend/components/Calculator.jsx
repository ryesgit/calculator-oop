import React, { useState } from 'react'
import Input from './Input.jsx'
import Output from './Output.jsx'
import NumberContext from '../context/numberContext.js'

const Calculator = () => {
    const [numbers, setNumbers] = useState([]);
    const [number, setNumber] = useState('');
    const [operation, setOperation] = useState();
    const [result, setResult] = useState();
  return (
    <div className=' aspect-square w-1/2 md:w-auto md:h-1/2 mx-auto my-auto'>
        <NumberContext.Provider value={{numbers, setNumbers, number, setNumber, operation, setOperation, result, setResult}}>
            <Output />
            <Input />
        </NumberContext.Provider>
    </div>
  )
}

export default Calculator