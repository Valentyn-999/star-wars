import {applyMiddleware, combineReducers, createStore} from 'redux'
import {starWarsReducer} from "./starWars-reducer";
import thunk from 'redux-thunk';




const rootReducer = combineReducers({
    starWars: starWarsReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;