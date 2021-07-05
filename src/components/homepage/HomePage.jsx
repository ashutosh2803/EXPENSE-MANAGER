import React from 'react'
import { ExpenseForm } from '../expenseForm/ExpenseForm';
import { ProfileBox } from '../profileBox/ProfileBox';
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <ExpenseForm />
            <ProfileBox/>
        </div>
    )
}

export {HomePage};
