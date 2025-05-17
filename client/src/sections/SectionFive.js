import React from 'react'
import styles from './styles/SectionFive.module.css'
import imageDevice from '../images/YesDevice.png'
import imageDextop from '../images/Sect5Img.png'

const SectionFive = () => {
    return (
        <div className={styles.content} id="query">
            <img src={imageDevice} alt="QueryDev" className={styles.imgDevice}/>
            <img src={imageDextop} alt="QueryDex" className={styles.imgDextop} />
        </div>
    )
}

export default SectionFive