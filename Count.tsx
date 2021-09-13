import React, {useState} from "react";

interface State {
    count: number;
}

export default function Counter(): JSX.Element {
    const [count, setCounter] = useState(0);
    const state: State = { count: 0 };

    const increment = (): any => {
        setCounter(count+1)
    };
    const decrement = (): any => {
        setCounter(count-1)
    };
    return (
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <div key={count}>{count}</div>
            </div>
        </div>
    );
}