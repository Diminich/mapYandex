export type TypeSchools = {
    schools: Array<TypeSchoolParameters>
}

export type TypeSchoolParameters = {
    "name": string,
    "website": string,
    "levels": Array<string>,
    "format": string,
    "format_description": string,
    "gender": string,
    "description": string | null,
    "languages": Array<string>,
    "money_needed": boolean,
    "online_only": boolean,
    "number_of_students": null,
    "contact_name": string | null,
    "contact_number": string | null,
    "contact_email": string | null,
    "latitude": number,
    "longitude": number,
    "street": string,
    "city": string,
    "state": string,
    "zip": string | null,
    "published": number,
    "updated_at": string,
    "country": string,
    "source": string
}

export type MapSchoolProps = {
    center: Array<number>,
    zoom: number
}

export type getCoordsProps = {
    coords: Array<number>
}

export type CoordsType = {
    id: symbol,
    coords: Array<number>,
    schoolName: string
}

export type InitialStateType = {
    coords: Array<CoordsType>
}