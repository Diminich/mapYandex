import React from 'react';
import styles from './App.module.css'
import MapSchool from './components/map/mapSchool';



const App = () => {
    const myState = {center: [53.8957933, 27.5735831], zoom: 12}
    return (
        <div className={styles.wrapperApp}>
            <MapSchool myState={myState}/>
        </div>
    )
}

export default App;
