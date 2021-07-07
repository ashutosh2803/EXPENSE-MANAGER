import React, {useContext, useState} from 'react';
import styles from "./ExpenseForm.module.css";
import { v4 as uuid } from "uuid";
import { DetailsProvider } from '../DetailsContext/DetialsAuthProvider';

const ExpenseForm = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");
    const { details, changeDetails } = useContext(DetailsProvider);

    const handleClick = () => {
        console.log(type)
        const date = Date(Date.now());
        const time = date.split("GMT")
        const payload = {
            id: uuid(),
            title,
            amount,
            type,
            timeStamp: time[0]
        }
        console.log(payload)
        changeDetails(payload)
        console.log("updated Details", details);
        // window.alert("added new record, Click Ok")
    }
    return (
        <div className={styles.formWrapper}>
            <h1 className={styles.formHeading}>New Expense</h1>
            <div className={styles.inputBox}>
                <label htmlFor="title">Title</label>
                <input required type="text" placeholder="title here" value={title} name="amount" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.inputBox}>
                <label htmlFor="amount">Amount</label>
                <input required type="number" value={amount} name="amount" onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className={styles.inputBox1}>
                <label>Type</label>
                <select required onChange={(e) => setType(e.target.value)}>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>
            <br/>
            <button className={styles.submitBtn} onClick={() => handleClick()}>SUBMIT</button>
        </div>
    )
}

export { ExpenseForm };
