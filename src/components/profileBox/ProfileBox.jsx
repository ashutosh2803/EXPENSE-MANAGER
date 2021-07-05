import React from 'react'
import styles from "./ProfileBox.module.css";

const ProfileBox = () => {
    return (
        <div className={styles.profileWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjaO_dMO8xLZPOkLuzIOODumnXLo5qdhS-A&usqp=CAU" alt="profilePic" />
            <p>Ashutosh Kumar</p>
        </div>
    )
}

export { ProfileBox };
