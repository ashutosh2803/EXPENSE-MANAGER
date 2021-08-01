import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HomePage } from '../homepage/HomePage';
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const [auth, setIsAuth] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        
    }, [])
    const handleLogin = () => {
        const payload = {
            email,
            password
        }
        axios.post("https://reqres.in/api/login", payload).then((res) => {
            setIsAuth(true);
            console.log("login success", res.data.token);
            history.push(<HomePage/>);
        }).catch((err) => {
            console.log(err);
            window.alert(err, "Please Try Again!");
        })
    }
    return ( 
        <div className={styles.formWrapper}>
            <h1 className={styles.formTitle}>LOGIN</h1>
            <div className={styles.inputWrapper}>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email here" name="email" />
            </div>
            <br />
            <div className={styles.inputWrapper}>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password here" name="password" />
            </div>
            <br />
            <button className={styles.login} onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export { LoginPage };
