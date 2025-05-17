import React from 'react'
import styles from './styles/Prices.module.css'

const plans = [
    {
        title: 'STEP BY STEP',
        description: 'Хочеш спробувати? Почни з малого — без тиску.',
        price: '100',
        unit: 'USDT\\місяць',
        features: ['24 заняття', 'Пролонгація'],
        color: 'green'
    },
    {
        title: 'FULL',
        description: 'Поринь у курс з головою! Драйв. Праця – Результат.',
        price: '900',
        unit: 'USDT\\курс',
        features: ['24 заняття', '9 місяців'],
        color: 'orange'
    },
    {
        title: 'BOOST',
        description: 'Граматику вивчив, а спілкуватися як? Бустани розмовну англійську.',
        price: '300',
        unit: 'USDT\\курс',
        features: ['100 занять', '3–5 тижнів'],
        color: 'blue'
    }
]

const Prices = () => {
    return (
        <div className={styles.pricesSection} id="prices">
            {/* <img src={mascot} alt="Mascot" className={styles.image} /> */}
            <h2 className={styles.title}>Ціни</h2>
            <div className={styles.cards}>
                {plans.map((plan, idx) => (
                    <div className={styles.card} key={idx}>
                        <div className={`${styles.badge} ${styles[plan.color]}`}>{plan.title}</div>
                        <p className={styles.description}>{plan.description}</p>
                        <h3 className={styles.price}>{plan.price}</h3>
                        <span className={styles.unit}>{plan.unit}</span>
                        <ul className={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <a
                            href="https://t.me/integrity_shcool_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.button}
                        >
                        Миттєвий старт
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.guarantee}>
                <p className={styles.guaranteeText}>
                    При оплаті повного курсу 240 уроків діє <br/> <span>ГАРАНТІЯ РЕЗУЛЬТАТУ!</span>
                </p>
            </div>
        </div>
    )
}

export default Prices