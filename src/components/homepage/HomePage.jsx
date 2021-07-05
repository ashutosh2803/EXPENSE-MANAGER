import React from 'react'
import { ExpenseForm } from '../expenseForm/ExpenseForm';
import { ProfileBox } from '../profileBox/ProfileBox';
import { MoneyDetails } from '../moneyDetails/MoneyDetails';
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <ExpenseForm />
            <ProfileBox />
            <MoneyDetails/>
        </div>
    )
}

export {HomePage};
