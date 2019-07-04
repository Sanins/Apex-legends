import React from 'react';
import { initialState, reducer } from './reducers/Counter';

const CounterReducer = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div className="counter">
            <p>Clicked Count = {state.count} </p>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterReducer;