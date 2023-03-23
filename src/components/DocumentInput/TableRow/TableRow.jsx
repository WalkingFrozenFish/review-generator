import React from 'react'
import styles from "./TableRow.module.css"

const TableRow = (props) => {
    return (
        <tr className={styles.documentInputTable}>
            <td className={styles.tableTitle}>
                <p>{props.rowTitle}</p>
            </td>
            <td className={styles.tableInput}>
                <input
                    name={props.inputName}
                    onChange={props.changeDataHandler}
                    type="text"
                    placeholder='...'
                />
            </td>
            <td className={styles.tableButton}>
                <button
                    onClick={() => props.getDataHandler(props.data)}
                    className={styles.button}
                >
                    Получить данные
                </button>
            </td>
        </tr>
    )
}

export default TableRow