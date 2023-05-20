import { useEffect, useState } from 'react'
import './App.css'
import Calculator from "./components/Calculator.jsx";
import { baseURL } from '../locals/constants.js';

function App() {
  const [calculators, setCalculators] = useState([])

  useEffect(() => {

    // Gets all of the calculator instances
    (async() => {
      const res = await fetch(`${baseURL}/calculator`);
      const calculators = await res.json();

      setCalculators(calculators);
    })()

  }, [])

  return (
    <>
      {
        calculators.map(calculator => {
          return <Calculator name={calculator.name} first_num={calculator.first_num} second_num={calculator.second_num} operation={calculator.operation} result={calculator.result}/>
        })
      }
    </>
  )
}

export default App;
