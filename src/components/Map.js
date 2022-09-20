/* global kakao */
import React, { useEffect } from "react";
import styles from '../css/Map.module.css'
import Menubar from "./Menubar";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.3415708, 126.8309276),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(37.3415708, 126.8309276);

    let marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);
  }, []);

  return (
    <div className={styles.Map}>
        <div className={styles.searchSec}>
          <input type="text" placeholder="장소를 검색해보세요" className={styles.searchCont} />
          <div className={styles.searchGo}><img src='/img/go.png' alt="go" /> <div>길찾기</div></div>  
        </div>

        <Menubar />
        <div id="map" style={{width:'100vw', height:'100vh'}}></div>
    </div>
  );
};

export default Map;