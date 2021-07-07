import React, { useContext, useState } from 'react'
import styles from "./MoneyDetails.module.css";
import { DetailsProvider } from '../DetailsContext/DetialsAuthProvider';

const MoneyDetails = () => {
    const { details } = useContext(DetailsProvider);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);

    React.useEffect(() => {
        let income = 0;
        let expense = 0;
        let balance = 0;
        for (let i = 0; i < details.length; i++){
            if (details[i].type === "credit") {
               
            }
        }
    }, [])
    return (
        <div className={styles.MoneyDetailsWrapper}>
            <div className={styles.MoneyRow}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhR9JpL7qyX9XydE6aHCpaiN2O3lfm0DwUFNSsc2bmPaBiAx2E51Yd2bWZr1trpeYtLk&usqp=CAU" alt="income_logo" />
                </div>
                <div>
                    <p>Total Income</p>
                    <p><span style={{fontSize: "25px", fontWeight: "bold"}}>&#8377;</span> 151000</p>
                </div>
            </div>
            <div className={styles.MoneyRow}>
                <div>
                    <img src="data:image/png;base64,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" alt="expense_logo" />
                </div>
                <div>
                    <p>Total Expenses</p>
                    <p><span style={{fontSize: "25px", fontWeight: "bold"}}>&#8377;</span> 5000</p>
                </div>
            </div>
            <div className={styles.MoneyRow}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nTtGVqyMy_hBUTTSh24b1jpGFfR6Ihb3Yjf9LRkL7oE23p4-f0LsFUtxohSQrfaX-ac&usqp=CAU" alt="balance_logo" />
                </div>
                <div>
                    <p>Total Balance</p>
                    <p><span style={{fontSize: "25px", fontWeight: "bold"}}>&#8377;</span> 146000</p>
                </div>
            </div>
        </div>
    )
}

export { MoneyDetails };
