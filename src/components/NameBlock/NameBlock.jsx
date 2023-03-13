import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNameHandler } from '../../store/reviewSlice';
import styles from "./NameBlock.module.css"

const NameBlock = () => {
    const dispatch = useDispatch();
    // const studentName = useSelector((state) => state.studentName)

    const changeNameHandler = (e) => {
        dispatch(addNameHandler({ name: e.target.value }))
    }

    return (
        <div className={styles.formBlock}>
            <p className={styles.label}>Name/Surname</p>
            {/* {studentName} */}
            <input type="text" placeholder="Name/Surname" className={styles.studentName} onChange={changeNameHandler} />
        </div>
    )
}

export default NameBlock