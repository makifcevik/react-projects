import React, { useState } from 'react'
import { validateCredentials } from '../validation';

function SignupForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submittedData, setSubmittedData] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        let errorMessage = validateCredentials(name, email, password);
        if(!errorMessage) 
        {
            setSubmittedData({name: name, email: email, password: password});
            setError("");
        }
        else
        {
            setError(errorMessage);
        }
    }

    return (
        <>
            <form onSubmit={submitForm} className='flex flex-col space-y-4 w-1/2 mx-auto mt-10'>
                <label htmlFor='name' className='font-bold'>Name</label>
                <input type='text' placeholder='name' name='name' id='name' onChange={(e) => setName(e.target.value)}
                    className="border-2 p-2 rounded" aria-label="Enter your name"
                >

                </input>

                <label htmlFor='email' className="font-bold">Email</label>
                <input type='email' placeholder='example@email.com' name='email' id='email' onChange={(e) => setEmail(e.target.value)}
                    className="border-2 p-2 rounded" aria-label="Enter your email"
                >
                
                </input>

                <label htmlFor='password' className="font-bold">Password</label>
                <input type='password' placeholder='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)}
                    className="border-2 p-2 rounded" aria-label="Enter your password"
                >

                </input>

                <button type='submit'
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
                
                
                {error && <p className='text-red-500'>{error}</p>}
                {Object.keys(submittedData).length > 0 && (
                    <div className='mt-6 p-4 border-2 rounded'>
                        <h2 className='font-bold text-lg'>Submitted Data:</h2>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Password:</strong> {submittedData.password}</p>
                    </div>
                )}

            </form>

        </>

  )
}

export default SignupForm;
