interface State {
    count: number
}
export const initialState:State = {
    count: 0
}

type Actions = 'reset' | 'increment' | 'decrement'

interface Action {
    type: Actions
}

export const reducer = (state: State, action: Action) : State => {
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