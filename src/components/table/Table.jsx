import React, { useContext } from 'react';
import { DetailsProvider } from '../DetailsContext/DetialsAuthProvider';
import styles from "./Table.module.css";

const Table = () => {
    const { details } = useContext(DetailsProvider);
    return (
        <div className={styles.TableWrapper}>
            <div className={styles.TableHeading}>LAST TRANSACTIONS</div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {details?.map((item) => <tr key={item.id}>
                        <td>{item.title}</td>
                        <td style={{ color: item.type === "credit" ? "green" : "red", fontWeight: "bold"}} >{item.type}</td>
                        <td style={{color: item.type === "credit" ? "green" : "red", fontWeight: "bold"}} >{item.type === "credit" ? item.amount : - + item.amount}</td>
                        <td>{item.timeStamp}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export { Table };
