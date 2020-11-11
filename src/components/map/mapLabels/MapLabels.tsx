import React, {useState} from "react";
import styles from './mapLabels.module.css'
import {useDispatch} from "react-redux";
import {requestPostSchools} from "../../../redux/schools-reducer";
import { TypePropsMapLabels } from "../../../Types/TypesMapLabels";

const MapLabels = ({coords, editMode, setEditMode, showInput, setShowInput}: TypePropsMapLabels) => {
    const [schoolName, setSchoolName] = useState('')
    const dispatch = useDispatch();

    const addSchoolsName = () => {
        dispatch(requestPostSchools(coords, schoolName))
        setSchoolName('')
        setEditMode(false)
        setShowInput(false)
    }

    return (
        <div className={styles.wrapperMapLabels}>
            { showInput ? <div className={styles.wrapperSchool}>
                        <div>
                            <p>Введите название школы:</p>
                            {editMode ?
                            <input autoFocus={true} onChange={
                                (e) => setSchoolName(e.currentTarget.value)}
                                                 onBlur={addSchoolsName}
                            /> : schoolName
                            }
                            {`: ${coords[0]?.toFixed(6)}, ${coords[1]?.toFixed(6)}`}
                        </div>
                    </div> : <></>}
        </div>
    )
}

export default MapLabels;