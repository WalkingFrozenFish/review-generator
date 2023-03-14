import React from 'react'
import CheckboxItem from './CheckboxItem/CheckboxItem'
import styles from "./FormBlock.module.css"

const FormBlock = ({ title, data, category }) => {
    return (
        <div className={styles.formBlock}>
            <h2 className={styles.title}>{title}:</h2>
            {
                data.map((item, index) => {
                    return <CheckboxItem category={category} key={index} message={item.message} point={item.point} itemId={item.id} />
                })
            }
        </div>
    )
}

export default FormBlock