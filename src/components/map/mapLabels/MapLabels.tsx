import React, {useState} from "react";
import styles from './mapLabels.module.css'
import {useDispatch} from "react-redux";
import {addStateSchoolName, deleteStateCoords} from "../../../redux/addSchools-reducer";

const MapLabels = ({getCoords}: any) => {
    const [schoolName, setSchoolName] = useState('')
    const dispatch = useDispatch();

    const deleteCoordsLabels = (id: symbol) => {
        dispatch(deleteStateCoords(id))
    }

    const addSchoolsName = (id: symbol) => {
        dispatch(addStateSchoolName(schoolName, id));
        setSchoolName('');
    }
    console.log()
    return (
        <div className={styles.wrapperMapLabels}>
            {getCoords.map((sc: any) => {
                return (
                    <div className={styles.wrapperSchool}>
                        <div>
                            <p>Введите название школы:</p>
                            <input autoFocus={true} onChange={
                            (e) => setSchoolName(e.currentTarget.value)} onBlur={() => addSchoolsName(sc.id)}/>
                             {`${sc?.schoolName}: ${sc?.coords[0]}, ${sc?.coords[1]}`}
                        </div>
                        <button className={styles.buttonInfoSchool} onClick={() => deleteCoordsLabels(sc.id)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}

export default MapLabels;