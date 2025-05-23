import React, { useState } from 'react'
import styles from './styles/AskUs.module.css'
import sendTelegramMessage from '../api/telegram'

const AskUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '+380',
        phone: '',
        email: ''
    })

    const countries = [
        { name: '🇺🇦', code: '+380' },
        { name: '🇲🇩', code: '+373' },
        { name: '🇱🇻', code: '+371' },
        { name: '🇱🇹', code: '+370' },
        { name: '🇨🇿', code: '+420' },
        { name: '🇵🇱', code: '+48' },
        { name: '🇩🇪', code: '+49' },
        { name: '🇫🇷', code: '+33' },
        { name: '🇮🇹', code: '+39' }
    ]

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        let text = `Name: <code>${formData.name}</card> \n`
        text += `Phone: <code>${formData.countryCode + formData.phone}</card> \n`
        text += `Email: <code>${formData.email}</card>`

        sendTelegramMessage(text)

        setSubmitted(true)
        setFormData({ name: '', countryCode: '+380', phone: '', email: '' })
    }

    return (
        <div className={styles.askUsSection} id="ask-us">
            <div className={styles.formContainer}>
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
                        <select
                            name="countryCode"
                            className={styles.countryCode}
                            value={formData.countryCode}
                            onChange={handleChange}
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name} ({country.code})
                                </option>
                            ))}
                        </select>
                        <input
                            name="phone"
                            type="tel"
                            className={styles.telephoneInput}
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
    )
}

export default AskUs
