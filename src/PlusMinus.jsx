import { useRef, useState } from "react";
import MyCounter from "./MyCounter";
import MyButton from "./MyButton";



function PlusMinus(){
    const [counter, setCounter] = useState(0)
    const increament = () => {
        setCounter(counter+1)
    }
    const decrement = () => {
        setCounter(counter-1)
    }
    const reset = () => {
        setCounter(0)
    }

    


 return(

    <>
        <MyCounter counter={counter} />
        <div>
        <MyButton text={'-'} onClick={decrement} counter={counter}/>
        <MyButton text={'+'} onClick={increament} counter={counter}/>
        <MyButton text={'reset'} onClick={reset} counter={counter}/>
        </div>
    </>
   
 )
}

export default PlusMinus;