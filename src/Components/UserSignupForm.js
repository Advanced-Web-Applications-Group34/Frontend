import React, {useState} from 'react';
import styles from'../Styles/UserSignupForm.module.css';

export default function UserSignupForm() {
    const submitForm = (e) => {
        e.preventDefault();
    }
    const [email, setEmail] = useState ("");
    const [name, setName] = useState ("");
    const [password, setPassword] = useState ("");

    return (
        <div className={styles.container}>
            <div className={styles.appWrapper}>
                <div>
                    <h2 className={styles.title}>Enter the following information</h2>
                </div>

                <form className={styles.formWrapper} onSubmit={submitForm}>
                    <div clasName={styles.name}> 
                        <label className={styles.label}>Full Name</label>
                        <input className={styles.input} 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div clasName={styles.email}>
                        <label className={styles.label}>Email</label>
                        <input className={styles.input} 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div clasName={styles.password}>
                        <label className={styles.label}>Password</label>
                        <input className={styles.input}
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.submit}>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
