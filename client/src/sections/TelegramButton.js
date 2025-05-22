import React from 'react'
import styles from './styles/TelegramButton.module.css'
import icon from '../images/TGBtn.png'

const TelegramButton = () => {
    return (
        <a
            href="https://t.me/integrity_shcool_bot"
            className={styles.telegramButton}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={icon} alt="Telegram" 
                className={styles.img}/>
        </a>
    )
}

export default TelegramButton