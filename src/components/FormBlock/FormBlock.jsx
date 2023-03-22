import React from 'react'
import WrapperBlock from '../../containers/WrapperBlock/WrapperBlock'
import CheckboxItem from './CheckboxItem/CheckboxItem'
import styles from "./FormBlock.module.css"

const FormBlock = ({ title, data, category }) => {
    return (
        <WrapperBlock>
            <h2 className={styles.title}>{title}:</h2>
            {
                data.map((item, index) => {
                    return <CheckboxItem category={category} key={index} message={item.message} point={item.point} itemId={item.id} checked={item.checked} />
                })
            }
        </WrapperBlock>
    )
}

export default FormBlock