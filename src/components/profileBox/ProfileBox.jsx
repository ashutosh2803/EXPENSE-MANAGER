import React, { useEffect, useState } from 'react'
import styles from "./ProfileBox.module.css";

const ProfileBox = () => {
    let [time, setTime] = useState("");
    let [date, setDate] = useState("");
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toDateString());
        })
        return (() => {
            clearInterval(timer);
        })
    },[])
    return (
        <div className={styles.profileWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjaO_dMO8xLZPOkLuzIOODumnXLo5qdhS-A&usqp=CAU" alt="profilePic" />
            <p className={styles.name}>Ashutosh Kumar</p>
            <p>{date}</p>
            <p style={{padding: "2%"}}>{time}</p>
        </div>
    )
}

export { ProfileBox };
