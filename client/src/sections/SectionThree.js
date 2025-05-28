import React from 'react'
import styles from './styles/SectionThree.module.css'

const SectionThree = () => {
    return (
        <div className={styles.main}>
            <div className={styles.data}>
                <div className={styles.title}>Чому так?</div>
                <div className={styles.info}>
                    Регулярні невеликі уроки дозовано завантажують у Ваш мозок англійську мову, 
                    не перевантажуючи правилами. Часта зміна інстелерів дозволяє Компаньйону 
                    відчуватися в реальних умовах діалогу з природньою зміною співрозмовників. 
                    Інстелер завжди на вашому боці і зацікавлений  розговорити вас. 
                    Теми діалогів ставите ви, тим самим напрацьовуючи індивідуальні налаштування. 
                    Лід-менеджер відстежує процес навчання за метриками. 
                    Його завдання не дати вам скласти руки та надати Вам підтримку у потрібну хвилину. 
                    <p>Сміливо завантажуй англійську у свою голову!</p>
                </div>
            </div>

            <div className={styles.img_L}>
                <img src="./images/L.svg" alt="bg" />
            </div>
            <div className={styles.img_R}>
                <img src="./images/R.svg" alt="bg" />
            </div>
            <div className={styles.img_RT}>
                <img src="./images/RT.svg" alt="bg" />
            </div>
        </div>
    )
}

export default SectionThree