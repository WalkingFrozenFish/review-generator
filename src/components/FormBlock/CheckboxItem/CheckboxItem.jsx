import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeStatusItem } from '../../../store/reviewSlice';
import styles from "./CheckboxItem.module.css"

const CheckboxItem = ({ message, point, itemId, category, checked }) => {
    const dispatch = useDispatch();

    const changeStatusHandler = (e) => {
        dispatch(changeStatusItem({ category: category, id: itemId }))
    }

    const formatter = new Intl.NumberFormat("ru", {
        style: "unit",
        unit: "stone"
    })

    return (
        <div className={styles.item} id={itemId}>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className={styles.messageCell}>
                            {message}
                        </td>
                        <td className={styles.pointCell}>
                            {/* <span>{point ? point : 0} баллов</span> */}
                            <span>{formatter.format(point)}</span>
                        </td>

                        <td className={checked ? styles.check : styles.notCheck} onClick={changeStatusHandler}>
                        </td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div >
    )
}

export default CheckboxItem