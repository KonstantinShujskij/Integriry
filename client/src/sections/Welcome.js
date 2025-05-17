import React from 'react'
import styles from './styles/Welcome.module.css'
import HeaderImg from '../images/HeaderImg.png'
import logoInt from '../images/logoInt.png'
import MainPic from '../images/MainPic.png'
import downdrop from '../images/dropdown.svg'
import sideMenu from '../images/sidemenu.png'

const Welcome = () => {
    return (
        <div className={styles.welcomeSection} id="welcome">
            <div className={styles.headerImgBox}>
                <img src={HeaderImg} alt="Integrity Header" className={styles.headerImg} />
            </div>
            <div className={styles.sideMenu}>
                <img src={sideMenu} alt="Side Menu" className={styles.sideMenuImg}/>
            </div>
            <div className={styles.header}>
                <div>
                    <img src={logoInt} alt="Integrity Logo" className={styles.logo} />
                </div>
                <div className={styles.nav}>
                    <a href="#prices" className={styles.navLink}>Прайс </a> <img src={downdrop} className={styles.dropDown} alt="dropdown"/>
                    <a href="#query" className={styles.navLink}>О курсах</a>
                </div>
            </div>
            <div className={styles.welcomeContent}>
                <div className={styles.content}>
                    <div className={styles.textBlock}>
                        <h1 className={styles.mainText}>
                            Вільно <br />
                            розмовляй <br />
                            <span className={styles.englishText}>англійською</span> <br />
                            вже через <br />
                            <span className={styles.highlight}>9 місяців!</span>
                        </h1>
                    </div>
                    <div className={styles.imageBlock}>
                        <img src={MainPic} alt="People Learning" className={styles.image} />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <a href="#ask-us" className={styles.applyButton}>Залишити заявку</a>
                    <a href="https://t.me/integrity_shcool_bot" target="_blank" rel="noopener noreferrer" className={styles.botButton}>Перейти до боту</a>
                </div>
            </div>
        </div>
    )
}

export default Welcome