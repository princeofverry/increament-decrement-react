import React from "react"

function MyCounter({counter}) {
    if (counter > 9 || counter < 0) {
        counter = 'done sir'
    }
    
    return (
        <span>{counter}</span>
    )
}
export default MyCounter