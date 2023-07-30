import React from "react";

function MyButton({text, onClick, counter}) {
    const disabled = (text !== 'reset')?((counter > 9 || counter < 0)? true:false) : ((counter>9 || counter <0) ? false:true)

    return (
        <button onClick={onClick} disabled={disabled} >{text}</button>
    )
}

export default MyButton