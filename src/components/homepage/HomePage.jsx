import React from 'react'
import { ExpenseForm } from '../expenseForm/ExpenseForm';
import { ProfileBox } from '../profileBox/ProfileBox';
import { MoneyDetails } from '../moneyDetails/MoneyDetails';
import { Navbar } from '../navbar/Navbar';
import { Table } from '../table/Table';
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.expenseWrapper}>
                <ProfileBox />
                <MoneyDetails />
            </div>
            <div className={styles.expenseWrapper}>
                <ExpenseForm />
                <Table/>
            </div>
        </div>
    )
}

export {HomePage};
