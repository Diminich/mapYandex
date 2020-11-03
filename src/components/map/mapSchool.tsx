import React, {useState} from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import styles from "../../App.module.css";
import {useSelector} from "react-redux";
import {TypeSchoolParameters} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";

const MapSchool = () => {
    const [coords, setCoords] = useState([])
    const getSchools = useSelector<AppStateType, Array<TypeSchoolParameters>>((state => state.schoolPage.schools))
    const myState = {center: [53.8957933, 27.5735831], zoom: 12}

    const addCoords = (e: any) => {
        setCoords(e.get('coords'))
    }

    return (
        <YMaps className={styles.wrapperMap}>
            <Map width={'100%'} height={'100vh'} state={myState} onClick={addCoords}>
                {getSchools.map(s => {
                    return (
                        <Placemark geometry={[s.latitude, s.longitude]}
                                   modules={['geoObject.addon.balloon']}
                                   properties={{
                                       balloonContentHeader: s.name,
                                       balloonContentBody: `format description: ${s.format_description}`,
                                   }}
                        />
                    )
                })}
                <Placemark geometry={coords}
                           modules={['geoObject.addon.balloon']}
                           properties={{
                               balloonContentHeader: '',
                               balloonContentBody: ''
                           }}
                />
            </Map>
        </YMaps>
    )
}

export default MapSchool;