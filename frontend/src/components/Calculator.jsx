import React, { useState } from 'react'
import Input from './Input.jsx'
import Output from './Output.jsx'
import NumberContext from '../../context/numberContext.js'

const Calculator = ({ name: calcInitialName, first_num, second_num, operation: calcInitialOperation, result: calcInitialResult }) => {
    const [name, setName] = useState(calcInitialName)
    const [numbers, setNumbers] = useState([first_num, second_num]);
    const [number, setNumber] = useState('');
    const [operation, setOperation] = useState(calcInitialOperation);
    const [result, setResult] = useState(calcInitialResult);
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