export type InitialState = {
    mapItems: Array<TypeSchool>,
    mapItemsTotalCount: number
}

export type TypeSchool = {
    _id: string,
    name: string,
    type: 'school',
    lat: number,
    lng: number,
    JSONData: ''
}

