import React, {useState} from 'react';
import '../Styles/signInForm.css';

export default function SignInForm() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    //manage login state
    const [allLogin, setAllLogin] = useState ([]);

    const submitForm = (e) => {
        e.preventDefault();
        //prevent default process of the browser when event occurs

        const newLogin = { email: email, password: password };

        setAllLogin([ ...allLogin, newLogin ]);
        //when hitting the login button, data stored as a props
    }

    return (
        <div className="form-wrapper">
            <h2>Create an account or log in</h2>
            <br></br>
            <h3>Don't have an account ? Sign up </h3>
            <form className="form-action" onSubmit={submitForm}>
                <div>
                    <label className="email">Email</label>
                    <br></br>
                    <input type="email" 
                            name="email" 
                            id="email" 
                            autocomplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                </div> 

                <div>
                    <label className="password">Password</label>
                    <br></br>
                    <input type="password" 
                            name="password" 
                            id="password" 
                            autocomplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br></br>

                <button className="btn" type="submit">Login</button>
            

            </form>

        </div>
    )
}