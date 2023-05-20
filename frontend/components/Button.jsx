import { useContext, useState } from "react";
import NumberContext from "../context/numberContext.js";
import { baseURL } from "../locals/constants.js";

const Button = ({className, content, children}) => {

    const { numbers, setNumbers, setNumber, number, operation, setOperation, setResult } = useContext(NumberContext);

    const handleButtonClick = (e) => {

        if(className == 'operator') {
            // Add this number to the numbers to do operations to.
            setNumbers(prev => [...prev, number])
            // Check what kind of operation user chose
            switch(e.target.textContent) {
                case '+':
                    setOperation('add');
                    break;
                case '-':
                    setOperation('subtract');
                    break;
                case '*':
                    setOperation('multiply');
                    break;
                case '/':
                    setOperation('divide');
                    break;
            }

            // Clear number for new number setting
            setNumber('');
        } 
        
        else if (className == 'numeral') {
            setNumber(prev => prev + e.target.textContent);
        }

        else if(className == 'others') {

            switch(e.target.textContent) {
                case '=':
                    
                    (async() => {
                        

                            const data = {
                                mode: operation,
                                num1: numbers[0],
                                num2: number
                            }

                            const res = await fetch(`${baseURL}/calculate`, {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })

                        if(res.status == 400) {
                            const error = await res.json();
                            return alert(error)
                        }

                        const result = await res.json();

                        setResult(result)
                        // Empty out numbers array
                        setNumbers([])
                        // Reset number
                    })();
                    setNumber('')

                case 'CLEAR':
                    setNumbers([]);
                    setNumber('');
                    setOperation('');
                    setResult('');
            }
        }
    }

  return (
    <div onClick={handleButtonClick} className={className} id={content}>{children}</div>
  )
}

export default Button;