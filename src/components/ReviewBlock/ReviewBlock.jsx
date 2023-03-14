import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./ReviewBlock.module.css"

const ReviewBlock = () => {
    const reviewMessage = useSelector(state => state.reviewMessage)

    return (
        <div className={styles.formBlock}>
            <h2 className={styles.title}>Review message:</h2>

            <p className={styles.message}>{reviewMessage}</p>
        </div>
    )
}

export default ReviewBlock