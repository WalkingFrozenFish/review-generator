import React from 'react'
import styles from "./ReviewBlock.module.css"

const ReviewBlock = () => {
    return (
        <div className={styles.formBlock}>
            <h2 className={styles.title}>Review message:</h2>

            <p className={styles.message}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam consectetur, quaerat laborum eum architecto rem, dolorum labore iure ex autem blanditiis accusantium id sequi totam harum corporis saepe adipisci ratione!</p>
        </div>
    )
}

export default ReviewBlock