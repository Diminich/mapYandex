import { applyMiddleware } from "redux";
import {combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducerSchool from "./school-reducer";
import schoolsReducers from "./schools-reducer";


let reducers = combineReducers({
    schoolPage: reducerSchool,
    schoolsPage: schoolsReducers
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof reducers>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default store;