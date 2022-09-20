import styles from '../css/Menubar.module.css'
import {Link} from 'react-router-dom'

function Menubar () {
    return(
        <div>
            <div className={styles.menuSec}>
                <Link to='/map'>
                    <div className={`${styles.menuItem} ${styles.selected}`}>
                        <img src='/img/Map Marker.png' alt="map" /> 
                        <div>공유지도</div>
                    </div>
                </Link>
                <Link to='/search'>
                    <div className={`${styles.menuItem}`}>
                        <img src="/img/Safari.png" alt="search" /> 
                        <div>탐색</div>
                    </div>
                </Link>
                <Link to='/avatar'>
                    <div className={styles.menuItem}>
                        <img src="/img/Man.png" alt="avatar" /> 
                        <div>다님벗</div>
                    </div>
                </Link>
                <Link to='/footprint'>
                    <div className={styles.menuItem}>
                        <img src="/img/Footprint.png" alt="footprint" /> 
                        <div>발자국</div>
                    </div>
                </Link>
                <Link to='/diary'>
                    <div className={styles.menuItem}>
                        <img src="/img/Booklet.png" alt="diary" /> 
                        <div>다이어리</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menubar