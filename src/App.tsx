import React from 'react';
import styles from './App.module.css'
import MapSchool from './components/map/mapSchool';

function App() {
    return (
        <div className={styles.wrapperApp}>
            <MapSchool/>
        </div>
    )
}

export default App;
