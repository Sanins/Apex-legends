import React, { useReducer, createContext, Dispatch } from 'react';
import './App.scss';
import { initialState, reducer } from './components/reducers/CounterReducer'
import { Actions, State } from './components/types';
// import Counter from "./components/Counter";
// import Counter5 from "./components/Counter5";
import Starships from "./components/weapons/component/Starships"

export interface IContextProps {
    state: State;
    dispatch: Dispatch<Actions>;
}

export const CounterValue = createContext({} as IContextProps);

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return (
        <div className="container">
            <Starships />
            <CounterValue.Provider value={value}>
                {/* <Counter />
                <Counter5 /> */}
            </CounterValue.Provider>
        </div>
    )
}