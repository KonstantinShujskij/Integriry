import styles from './styles/SectionTwo.module.css'
import arrow from '../images/arrow.png'

const SectionTwo = () => {
    return (
        <div className={styles.content} id="WhatIGet">
            <h1 className={styles.header}>
                Що я отримаю?
            </h1>
            <div className={styles.cardsWrapper}>
                <div className={`${styles.cardField} ${styles.card1}`}></div>
                <div className={`${styles.cardBox} ${styles.box1}`}>
                    <div className={styles.cardTitle}>Індивідуальний формат</div>
                    <div className={styles.cardText}>Усі заняття проходять виключно 1 на 1 з інстелером →</div>
                </div>
            </div>
            <div className={styles.cardsWrapper}>
                <div className={`${styles.cardField} ${styles.card2}`}></div>
                <div className={`${styles.cardBox} ${styles.box2}`}>
                    <p className={styles.cardTitle}>Інтенсив 20/6</p>
                    <p className={styles.cardText}>20 Активних хвилин →<br/>6 Разів на тиждень →<br/>В будь який час →</p>
                </div>
            </div>
            <div className={styles.cardsWrapper}>
                <div className={`${styles.cardField} ${styles.card3}`}></div>
                <div className={`${styles.cardBox} ${styles.box3}`}>
                    <p className={styles.cardTitle}>Справжні результати</p>
                    <p className={styles.cardText}>Кожне заняття аналізується системою</p>
                </div>
            </div>
            <div className={styles.cardsWrapper}>
                <div className={`${styles.cardField} ${styles.card4}`}></div>
                <div className={`${styles.cardBox} ${styles.box4}`}>
                    <p className={styles.cardTitle}>Підтримка</p>
                    <p className={styles.cardText}>Від першого дзвінка і до останнього заняття lead-менеджер супроводжує компаньона →</p>
                </div>
            </div>
            <a href="#WhySo">
                <img src={arrow} alt="arrow" className={styles.arrowImg} /> 
            </a>
        </div>
    )
}

export default SectionTwo