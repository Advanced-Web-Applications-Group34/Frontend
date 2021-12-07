import React, {useState} from 'react';
import styles from'../Styles/UserSignupForm.module.css';
//import UserSignupSuccess from '../Components/UserSignupSuccess';

export default function UserSignupForm() {
    const handleSubmitForm = (e) => {
        alert('Account' + name + 'created !');
        e.preventDefault();
    }

    // const[formIsSubmitted, setFormIsSubmitted] = useState (false);
    // const Submit = () => {
    //     setFormIsSubmitted (true);
    // }

    const [email, setEmail] = useState ("");
    const [name, setName] = useState ("");
    const [password, setPassword] = useState ("");

    return (
        <div className={styles.container}>
            <div className={styles.appWrapper}>
                <div>
                    <h2 className={styles.title}>Enter the following information</h2>
                </div>

                <form className={styles.formWrapper} onSubmit={handleSubmitForm}>
                    <div class Name={styles.name}> 
                        <label className={styles.label}>Full Name</label>
                        <input className={styles.input} 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.email}>
                        <label className={styles.label}>Email</label>
                        <input className={styles.input} 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.password}>
                        <label className={styles.label}>Password</label>
                        <input className={styles.input}
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.submit}>
                        {/* <button onClick={Submit}>Sign Up</button> */}
                        <button >Sign Up</button>
                    </div>
                </form>
            </div>
            {/* { formIsSubmitted && <UserSignupSuccess/>} */}
        </div>
    )
}
