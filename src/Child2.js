import React, { useReducer } from 'react'
import counterReducer from './CounterReducer'

const Child2 = () =>{
    let [state, dispatch] = useReducer(counterReducer , 2)
    console.log(state)
    return (
        <div>
            <h1>The Value of Counter Reducer is : {state}</h1>
            <button onClick = {() =>{dispatch('INCRENMENT')}}>Add Reducer</button>

        </div>
    )
}
export default Child2