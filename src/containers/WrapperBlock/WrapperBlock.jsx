import React from 'react'
import styles from "./WrapperBlock.module.css"

const WrapperBlock = (props) => {
    return (
        <div className={styles.wrapperBlock}>{props.children}</div>
    )
}

export default WrapperBlock