const initialState = [];

export type InitialState =  {

}

export default function counter(state = initialState, action:any):InitialState {
    switch (action.type) {
        case 'ADD_POST':
            return action.payload
        default:
            return state
    }
}