import React from 'react'
import styles from './styles/Footer.module.css'
import logo from '../images/faviconsan.png'
import emailIcon from '../images/emailicon.png'
import instagramIcon from '../images/InstIcon.png'
import telegramIcon from '../images/TgIcon.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.center}>
                <p>&#169; 2015-2025 integrity.cool</p>
            </div>
            <div className={styles.right}>
                <a href="+380934322043" target="_blank" rel="noopener noreferrer">
                    <img src={emailIcon} alt="Email" className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/integrity.cool.english?igsh=MWc5eW45eWNlY2lhNw==" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                </a>
                <a href="https://t.me/integrity_shcool_bot" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className={styles.iconTG} />
                </a>
            </div>
        </div>
    )
}

export default Footer