import React, { useReducer, createContext, Dispatch } from 'react';
import { initialState, reducer } from './reducers/CounterReducer';
import { Actions, State } from './types';

export interface IContextProps {
    state: State;
    dispatch: Dispatch<Actions>;
}


export const CounterValue = createContext({} as IContextProps);

export default function Counter (props:any) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {state, dispatch};

    return (
        <CounterValue.Provider value={value}>
            <div className='counter'>
                <p>Clicked Count = {state.count} </p>
                <button onClick={() => dispatch({ type: 'increment'})}>+</button>
                <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
            </div>
        </CounterValue.Provider>
    );
}
