import React from 'react'
import styles from './styles/SectionTwo.module.css'
import TabImgs from '../images/TabImgs.png'
import ImageLaptop from '../images/ImgLaptop.png'
import WhatIGet from '../images/WhatIGet.png'
import arrow from '../images/arrow.png'

// const items = [
//     {
//         title: 'Індивідуальний формат',
//         text: 'Усі заняття проходять виключно 1 на 1 з інстелером'
//     },
//     {
//         title: 'Інтенсив 20/6',
//         text: '20 Активних хвилин → 6 Разів на тиждень → В будь який час'
//     },
//     {
//         title: 'Справжні результати',
//         text: 'Кожне заняття аналізується системою'
//     },
//     {
//         title: 'Підтримка',
//         text: 'Від першого дзвінка і до останнього заняття lead-менеджер супроводжує компанію'
//     }
// ]

const SectionTwo = () => {
    return (
        <div className={styles.content} id="WhatIGet">
            <h1 className={styles.header}>
                Що я отримаю?
            </h1>
            <div className={styles.whatIGetBox}>
                <img src={TabImgs} alt="What I get for dextop" className={styles.imgDextop} />
                <img src={WhatIGet} alt="What I Get" className={styles.imgDevices} />
                <img src={ImageLaptop} alt="What I Get for laptop" className={styles.imgLaptop}/>
                {/* <div className={styles.container}>
                    <div className={styles.grid}>
                        {items.map((item, index) => (
                            <div key={index} className={`${styles.card} ${item.colorClass}`}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.text}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <a href="#WhySo">
                    <img src={arrow} alt="arrow" className={styles.arrowImg} /> 
                </a>
            </div>
        </div>
    )
}

export default SectionTwo