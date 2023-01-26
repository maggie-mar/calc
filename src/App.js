import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setVal] = useState(0);
  const [prevVal, setPrevVal] = useState(0);
  const [op, setOp] = useState("");
  const [ans, setAns] = useState(0);

  const handleClick = (e) => {
    
    
    setAns(e.target.value);
    if(value === "+" || value === "-" || value === "*" || value === "/"){
      setPrevVal(prevVal + ans);
      setOp(value);
      setVal(0);
    }

    else if(value === "="){
      switch(op){
        case("+"):
        console.log("add");
        setAns(parseInt(prevVal) + parseInt(value));
        break;

        case("-"):
        setAns(prevVal - value);
        break;

        case("*"):
        setAns(prevVal * value);
        break;

        case("/"):
        setAns(prevVal / value);
        break;

        default:
          setAns(value);

      }
    }
    else{
      setVal(value);
    }
  }

  return (
    <div>
      <div>
        <input type="text" value={ans}></input>
      </div>
      <div>
        <button value="0" onClick= {handleClick}>0</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="+" onClick={handleClick}>+</button>
      </div>
      <div>
        <button value="3" onClick={handleClick}>3</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="-" onClick={handleClick}>-</button>
      </div>
      <div>
        <button value="6" onClick={handleClick}>6</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="*" onClick={handleClick}>*</button>
      </div>
      <div>
        <button value="9" onClick={handleClick}>9</button>
        <button value="=" onClick={handleClick}>=</button>
        <button value="AC" onClick={handleClick}>AC</button>
        <button value="/" onClick={handleClick}>/</button>
      </div>
      
      
    </div>
  );
}



export default App;
