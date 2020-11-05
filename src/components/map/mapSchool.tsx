import React from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import styles from "../../App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {CoordsType, MapSchoolProps, TypeSchoolParameters} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";
import {addStateCoords} from "../../redux/addSchools-reducer";
import MapLabels from "./mapLabels/MapLabels";

const MapSchool = ({myState}: {myState: MapSchoolProps}) => {
    const getSchools = useSelector<AppStateType, Array<TypeSchoolParameters>>((state => state.schoolPage.schools));
    const getCoords = useSelector<AppStateType, Array<CoordsType>>((state => state.addSchoolPage.coords));
    const dispatch = useDispatch();

    const addCoords = (e: any) => {
        dispatch(addStateCoords( e.get('coords')))
    }


    return (
        <>
            <MapLabels getCoords={getCoords} />
            <YMaps className={styles.wrapperMap}>
                <Map width={'100%'} height={'100vh'} state={myState} onClick={addCoords}>
                    {getSchools.map(schools => {
                        return (
                            <Placemark geometry={[schools.latitude, schools.longitude]}
                                       modules={['geoObject.addon.balloon']}
                                       properties={{
                                           balloonContentHeader: schools.name,
                                           balloonContentBody: `format description: ${schools.format_description}`,
                                       }}
                            />
                        )
                    })}
                    {getCoords.map((lab) => {
                        return (
                            <Placemark geometry={lab.coords}
                                       preset={['islands#redIcon']}
                                       modules={['geoObject.addon.balloon']}
                                       properties={{
                                           hintContent: 'dsadsadasdas',
                                           balloonContentHeader: lab.schoolName,
                                           balloonContentBody: '',
                                       }}
                                       options={{preset: 'islands#redIcon'}}
                            />
                        )
                    })}
                </Map>
            </YMaps>
        </>
    )
}

export default MapSchool;