import { State, Actions } from '../types';

export const initialState:State = {
    count: 0
}

export const reducer = (state: State, action: Actions) : State => {
    switch (action.type){
        case 'increment':
            return {count: state.count+1};
        case 'decrement':
            return {count: state.count-1};
        case 'reset':
            return initialState;
        default:
            return state;
    }
};