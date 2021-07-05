import React from 'react'
import { ExpenseForm } from '../expenseForm/ExpenseForm';
import { ProfileBox } from '../profileBox/ProfileBox';
import { MoneyDetails } from '../moneyDetails/MoneyDetails';
import { Navbar } from '../navbar/Navbar';
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.expenseWrapper}>
                <ProfileBox />
                <MoneyDetails />
            </div>
            <ExpenseForm/>
        </div>
    )
}

export {HomePage};
