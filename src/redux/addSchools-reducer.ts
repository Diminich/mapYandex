import {InitialStateType} from "../Types/Types"

const ADD_LABELS = 'ADD_LABELS'
const DELETE_COORDS = 'DELETE_COORDS'

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
                        ]
            }
                ]
            }
        case DELETE_COORDS:
        return  {
            ...state,
            coords: state.coords.filter(item => item.id !== action.deleteCoords)
        }
        default:
            return state
    }
}

export const addStateCoords = (addCords: Array<number>) => ({
    type: ADD_LABELS,
    addCords
}) as const

export const deleteStateCoords = (deleteCoords: string) => ({
    type: DELETE_COORDS,
    deleteCoords
})

export default addSchoolsReducer;