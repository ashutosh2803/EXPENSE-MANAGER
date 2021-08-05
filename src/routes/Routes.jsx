import React from 'react'
import { Route } from 'react-router-dom'
import { HomePage } from '../components/homepage/HomePage'
import { Navbar } from '../components/navbar/Navbar'

const Routes = () => {
    return (
        <div>
            <Navbar/>
        <switch>
                <Route exact path="/dashboard">
                    <HomePage/>
                </Route>
        </switch>
    </div>
    )
}

export { Routes };
