import styles from './styles/SectionTwo.module.css'
import { FRONT_URL } from '../const'


const SectionTwo = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.cards__title}>Що я отримаю?</div>
            <div className={styles.card}>
                <img className={styles.bg_card} src={`${FRONT_URL}/images/card-1.svg`} alt="card" />
                <div className={styles.card__icon}>
                    <img src="./images/close.svg" alt="bg" />
                </div>
                <div className={styles.card__title}>Індивідуальний формат</div>
                <div className={styles.card__text}>
                    <p>Усі зайняття</p>
                    <p>проходять</p>
                    <p>виключно 1 на 1</p>
                    <p>з інстеллером</p>
                </div>
                <div className={styles.card__next}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.bg_card} src="./images/card-2.svg" alt="card" />
                <div className={styles.card__icon}>
                    <img src="./images/close.svg" alt="bg" />
                </div>
                <div className={styles.card__title}>Інтенсив 20\6</div>
                <div className={styles.card__text}>
                    <p>20 Активних хвилин <i className="fa-solid fa-arrow-right"></i></p>
                    <p>6 Разів на тиждень <i className="fa-solid fa-arrow-right"></i></p>
                    <p>В будь який час <i className="fa-solid fa-arrow-right"></i></p>
                </div>
                <div className={styles.card__next}>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.bg_card} src="./images/card-3.svg" alt="card" />
                <div className={styles.card__icon}>
                    <img src="./images/close.svg" alt="bg" />
                </div>
                <div className={styles.card__title}>Справжні результати</div>
                <div className={styles.card__text}>
                    Кожне зайняття аналізується системою
                </div>
                <div className={styles.card__next}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.bg_card} src="./images/card-4.svg" alt="card" />
                <div className={styles.card__icon}>
                    <img src="./images/close.svg" alt="bg" />
                </div>
                <div className={styles.card__title}>Підтримка</div>
                <div className={styles.card__text}>
                    Від першого дзівнка і до
                    останнього
                    зайняття lead-
                    менеджер супроводжує 
                    компаньона
                </div>
                <div className={styles.card__next}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo