import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [op, setOp] = useState("");
  const [ans, setAns] = useState("");

  
  const handleNum = (e) => {
    if(op === ""){
      setInput1(input1 + e.target.value);
    }
    else{
      setInput2(input2 + e.target.value);
    }
    
  }

  const handleOp = (e) => {
    setOp(e.target.value);
  }

  const calc = () => {
    if(op === "+"){
      setAns(parseInt(input1) + parseInt(input2));
    }
    else if(op === "-"){
      setAns(parseInt(input1) - parseInt(input2));
    }
    else if(op === "*"){
      setAns(parseInt(input1) * parseInt(input2));
    }
    else if(op === "/"){
      setAns(parseInt(input1) / parseInt(input2));
    }
    setInput1("");
    setInput2("");
    setOp("");
  }

  const clear = () => {
    setInput1("");
    setInput2("");
    setOp("");
    setAns("");
  }
  

  return (
    <div>
      <div>
        <input type="text" value={input1 + " " + op + " " + input2 + " = " + ans}></input>
      </div>
      <div>
        <button value="0" onClick={handleNum}>0</button>
        <button value="1" onClick={handleNum}>1</button>
        <button value="2" onClick={handleNum}>2</button>
        <button value="+" onClick={handleOp}>+</button>
      </div>
      <div>
        <button value="3" onClick={handleNum}>3</button>
        <button value="4" onClick={handleNum}>4</button>
        <button value="5" onClick={handleNum}>5</button>
        <button value="-" onClick={handleOp}>-</button>
      </div>
      <div>
        <button value="6" onClick={handleNum}>6</button>
        <button value="7" onClick={handleNum}>7</button>
        <button value="8" onClick={handleNum}>8</button>
        <button value="*" onClick={handleOp}>*</button>
      </div>
      <div>
        <button value="9" onClick={handleNum}>9</button>
        <button value="=" onClick={calc}>=</button>
        <button value="AC" onClick={clear}>AC</button>
        <button value="/" onClick={handleOp}>/</button>
      </div>
      
      
    </div>
  );
}



export default App;
