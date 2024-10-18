import React, { useState }  from 'react'

import { RegisterUser } from '../api/User.js';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email : ",email);
        console.log("Password : ",password);
        
        const response = RegisterUser(email,password);
   
        
    }

    return(
        <>
           <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="email" required><b>Email</b></label>
                    <input onChange={(e) => (setEmail(e.target.value))} type="text" placeholder="Enter Email" name="email" id="email" required />
                    <label htmlFor="psw" required><b>Password</b></label>
                    <input onChange={(e) => (setPassword(e.target.value))} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <hr />
                    <button type="submit" className="registerbtn">Register</button>
                </div>
            </form>

        </>
    )
}

export default Register;