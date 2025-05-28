import React, { useState } from 'react'
import styles from './styles/AskUs.module.css'
import sendTelegramMessage from '../api/telegram'


const AskUs = ({bg='/images/form-bg.svg', bgImg='./images/form-img.svg', color='#91A0E2'}) => {
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '+380',
        phone: '',
        email: ''
    })

    const countries = [
        { name: 'fi-ua', code: '+380' },
        { name: 'fi-md', code: '+373' },
        { name: 'fi-ge', code: '+995' },
        { name: 'fi-lv', code: '+371' },
        { name: 'fi-lt', code: '+370' },
        { name: 'fi-cz', code: '+420' },
        { name: 'fi-pl', code: '+48' },
        { name: 'fi-de', code: '+49' },
        { name: 'fi-fr', code: '+33' },
        { name: 'fi-it', code: '+39' }
    ]

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        let text = `Name: ${formData.name} \n`
        text += `Phone: ${country.code + formData.phone} \n`
        text += `Email: ${formData.email}`

        sendTelegramMessage(text)

        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '' })
    }

    const [country, setCountry] = useState(countries[0])
    const [open, setOpen] = useState(false)

    const selectHandler = (item) => {
        setCountry(item)
        setOpen(false)
    } 

    return (
        <div className={styles.askUsSection} id="ask-us">
            <img className={styles.bg_img} src={bgImg} alt="bg" />

            <div className={styles.formContainer} style={{background: color}}>
                <img className={styles.bg} src={bg} alt="bg" />

                <div className={styles.form_wrap}>
                    <h2 className={styles.title}>А якщо? А чи підійде? А?</h2>
                    <p className={styles.subtitle}>Швидше заповняй, та швидше отримай відповіді</p>
                    <form onSubmit={() => handleSubmit()} className={styles.form}>
                        <input
                            name="name"
                            className={styles.formInput}
                            type="text"
                            placeholder="Імʼя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <div className={styles.formGroup}>
                            <div className={styles.select}>
                                <div className={styles.selectValue} onClick={() => setOpen((prew) => !prew)}>
                                    <div className={styles.selectIcon}>
                                        <span class={`fi ${country.name}`}></span>
                                    </div>
                                    <div className={styles.selectDrop}></div>
                                    <div className={styles.selectCode}>{country.code}</div>
                                </div>
                                <div className={`${styles.selectList} ${open? styles.open : null}`}>
                                    {countries.map((country) => (
                                        <div className={styles.selectItem} key={country.code} onClick={() => selectHandler(country)}>
                                            <div className={styles.selectIcon}>
                                                <span class={`fi ${country.name}`}></span>
                                            </div>
                                            <div className={styles.selectCode}>{country.code}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <input
                                name="phone"
                                type="tel"
                                placeholder="99 999-99-99"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            name="email"
                            className={styles.formInput}
                            type="email"
                            placeholder="Електронна пошта"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <button type="button" onClick={() => handleSubmit()} className={styles.submitBtn}>Залишити заявку</button>
                        {submitted && <p className={styles.success}>Дякуємо! Очікуйте дзвінка 📞</p>}
                    </form>
                    <p className={styles.notice}>
                        Залишаючи заявку, ви приймаєте умови <br />
                        <span className={styles.noticeUndln}>оферти та політики конфіденційності</span>
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default AskUs
