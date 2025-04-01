import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Click to Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Click to Decrease</button>
        </div>
    )
}