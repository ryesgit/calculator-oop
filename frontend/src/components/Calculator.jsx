import React, { useEffect, useState } from 'react'
import Input from './Input.jsx'
import Output from './Output.jsx'
import NumberContext from '../../context/numberContext.js'
import { baseURL } from '../../locals/constants.js'

const Calculator = ({ name: calcInitialName, first_num, second_num, operation: calcInitialOperation, result: calcInitialResult }) => {
    const [name, setName] = useState(calcInitialName)
    const [numbers, setNumbers] = useState({ first_num: '', second_num: ''  });
    const [number, setNumber] = useState('');
    const [operation, setOperation] = useState(calcInitialOperation);
    const [result, setResult] = useState(calcInitialResult);

    useEffect(() => {
      // Check if both numbers have values
      console.log(Object.values(numbers))
      const unfilled_number = (Object.values(numbers)).some(number => {
        return number == ''
      })
      if(unfilled_number) return
      
      try {
        (async() => {
          const res = await fetch(`${baseURL}/calculator/${name}/solve`, {
            method: 'POST',
            body: JSON.stringify({ numbers, operation }),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const result = await res.json()
          console.log('Gotcha! ' + result)
          setResult(result)
          clear();
        })();
      } catch(err) {
        alert(err.toString());
      }
      }, [numbers]);

      const clear = () => {
        setNumbers({ first_num: '', second_num: '' });
        setNumber('');
        setOperation('');
      }

  return (
    <div className=' aspect-square w-1/2 md:w-auto mx-auto my-auto bg-black' style={{
      height: 'contain',
      padding: '0.5rem'
    }}>
        <h1 style={{color: 'white', fontWeight: 'bold'}}>{name}</h1>
        <NumberContext.Provider value={{numbers, setNumbers, number, setNumber, operation, setOperation, result, setResult}}>
            <Output />
            <Input />
        </NumberContext.Provider>
    </div>
  )
}

export default Calculator