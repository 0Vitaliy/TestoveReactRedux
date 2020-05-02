import postsReducer from './postsReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    postsReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
export default rootReducer;
