import React from 'react';
import {YMaps, Map, FullscreenControl} from 'react-yandex-maps';
import styles from './App.module.css'

function App() {
  return (
    <>
      <YMaps className={styles.wrapperApp}>
              <Map defaultState={{
                  center: [55.75, 37.57],
                  zoom: 9,
                  controls: []
              }} />
              <FullscreenControl />
      </YMaps>
    </>
  );
}

export default App;
