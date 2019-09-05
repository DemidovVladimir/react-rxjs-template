import {actionTypes} from "../actions/exampleActions";

export const InitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            })
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: InitialState.count
            })
        default:
            return state
    }
}
