import React, {useState} from "react";
import styles from "../../Styles/FormStyle/BasicInfo.module.css";



export default function BasicInfo() {
    const handleSubmitForm = (e) => {
        alert("Account" + name + "created !");
        e.preventDefault();
    };

    // const[formIsSubmitted, setFormIsSubmitted] = useState (false);
    // const Submit = () => {
    //     setFormIsSubmitted (true);
    // }

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [types, setTypes] = useState({
        value: 'Buffet'
    });
    const [price, setPrice] = useState({
        value: '€'
    });
    const [hours, setHours] = useState('');
    

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.title}>Enter the following information</h2>
                </div>

                <form className={styles.formWrapper} onSubmit={handleSubmitForm}>
                    <div class Name={styles.name}>
                        <label className={styles.label}>Restaurant Name</label>
                        <input
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class Name={styles.address}>
                        <label className={styles.label}>Address</label>
                        <input
                        className={styles.input}
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={styles.email}>
                        <label className={styles.label}>Email</label>
                        <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.password}>
                        <label className={styles.label}>Password</label>
                        <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div >
                    <div className={styles.subInfo1}>
                        <label className={styles.label}>Operating Hour:</label>
                        <div className={styles.hour}>
                            <p className={styles.timeTitle}>
                                From:
                                <input className={styles.timeBox}
                                    type="time"
                                    value={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                />
                            </p>
                            <p className={styles.timeTitle}>
                                To:
                                <input className={styles.timeBox}
                                    type="time"
                                    value={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                />
                            </p>
                        </div>

                    </div>
                    <div className={styles.subInfo2}>
                        <div className={styles.types}>
                            <label className={styles.label}>Restaurant Type:</label>                            
                            <br></br>
                            <select className={styles.resType} value={types} onChange={(e) => setTypes(e.target.value)}>
                                <option value="Buffet">Buffet</option>
                                <option value="Fast-food">Fast-food</option>
                                <option value="Fast-casual">Fast-casual</option>
                                <option value="Casual dining">Casual dining</option>
                                <option value="Fine dining">Fine dining</option>
                            </select>
                        </div>
                        <div className={styles.price}>
                            <label className={styles.label}>Price Level:</label> 
                            <br></br>
                            <select className={styles.resType} value={price} onChange={(e) => setPrice(e.target.value)}>
                                <option value="€">€</option>
                                <option value="€€">€€</option>
                                <option value="€€€">€€€</option>
                                <option value="€€€€">€€€€</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.submit}>
                        {/* <button onClick={Submit}>Sign Up</button> */}
                        <button>Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
