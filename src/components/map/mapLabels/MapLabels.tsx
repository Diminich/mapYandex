import React from "react";
import styles from './mapLabels.module.css'
import {useDispatch} from "react-redux";
import {deleteStateCoords} from "../../../redux/addSchools-reducer";

const MapLabels = ({getCoords}: any) => {
    const dispatch = useDispatch();

    const deleteCoordsLabels = (id: string) => {
        dispatch(deleteStateCoords(id))
    }

    return (
        <div className={styles.wrapperMapLabels}>
            {getCoords.map((sc: any) => {
                return (
                    <div className={styles.wrapperSchool}>
                        <div>{`${sc.coords[0]}, ${sc.coords[1]}`}</div>
                        <button className={styles.buttonInfoSchool} onClick={() => deleteCoordsLabels(sc.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default MapLabels;