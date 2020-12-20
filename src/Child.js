import react, { useContext } from 'react'
import CounterContext from './CounterContext'

const Child = () => {
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>This is First Child</h1>
            {/* <h3>My Name is {props.name}</h3> */}
            

            <h3>Value of Counter = {counterValue[0]}</h3>
            <button onClick = {()=>{counterValue[1](++counterValue[0])}}>Increment</button>

        


        </div>
    )
}
export default Child