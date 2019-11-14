const initialState = [];


export default function counter(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return action.payload
        default:
            return state
    }
}