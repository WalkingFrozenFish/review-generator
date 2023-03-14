import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./App.module.css"
import FormBlock from './components/FormBlock/FormBlock'
import NameBlock from './components/NameBlock/NameBlock'
import ReviewBlock from './components/ReviewBlock/ReviewBlock'
import { generateReviewHandler } from './store/reviewSlice'

const App = () => {
    // const recomendationMessages = [
    //     { message: "Recomendation 1", point: "0.1" },
    //     { message: "Recomendation 2", point: "0.2" },
    //     { message: "Recomendation 3", point: "0.3" },
    // ]

    // const errorMessages = [
    //     { message: "Error 1", point: 1.1 },
    //     { message: "Error 2", point: 1.2 },
    //     { message: "Error 3", point: 1.3 },
    // ]

    // const resultMessages = [
    //     { message: "Result 1", point: 2.1 },
    //     { message: "Result 2", point: 2.2 },
    //     { message: "Result 3", point: 2.3 },
    // ]

    const data = useSelector((state) => state)
    const dispatch = useDispatch()

    const generateReview = () => {
        dispatch(generateReviewHandler())
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Review Generator</h2>
            <div className={styles.reviewForm}>
                <NameBlock />
                <ReviewBlock />
                <FormBlock title="Recomendation" category="recomendation" data={data.recomendation} />
                <FormBlock title="Error" category="error" data={data.error} />
                <FormBlock title="Result" category="result" data={data.result} />
                <button className={styles.generateReview} onClick={generateReview}>Generate review</button>
            </div>

            <div className={styles.resultCode}>
                <pre>
                    {data.htmlCode}
                </pre>
            </div>
        </div>
    )
}

export default App