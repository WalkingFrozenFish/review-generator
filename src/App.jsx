import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./App.module.css"
import DocumentInput from './components/DocumentInput/DocumentInput'
import FormBlock from './components/FormBlock/FormBlock'
import Modal from './components/Modal/Modal'
import NameBlock from './components/NameBlock/NameBlock'
import ReviewBlock from './components/ReviewBlock/ReviewBlock'
import { generateReviewHandler, getDataFromLocalStorage } from './store/reviewSlice'

const App = () => {
    const [errorModal, setErrorModal] = useState({ message: "", status: false })
    const [noticeModal, setNoticeModal] = useState(false)

    const data = useSelector(state => state)
    const dispatch = useDispatch()

    const copyToClipboardHandler = async (e) => {
        try {
            await navigator.clipboard.writeText(e.target.innerText);
            setNoticeModal(true)
        } catch (err) {
            setErrorModal(true)
        }
    }

    const generateReview = () => {
        if (data.studentName.length === 0) {
            setErrorModal({
                message: "Введите имя студента...",
                status: true
            })
        } else {
            dispatch(generateReviewHandler())
        }
    }

    useEffect(() => {
        dispatch(getDataFromLocalStorage())
    }, [])

    return (
        <>
            {
                noticeModal ?
                    <Modal handler={() => setNoticeModal(false)} message="Код скопирован в буфер обмена..." type="notice" /> :
                    null
            }

            {
                errorModal.status ?
                    <Modal handler={() => setErrorModal({ message: "", status: false })} message={errorModal.message} type="error" /> :
                    null
            }

            <div className={styles.app}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Генератор рецензий:</h2>
                    <DocumentInput />
                    <NameBlock />
                    <ReviewBlock />
                </div>

                <div className={styles.leftBlock}>
                    {/* Рекомендации, ошибки, результаты */}
                    <FormBlock title="Рекомендации" category="recomendation" data={data.recomendation} />
                    <FormBlock title="Ошибки" category="error" data={data.error} />
                    <FormBlock title="Результат" category="result" data={data.result} />
                </div>

                <div className={styles.footer}>
                    <button className={styles.generate} onClick={generateReview}>Сгенерировать шаблон рецензии</button>
                    <div className={styles.resultReview}>
                        <pre onClick={copyToClipboardHandler}>
                            {data.htmlCode}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App