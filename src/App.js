import React, {useState} from 'react'
import './App.css';
// import About from './About';
import Parent from './Parent'
import CounterContext from './CounterContext'

function App() {
  // let [count, setCount] = useState(0);
  // let [isMorning , setMorning] = useState(true)

  let [count, setCount] = useState(0);
  const countState = useState(1)


  
  
  return (
//    <div className = {`box ${isMorning ? 'daytime' : ''}`}>

//      <About counter = {count}/>

//      <h1>Have A Good = {isMorning ? 'Morning' : 'Night'} </h1>

//      <button onClick ={()=> setCount(count + 1)} >Update Count</button>
//      <button onClick= {() => setMorning(!isMorning)}>Update Day</button>

//  </div>
  

 <CounterContext.Provider value = {countState}>
    <div>

      {/* <Parent name = "Awais"/> */}
      <Parent name = "Ali"/>
    </div>
  </CounterContext.Provider>
  
  
  );
}

export default App;
