import React from 'react';
import styles from "./Table.module.css";

const Table = () => {
    return (
        <div className={styles.TableWrapper}>
            <div className={styles.TableHeading}>LAST TRANSACTIONS</div>
            <table className={styles.table}>
                <thead>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Rent</td>
                        <td>Credit</td>
                        <td>50000</td>
                        <td>15/1/2021</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { Table };
