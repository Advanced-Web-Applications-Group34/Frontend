import React from 'react';
import styles from '../Styles/UserSignupSuccess.module.css';

export default function UserSignupSuccess() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.success}>Account created!</h1>
            </div> 
        </div>
    )
}
