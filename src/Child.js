import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const Child = () =>{
    let counterValue = useContext(CounterContext)
    // console.log(counterValue)
    return(
        <div>
            <h1>This is First Child</h1>
            <h2>The Value of Counter Context is {counterValue[0]}</h2>

            <button onClick = {()=> {counterValue[1](++counterValue[0])}}>Add Context</button>
            {/* <h3>My Name is {props.name}</h3> */}

        </div>
    )
}
export default Child