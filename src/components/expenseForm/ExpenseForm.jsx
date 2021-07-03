import React, {useState} from 'react';
import styles from "./ExpenseForm.module.css";
import { v4 as uuid } from "uuid";

const ExpenseForm = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");

    const handleClick = () => {
        const payload = {
            id: uuid(),
            title,
            amount,
            type
        }
        
    }
    return (
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={title} required="true" name="amount" onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="amount">Amount</label>
            <input type="number" value={amount} name="amount" required="true" onChange={(e) => setAmount(e.target.value)} />
            <label htmlFor="type">Type</label>
            <input type="radio" name="type" value="credit" />
            <input type="radio" name="type" value="debit" />
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}

export { ExpenseForm };
