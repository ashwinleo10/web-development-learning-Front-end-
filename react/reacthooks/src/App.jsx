import React, { useEffect, useRef, useState } from 'react'
import Greeting from './Greeting';



export default function App() {
  const [name, setName] = useState("Alice");  // This is useState hook Which is used to add state to functional components. 
  const [color, setColor] = useState("blue");
  const [count, setCount] = useState(0);
  const [precount, setPrecount] = useState(0);

  // This is useEffect hook which is used to perform side effects in function components.
  useEffect(() => {
    setTimeout(() => {
      setPrecount((precount) => precount + 1);
    }, 1000);
  });

  //This is useRef hook which is used to persist values between renders. 
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>  
      <Greeting name={name}/>
      <button onClick={() => setName("John")}>Change Name</button>
      <h1>My Fav color is {color}</h1>
      <button onClick={() => setColor("Black")}>Change Color</button>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>

      <h1>Count is {precount}</h1>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
