import React from 'react'
import { useSelector } from 'react-redux'
import WrapperBlock from '../../containers/WrapperBlock/WrapperBlock'
import styles from "./ReviewBlock.module.css"

const ReviewBlock = () => {
    const reviewMessage = useSelector(state => state.reviewMessage)

    return (
        <WrapperBlock>
            <h2 className={styles.title}>Главное сообщение:</h2>
            <p className={styles.message}>{reviewMessage}</p>
        </WrapperBlock>
    )
}

export default ReviewBlock