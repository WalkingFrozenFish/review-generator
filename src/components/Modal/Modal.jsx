import React from 'react'
import styles from "./Modal.module.css"

const Modal = ({ message, type, handler }) => {

    setTimeout(() => {
        handler()
    }, 5000)

    return (
        <div className={type === "error" ? styles.error : styles.notice} onClick={handler}>
            <div className={styles.messageBlock}>
                <p>{message}</p>
            </div>
            <div className={styles.buttonBlock}>
                <button>&#10006;</button>
            </div>
        </div>
    )
}

export default Modal