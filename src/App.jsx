import React from 'react'
import styles from "./App.module.css"
import FormBlock from './components/FormBlock/FormBlock'
import NameBlock from './components/NameBlock/NameBlock'
import ReviewBlock from './components/ReviewBlock/ReviewBlock'

const App = () => {
    const recomendationMessages = [
        { message: "Recomendation 1", point: "0.1" },
        { message: "Recomendation 2", point: "0.2" },
        { message: "Recomendation 3", point: "0.3" },
    ]

    const errorMessages = [
        { message: "Error 1", point: 1.1 },
        { message: "Error 2", point: 1.2 },
        { message: "Error 3", point: 1.3 },
    ]

    const resultMessages = [
        { message: "Result 1", point: 2.1 },
        { message: "Result 2", point: 2.2 },
        { message: "Result 3", point: 2.3 },
    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Review Generator</h2>
            <div className={styles.reviewForm}>
                <NameBlock />
                <ReviewBlock />
                <FormBlock title="Recomendation" data={recomendationMessages} />
                <FormBlock title="Error" data={errorMessages} />
                <FormBlock title="Result" data={resultMessages} />
                <button className={styles.generateReview}>Generate review</button>
            </div>
        </div>
    )
}

export default App