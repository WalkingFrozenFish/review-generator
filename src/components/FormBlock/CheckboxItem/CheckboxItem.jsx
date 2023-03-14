import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStatusItem } from '../../../store/reviewSlice';
import styles from "./CheckboxItem.module.css"

const CheckboxItem = ({ message, point, itemId, category }) => {
    const dispatch = useDispatch();

    const changeStatusHandler = (e) => {
        // console.log(e.target)
        dispatch(changeStatusItem({ category: category, id: itemId }))
    }

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
                            <span>{point} баллов</span>
                        </td>
                        <td className={styles.checkboxCell}>
                            <input type="checkbox" onChange={changeStatusHandler} />
                        </td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default CheckboxItem