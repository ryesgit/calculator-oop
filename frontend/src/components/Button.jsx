import { useContext, useState } from "react";
import NumberContext from "../../context/numberContext.js";
import { baseURL } from "../../locals/constants.js";

const Button = ({className, content, children}) => {

    const { numbers, setNumbers, setNumber, number, operation, setOperation, setResult } = useContext(NumberContext);

    const handleButtonClick = (e) => {

        if(className == 'operator') {
            // Add this number to the numbers to do operations to.
            console.log(number);
            operation ? setNumbers(prev => { return { ...prev, second_num: number } }) : setNumbers(prev => { return { ...prev, first_num: number }});
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
                    
                    setNumbers()

                case 'CLEAR':
                    setNumbers({ first_num: '', second_num: '' });
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