import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://personal-area-it-incubator.herokuapp.com/1.0/map-items'
});

export const schoolsApi = {
    getSchools() {
       return  instance.get('')
    },

    postSchools(mapItem: any) {
        return instance.post('',{mapItem})
    },

    deleteSchool(id: string) {
        return instance.delete(`${id}`)
    }
}