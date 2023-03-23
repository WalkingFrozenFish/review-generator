import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import WrapperBlock from '../../containers/WrapperBlock/WrapperBlock'
import { getData, resetDataFromLocalStorage } from '../../store/reviewSlice'
import styles from "./DocumentInput.module.css"
import TableRow from './TableRow/TableRow'

const DocumentInput = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        recomendation: {
            documentType: "recomendation",
            documentId: ""
        },
        error: {
            documentType: "error",
            documentId: ""
        },
        result: {
            documentType: "result",
            documentId: ""
        }
    })

    const changeDataHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: {
                documentType: e.target.name,
                documentId: e.target.value
            }
        })
    }

    const getDataHandler = (documentData) => {
        dispatch(getData(documentData))
    }

    const resetLocalStorage = () => {
        dispatch(resetDataFromLocalStorage())
    }

    return (
        <WrapperBlock>
            <h2 className={styles.title}>Выбор документов:</h2>
            <table >
                <thead></thead>
                <tbody>
                    <TableRow
                        rowTitle={"ID документа с рекомендациями"}
                        inputName={"recomendation"}
                        changeDataHandler={changeDataHandler}
                        getDataHandler={getDataHandler}
                        data={data.recomendation}
                    />

                    <TableRow
                        rowTitle={"ID документа с ошибками"}
                        inputName={"error"}
                        changeDataHandler={changeDataHandler}
                        getDataHandler={getDataHandler}
                        data={data.error}
                    />

                    <TableRow
                        rowTitle={"ID документа с результатами"}
                        inputName={"result"}
                        changeDataHandler={changeDataHandler}
                        getDataHandler={getDataHandler}
                        data={data.result}
                    />
                </tbody>
                <tfoot></tfoot>
            </table>
            <button className={styles.resetButton} onClick={resetLocalStorage}>Удалить данные из локального хранилища</button>
        </WrapperBlock>
    )
}

export default DocumentInput