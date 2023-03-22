import React from 'react'
import WrapperBlock from '../../containers/WrapperBlock/WrapperBlock'
import styles from "./DocumentInput.module.css"

const DocumentInput = () => {
    return (
        <WrapperBlock>
            <h2 className={styles.title}>Выбор документов:</h2>
            <table >
                <tr className={styles.documentInputTable}>
                    <td className={styles.tableTitle}>
                        <p>ID документа с рекомендациями</p>
                    </td>
                    <td className={styles.tableInput}>
                        <input type="text" placeholder='...' />
                    </td>
                    <td className={styles.tableButton}>
                        <button className={styles.button}>Получить данные</button>
                    </td>
                </tr>
                <tr className={styles.documentInputTable}>
                    <td className={styles.tableTitle}>
                        <p>ID документа с ошибками</p>
                    </td>
                    <td className={styles.tableInput}>
                        <input type="text" placeholder='...' />
                    </td>
                    <td className={styles.tableButton}>
                        <button className={styles.button}>Получить данные</button>
                    </td>
                </tr>
                <tr className={styles.documentInputTable}>
                    <td className={styles.tableTitle}>
                        <p>ID документа с результатами</p>
                    </td>
                    <td className={styles.tableInput}>
                        <input type="text" placeholder='...' />
                    </td>
                    <td className={styles.tableButton}>
                        <button className={styles.button}>Получить данные</button>
                    </td>
                </tr>
            </table>
        </WrapperBlock>
    )
}

export default DocumentInput