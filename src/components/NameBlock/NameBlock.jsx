import React from 'react'
import styles from "./NameBlock.module.css"

const NameBlock = () => {
    return (
        <div className={styles.formBlock}>
            <p className={styles.label}>Name/Surname</p>
            <input type="text" placeholder="Name/Surname" className={styles.studentName} />
        </div>
    )
}

export default NameBlock