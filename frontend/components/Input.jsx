import React, { useState } from 'react'
import '../calculator.css'
import Button from './Button.jsx'
const Input = () => {

  return (
    <>
        <div className="buttons aspect-square">
            <Button className="operator" content="+"><p>+</p></Button>
            <Button className="operator" content="-"><p>-</p></Button>
            <Button className="operator" content="/"><p>/</p></Button>
            <Button className="operator" content="*"><p>*</p></Button>
            <Button className="numeral" content="1"><p>1</p></Button>
            <Button className="numeral" content="2"><p>2</p></Button>
            <Button className="numeral" content="3"><p>3</p></Button>
            <Button className="numeral" content="4"><p>4</p></Button>
            <Button className="numeral" content="5"><p>5</p></Button>
            <Button className="numeral" content="6"><p>6</p></Button>
            <Button className="numeral" content="7"><p>7</p></Button>
            <Button className="numeral" content="8"><p>8</p></Button>
            <Button className="numeral" content="9"><p>9</p></Button>
            <Button className="others" content="clear"><p>CLEAR</p></Button>
            <Button className="numeral" content="dot"><p>.</p></Button>
            <Button className="others" content="equal"><p>=</p></Button>
            <Button className="numeral" content="0"><p>0</p></Button>
        </div>
    </>
  )
}

export default Input