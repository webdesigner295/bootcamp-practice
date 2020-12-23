import React, { useState } from "react";
import "./App.css";
// import About from "./About";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  // let [count, setCount] = useState(1);
  // let [isMorning, setMorning] = useState(false);

  let countState = useState(0)

  

  return (
    // <div className={`box ${isMorning ? "daytime" : ""}`}>
    //   <About counter={count} />

    //   <h1>Have A Good {isMorning ? "Morning" : "Night"}</h1>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     Add Value
    //   </button>

    //   <button
    //     onClick={() => {
    //       setMorning(!isMorning);
    //     }}
    //   >
    //     Update Day
    //   </button>
    // </div>


  <CounterContext.Provider value = {countState}>
    <div>

      <Parent name = "Awais"/>
    </div>
  </CounterContext.Provider>
  );
}

export default App;
