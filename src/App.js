import React, { useState } from "react";
import './App.css';

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <div className="num-input">
        <input onChange={(e) => setInput1(e.target.value)} type="number" placeholder="0" value={input1}/>
        <input onChange={(e) => setInput2(e.target.value)} type="number" placeholder="0" value={input2}/>
        <p>{Number(input1) + Number(input2)}</p>

      </div>

      <button onClick={() => {setTotal(Number(input1) + Number(input2))}}>Add Them!</button>
      { <h2>{total}</h2>}
    </div>
  );
}

export default App;
