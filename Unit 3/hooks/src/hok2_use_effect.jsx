import React, { useState, useEffect } from 'react'

const Hook2 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Document mount")
    }, []);

    useEffect(() => {
        console.log(`You clicked ${count} times`);
    }, [count]);

    const Increment = () => { setCount(count + 1) };
    const Decrement = () => { setCount(count - 1) };

    return (
        <>
            {count} <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Hook2
