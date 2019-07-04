import React, { useContext } from 'react';
import { CounterValue } from './../App';

export default function Counter5() {
    const { state, dispatch } = useContext(CounterValue);

    return (
        <div className="counter">
            <p>Clicked Count = {state.count} </p>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </div>
    )
}