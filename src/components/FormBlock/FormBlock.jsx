import React from 'react'
import CheckboxItem from './CheckboxItem/CheckboxItem'
import styles from "./FormBlock.module.css"

const FormBlock = ({ title, data }) => {
    return (
        <div className={styles.formBlock}>
            <h2 className={styles.title}>{title}:</h2>
            {
                data.map((item, index) => {
                    return <CheckboxItem key={index} message={item.message} point={item.point} />
                })
            }
        </div>
    )
}

export default FormBlock