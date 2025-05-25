import styles from './styles/SectionThree.module.css'

const SectionThree = () => {
    return (
        <div className={styles.content} id="WhySo">
            <h1 className={styles.headerThree}>Чому так?</h1>
            <div className={styles.whySoContainer}>
                <div className={styles.whySoBox}>
                    <p className={styles.whySoText}>Регулярні невеликі уроки дозовано завантажують у Ваш мозок англійську мову, не перевантажуючи правилами. Часта зміна інстелерів дозволяє Компаньйону відчуватися в реальних умовах діалогу з природньою зміною співрозмовників. Інстелер завжди на вашому боці і зацікавлений  розговорити вас. Теми діалогів ставите ви, тим самим напрацьовуючи індивідуальні налаштування. Лід-менеджер відстежує процес навчання за метриками. Його завдання не дати вам скласти руки та надати Вам підтримку у потрібну хвилину. 
                        Сміливо завантажуй англійську у свою голову!</p>
                </div>
            </div>
        </div>
    )
}

export default SectionThree