import {combineReducers, createStore} from "redux";
import addSchoolsReducer from "./addSchools-reducer";
import reducerSchool from "./school-reducer";


let reducers = combineReducers({
    schoolPage: reducerSchool,
    addSchoolPage: addSchoolsReducer
});

let store = createStore(reducers);
export type AppStateType = ReturnType<typeof reducers>

export default store;