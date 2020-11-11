import React, {useEffect, useState} from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import styles from "../../App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {MapSchoolProps} from "../../Types/Types";
import {AppStateType} from "../../redux/redux-store";
import MapLabels from "./mapLabels/MapLabels";
import {requestDeleteSchool, requestGetSchools} from "../../redux/schools-reducer";
import { TypeSchool } from "../../Types/TypesSchoolsReducer";

const MapSchool = ({myState}: {myState: MapSchoolProps}) => {
    const getSchools = useSelector<AppStateType, Array<TypeSchool>>((state => state.schoolsPage.mapItems))
    const [coords, setCoords]=useState([])
    const [editMode, setEditMode] = useState(true)
    const [showInput, setShowInput] = useState(false)
    const dispatch = useDispatch()

    const addCoords = (e: any) => {
        setCoords(e.get('coords'))
        setEditMode(true)
        setShowInput(true)
    }
        const deleteLabel = (id: string) => {
            dispatch(requestDeleteSchool(id))
        }

    // @ts-ignore
    window.deleteLabel = deleteLabel

    useEffect(() => {
        dispatch(requestGetSchools())
    }, [coords, deleteLabel])

    return (
        <>
            <MapLabels coords={coords} editMode={editMode} setShowInput={setShowInput}
                       setEditMode={setEditMode} showInput={showInput}/>
            <YMaps className={styles.wrapperMap}>
                <Map width={'100%'} height={'100vh'} state={myState} onClick={addCoords}>
                    {getSchools.map(school => {
                        return (
                            <Placemark key={school._id} geometry={[school.lat, school.lng]}
                                       modules={['geoObject.addon.balloon']}
                                       properties={{
                                           balloonContentHeader: `${school.name}
                                            <button onclick="return deleteLabel('${school._id}');">Delete</button>`,
                                           balloonContentBody: '',
                                       }}
                            />
                        )
                    })}
                    {showInput ? <Placemark geometry={coords}
                                            preset={['islands#redIcon']}
                                            modules={['geoObject.addon.balloon']}
                                            options={{preset: 'islands#redIcon'}}
                    /> : <></>}
                </Map>
            </YMaps>
        </>
    )
}

export default MapSchool;