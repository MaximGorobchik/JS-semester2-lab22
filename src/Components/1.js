import React, { useState } from 'react'

const Task_1 = () => {
    const [input, setInput] = useState("");
    const [borderColor, setBorderColor] = useState("red");

    const handleInput = (e) => {
        setInput(e.target.value);
        if (input.length >= 4 && input.length <= 9) {
            setBorderColor("green");
        }
        else {
            setBorderColor("red");
        }
    }

    return (
        <div>
            <input type="text" value={input} placeholder="Enter text" onChange={handleInput} style={{ borderColor: borderColor }}></input>
        </div>
    );
}

export default Task_1;