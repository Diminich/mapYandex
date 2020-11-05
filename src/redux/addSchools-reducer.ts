import {InitialStateType} from "../Types/Types"

const ADD_LABELS = 'ADD_LABELS'
const DELETE_COORDS = 'DELETE_COORDS'
const ADD_SCHOOL_NAME = 'ADD_SCHOOL_NAME'

const initialState: InitialStateType = {
    coords: []
}

const addSchoolsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_LABELS:
            return {
                ...state,
                coords: [...state.coords,
                    { id: Symbol(),
                        coords: [
                            +action.addCords[0].toFixed(6),
                            +action.addCords[1].toFixed(6)
                        ],
                        schoolName: ''
                    }

                ]
            }
        case DELETE_COORDS:
        return  {
            ...state,
            coords: state.coords.filter(item => item.id !== action.deleteCoords)
        }
        case ADD_SCHOOL_NAME:
            return  {
                ...state,
                coords: state.coords.filter(item => {
                     if (item.id === action.id) {
                         return item.schoolName = action.addSchoolName;
                    } else {
                         return item.schoolName;
                     }
                })
            }
        default:
            return state
    }
}

export const addStateCoords = (addCords: Array<number>) => ({
    type: ADD_LABELS,
    addCords
}) as const

export const deleteStateCoords = (deleteCoords: symbol) => ({
    type: DELETE_COORDS,
    deleteCoords
})

export const addStateSchoolName = (addSchoolName: string, id: symbol) => ({
    type: ADD_SCHOOL_NAME,
    addSchoolName,
    id
})

export default addSchoolsReducer;