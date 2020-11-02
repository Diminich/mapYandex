import React from "react";
import {YMaps, Map} from "react-yandex-maps";
import styles from "../../App.module.css";

const MapSchool = () => {
    return (
        <YMaps className={styles.wrapperMap}>
            <Map width={'100%'} height={'100vh'} defaultState={{center: [53.8957933, 27.5735831], zoom: 12}}/>
        </YMaps>
    )
}

export default MapSchool;