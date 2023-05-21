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

  const addCalculator = async() => {
    const name = prompt("Name The Calculator! (has to be distinct)");
    const res = await fetch(`${baseURL}/calculator/create`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // Name is in use!
    if(res.status == 405) {
      const message = await res.json();
      alert(message);
      return
    }

    // If name is empty, then ignore.
    if(!name) return

    const calculator = await res.json();

    setCalculators(prev => [...prev, calculator]);
  }

  return (
    <>
      <main className=' bg-slate-900 h-screen w-screen m-0 p-0 flex flex-col' style={{alignItems: 'center'}}>
      <div style={{
        display: 'flex',
        flexGrow: '1',
        gap: '10px'
      }}>
        {
          calculators.map(calculator => {
            return <Calculator name={calculator.name} first_num={calculator.first_num} second_num={calculator.second_num} operation={calculator.operation} result={calculator.result}/>
          })
        }
      </div>
        <button onClick={addCalculator} style={{ 
          backgroundColor: 'gainsboro',
          padding: "5px",
          borderRadius: "2rem",
          margin: "2px"
         }}>Add Calculator Instance</button>
      </main>
    </>
  )
}

export default App;
