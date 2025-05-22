import React, { useState, useEffect } from 'react'
import styles from './styles/MenuModal.module.css'

const MenuModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    // const openMenu = () => setIsOpen(true)
    const toggleMenu = () => setIsOpen((prev) => !prev)
    const closeMenu = () => setIsOpen(false)

    // Закриття при кліку поза меню
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isOpen &&
                e.target.classList.contains(styles.menuModal)
            ) {
                closeMenu()
            }
        }

        window.addEventListener('click', handleClickOutside)
        return () => window.removeEventListener('click', handleClickOutside)
    }, [isOpen])

    // Заблюрити все, крім меню
    useEffect(() => {
        const page = document.getElementById('pageContent')
        if (page) {
            page.classList.toggle(styles.blur, isOpen)
        }
    }, [isOpen])

    return (
        <>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? '×' : '≡'}
            </button>

            {isOpen && (
                <div className={styles.menuModal}>
                    <nav className={`${styles.menuContent} ${styles.open}`}>
                        <button className={styles.closeButton} onClick={closeMenu}>
                        &times;
                        </button>
                        <a href="#prices" className={styles.menuLink} onClick={closeMenu}>
                            Прайс
                        </a>
                        <a href="#query" className={styles.menuLink} onClick={closeMenu}>
                            О курсах
                        </a>
                    </nav>
                </div>
            )}
        </>
    )
}

export default MenuModal