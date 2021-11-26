import React from 'react';
import styles from '../Styles/SignUpForm.module.css'

export default function SignUpForm() {
    return (
        <div className = {styles.card}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p>SIGN UP</p>
                </div>
                <div>
                    <button className={styles.btn1}>Create an user account</button>
                </div>
                <div>
                    <button className={styles.btn2}>Create a restaurant account</button>
                </div>
            </div>
        </div>
    )
}
