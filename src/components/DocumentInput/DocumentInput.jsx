import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import WrapperBlock from '../../containers/WrapperBlock/WrapperBlock'
import styles from "./DocumentInput.module.css"

const DocumentInput = () => {
    const [recomendation, setRecomendation] = useState("")
    const [error, setError] = useState("")
    const [result, setResult] = useState("")

    const setRecomendationHandler = (e) => {
        setRecomendation(e.target.value)
    }

    const setErrorHandler = (e) => {
        setError(e.target.value)
    }

    const setResultHandler = (e) => {
        setResult(e.target.value)
    }

    const dispatch = useDispatch()

    const getRecomendationHandler = () => {
        if (recomendation.length !== 0) {
            // dispatch()
            console.log(recomendation)
        } else {
            console.log("Напишите ID документа")
        }
    }

    const getErrorHandler = () => {
        if (error.length !== 0) {
            // dispatch()
            console.log(error)
        } else {
            console.log("Напишите ID документа")
        }
    }

    const getResultHandler = () => {
        if (result.length !== 0) {
            // dispatch()
            console.log(result)
        } else {
            console.log("Напишите ID документа")
        }
    }

    return (
        <WrapperBlock>
            <h2 className={styles.title}>Выбор документов:</h2>
            <table >
                <thead></thead>
                <tbody>


                    <tr className={styles.documentInputTable}>
                        <td className={styles.tableTitle}>
                            <p>ID документа с рекомендациями</p>
                        </td>
                        <td className={styles.tableInput}>
                            <input onChange={setRecomendationHandler} type="text" placeholder='...' />
                        </td>
                        <td className={styles.tableButton}>
                            <button onClick={getRecomendationHandler} className={styles.button}>Получить данные</button>
                        </td>
                    </tr>
                    <tr className={styles.documentInputTable}>
                        <td className={styles.tableTitle}>
                            <p>ID документа с ошибками</p>
                        </td>
                        <td className={styles.tableInput}>
                            <input onChange={setErrorHandler} type="text" placeholder='...' />
                        </td>
                        <td className={styles.tableButton}>
                            <button onClick={getErrorHandler} className={styles.button}>Получить данные</button>
                        </td>
                    </tr>
                    <tr className={styles.documentInputTable}>
                        <td className={styles.tableTitle}>
                            <p>ID документа с результатами</p>
                        </td>
                        <td className={styles.tableInput}>
                            <input onChange={setResultHandler} type="text" placeholder='...' />
                        </td>
                        <td className={styles.tableButton}>
                            <button onClick={getResultHandler} className={styles.button}>Получить данные</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </WrapperBlock>
    )
}

export default DocumentInput