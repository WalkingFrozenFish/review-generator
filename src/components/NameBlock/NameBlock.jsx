import React from 'react'
import { useDispatch } from 'react-redux';
import WrapperBlock from '../../containers/WrapperBlock/WrapperBlock';
import { addNameHandler } from '../../store/reviewSlice';
import styles from "./NameBlock.module.css"

const NameBlock = () => {
    const dispatch = useDispatch();

    const changeNameHandler = (e) => {
        dispatch(addNameHandler({ name: e.target.value }))
    }

    return (
        <WrapperBlock>
            <div className={styles.nameBlock}>
                <p className={styles.label}>Имя студента</p>
                <input type="text" placeholder="..." className={styles.studentName} onChange={changeNameHandler} />
            </div>
        </WrapperBlock>
    )
}

export default NameBlock