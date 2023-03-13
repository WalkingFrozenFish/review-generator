import React from 'react'
import styles from "./CheckboxItem.module.css"

const CheckboxItem = ({ message, point }) => {
    return (
        <div className={styles.item}>
            <table>
                <tr>
                    <td className={styles.messageCell}>
                        {message}
                    </td>
                    <td className={styles.pointCell}>
                        <span>{point} баллов</span>
                    </td>
                    <td className={styles.checkboxCell}>
                        <input type="checkbox" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CheckboxItem