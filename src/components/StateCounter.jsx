import "./StateCounter.css";
import { useState } from "react";

export default function StateCounter() {
    // useState is a React Hook that lets you add state to functional components.
    // It returns an array with two elements: the current state value and a function to update it.
    console.log("StateCounter component starting...");

    let [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    return (
        <div className="state-counter">
            <div className="counter-title">
                <h2>State Counter</h2>
            </div>
            <div className="counter-interaction">
                <button className="counter-button minus-button" onClick={handleDecrement}>-</button>
                <span className="counter-value">{count}</span>
                <button className="counter-button plus-button" onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}