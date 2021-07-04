import React, {useState} from 'react';
import styles from "./ExpenseForm.module.css";
import { v4 as uuid } from "uuid";

const ExpenseForm = () => {
    const [details, setDetails] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");

    const handleClick = () => {
        console.log(type)
        const payload = {
            id: uuid(),
            title,
            amount,
            type
        }
        console.log(payload)
        setDetails([...details, payload]);    
        console.log("updated Details",details);
    }
    return (
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="title here" value={title} required={true} name="amount" onChange={(e) => setTitle(e.target.value)} /><br/>
            <label htmlFor="amount">Amount</label>
            <input type="number" value={amount} name="amount" required={true} onChange={(e) => setAmount(e.target.value)} /><br/>
            <div style={{}}>
                <p>Type</p>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>
            <br/>
            <button onClick={() => handleClick()}>SUBMIT</button>
        </div>
    )
}

export { ExpenseForm };
