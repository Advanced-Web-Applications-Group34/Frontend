import React, {useState} from 'react';
import UserSignupForm from './UserSignupForm';
import UserSignupSuccess from './UserSignupSuccess';



export default function UserForm({UserSignupForm}) {
    const[formIsSubmitted, setFormIsSubmitted] = useState (false);
    const submitForm = () => {
        setFormIsSubmitted (true);
    }

    return (
       <div>
           {/*<UserSignupForm/>*/}
           { formIsSubmitted ? (<UserSignupSuccess submitForm={submitForm}/>) : (<UserSignupForm/>)}
       </div>

   )
}
