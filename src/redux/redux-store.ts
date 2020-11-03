import {combineReducers, createStore} from "redux";
import reducerSchool from "./school-reducer";


let reducers = combineReducers({
    schoolPage: reducerSchool
});

let store = createStore(reducers);
export type AppStateType = ReturnType<typeof reducers>

export default store;