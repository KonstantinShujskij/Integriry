import styles from './styles/SectionFive.module.css'


const SectionFive = () => {
    return (
        <div className={styles.yes}>
            <div className={styles.yes__main}>
                <div className={styles.yes__info}>
                    <div className={styles.yes__block} style={{zIndex: 10}}>
                        <div className={styles.yes__block_text}>
                            <span>Чи </span>
                            <span className={styles.red}>реально </span> 
                            <span>почати розмовляти без граматики і зубріння?</span>
                        </div>
                    </div>
                    <div className={styles.yes__block} style={{zIndex: 9}}>
                        <div className={styles.yes__block_text}>
                            <span>Чи </span>
                            <span className={styles.red}>підійде </span> 
                            <span>мені формат, якщо я постійно зайнятий?</span>
                        </div>
                    </div>
                    <div className={styles.yes__block} style={{zIndex: 8}}>
                        <div className={styles.yes__block_text}>
                            <span>Чи </span>
                            <span className={styles.red}>допоможе </span> 
                            <span>мені зміна викладачів адаптуватися до реального мовного середовища?</span>
                        </div>
                    </div>
                    <div className={styles.yes__block} style={{zIndex: 7}}>
                        <div className={styles.yes__block_text}>
                            <span>Чи не </span>
                            <span className={styles.red}>осудять </span> 
                            <span>мене за помилки?</span>
                        </div>
                    </div>
                    <div className={styles.yes__block} style={{zIndex: 6}}>
                        <div className={styles.yes__block_text}>
                            <span>Чи буде хтось, хто </span>
                            <span className={styles.red}>підтримає </span> 
                            <span>мене в процесі?</span>
                        </div>
                    </div>
                    <div className={styles.yes__block} style={{zIndex: 5}}>
                        <div className={styles.yes__block_text}>
                            <span>Чи є </span>
                            <span className={styles.red}>гарантія </span> 
                            <span>результату?</span>
                        </div>
                    </div>
                    <div className={styles.yes__block} style={{zIndex: 4}}>
                        <div className={styles.yes__block_text}>
                            <span>І ще дуже багато </span>
                            <span className={styles.red}>питань </span> 
                            <span>на які ми точно відповімо</span>
                            <span className={styles.red}>“ТАК”</span> 
                        </div>
                    </div>
                </div>
                <div className={styles.yes__img}>
                    <img src="./images/yes.svg" alt="bg" />
                </div>
                <div className={styles.yes__bg}>
                    <img src="./images/yes-bg.svg" alt="bg" />
                </div>
                <div className={styles.yes__bg_left}>
                    <img src="./images/yes-bg.svg" alt="bg" />
                </div>
            </div>
        </div>

    )
}

export default SectionFive