import React from 'react'
import styles from "./MoneyDetails.module.css";

const MoneyDetails = () => {
    return (
        <div className={styles.MoneyDetailsWrapper}>
            <div className={styles.MoneyRow}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhR9JpL7qyX9XydE6aHCpaiN2O3lfm0DwUFNSsc2bmPaBiAx2E51Yd2bWZr1trpeYtLk&usqp=CAU" alt="income_logo" />
                </div>
                <div>
                    <p>Total Income</p>
                    <p>151000</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export { MoneyDetails };
