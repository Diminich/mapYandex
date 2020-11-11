import {InitialState, TypeSchool} from "../Types/TypesSchoolsReducer";
import {InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {schoolsApi} from "../api/api";

const GET_SCHOOLS = 'GET_SCHOOLS'
const SET_SCHOOL = 'SET_SCHOOL'
const DELETE_SCHOOL = 'DELETE_SCHOOL'

const initialState: InitialState = {
    mapItems: [],
    mapItemsTotalCount: 0
}

type ActionTypes = InferActionTypes<typeof action>;

const schoolsReducers = (state = initialState, action: ActionTypes): InitialState => {
    switch (action.type) {
        case GET_SCHOOLS: {
            return {
                ...state,
                mapItems: action.mapItems,
                mapItemsTotalCount: action.mapItemsTotalCount
            }

        }

        case SET_SCHOOL: {
            return {
                ...state,
                mapItems:  [...state.mapItems, action.school]
            }
        }

        case DELETE_SCHOOL: {
            return {
                ...state,
                mapItems: state.mapItems.filter(item => item._id !== action.id)
            }
        }
        default:
            return state
    }
}

const action = {
    getSchools: (mapItems: [], mapItemsTotalCount: number) => ({
        type: GET_SCHOOLS,
        mapItems,
        mapItemsTotalCount
    } as const),

    setSchool: (school: TypeSchool) => ({
        type: SET_SCHOOL,
        school
    } as const),

    deleteSchool: (id: string) => ({
        type: DELETE_SCHOOL,
        id
    } as const)
}

export const requestGetSchools = () => {
    return async (dispatch: Dispatch) => {
        const {data} = await schoolsApi.getSchools()
        dispatch(action.getSchools(data.mapItems, data.mapItemsTotalCount))
    }
}

export const requestPostSchools = (coords: Array<number>, schoolName: string) => {
    return async (dispatch: Dispatch) => {
        const mapItem = {
            name: schoolName,
            type: 'school',
            lat: coords[0],
            lng: coords[1],
            JSONData: ''
        }
        if (mapItem.name !== '') {
            const {data} = await schoolsApi.postSchools(mapItem)
            dispatch(action.setSchool(data))
        }
    }
}

export const requestDeleteSchool = (id: string) => {
    return async (dispatch: Dispatch) => {
        const {data} = await schoolsApi.deleteSchool(id)
        if (data.resultCode === 0) {
            dispatch(action.deleteSchool(id))
        }
    }
}

export default schoolsReducers;
