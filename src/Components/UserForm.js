import React, {useState} from 'react';
import UserSignupForm from './UserSignupForm';
import UserSignupSuccess from './UserSignupSuccess';


export default function UserForm() {
    /*const[formIsSubmitted, setFormIsSubmitted] = useState (false);
    const submitForm = () => {
        setFormIsSubmitted (true);
    }*/
    return (
       <div>
           <UserSignupForm/>
           {/*{!formIsSubmitted ? 
           (<UserSignupForm submitForm={submitForm}/>): (<UserSignupSuccess/>) }*/}
       </div>

   )
}
