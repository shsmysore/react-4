import "./StateCounter.css";
import Count from "./Count.jsx";
import { useState } from "react";

export default function StateCounter() {
    // useState is a React Hook that lets you add state to functional components.
    // It returns an array with two elements: the current state value and a function to update it.
    console.log("StateCounter component starting...");

    let [count, setCount] = useState(0);

    function handleIncrement() {
        // setCount(count + 1);   It works, but it's not the recommended way.
        // Don't manually increment the count variable by calling something like ++count, use setCount to update the state to a new value.
        // Think of it like a new value that replaces the old one.
        setCount(prevCount => prevCount + 1);
    }

    function handleDecrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="state-counter">
            <div className="counter-title">
                <h2>State Counter</h2>
            </div>
            <div className="counter-interaction">
                <button className="counter-button minus-button" onClick={handleDecrement}>-</button>
                {/* <span className="counter-value">{count}</span> */}
                <Count number={count} />
                <button className="counter-button plus-button" onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}