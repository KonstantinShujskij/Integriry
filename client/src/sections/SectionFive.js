import React from 'react'
import styles from './styles/SectionFive.module.css'
import YES from '../images/YES.png'

const SectionFive = () => {
    return (
        <div className={styles.content} id="query">
            <div className={styles.questionsContainer}>
                <div className={styles.questionBox}>
                    <p>Чи <span className={styles.questionColoring}>реально</span> почати розмовляти без граматики і зубріння?</p>
                </div>
                <div className={styles.questionBox}>
                    <p>Чи <span className={styles.questionColoring}>підійде</span> мені формат, якщо я постійно зайнятий?</p>
                </div>
                <div className={styles.questionBox}>
                    <p>Чи <span className={styles.questionColoring}>допоможе</span> мені зміна викладачів адаптуватись до реального мовного середовища?</p>
                </div>
                <div className={styles.questionBox}>
                    <p>Чи <span className={styles.questionColoring}>не осудять</span> мене за помилки?</p>
                </div>
                <div className={styles.questionBox}>
                    <p>Чи буде хтось, хто <span className={styles.questionColoring}>підтримає</span> мене в процесі?</p>
                </div>
                <div className={styles.questionBox}>
                    <p>Чи є <span className={styles.questionColoring}>гарантія</span> результату?</p>
                </div>
                <div className={styles.questionBox}>
                    <p>І ще дуже багато <span className={styles.questionColoring}>питань</span> на які ми точно відповімо "<span className={styles.questionColoring}>ТАК</span>"</p>
                </div>
            </div>
            <img src={YES} className={styles.imageDevice} alt="Yes" />
        </div>
    )
}

export default SectionFive