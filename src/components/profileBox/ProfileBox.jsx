import React from 'react'
import styles from "./ProfileBox.module.css";

const ProfileBox = () => {
    return (
        <div className={styles.profileWrapper}>
            <img src=".../img/profile.png" alt="profilePic" />
            <p>Ashutosh Kumar</p>
        </div>
    )
}

export { ProfileBox };
