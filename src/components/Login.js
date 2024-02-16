import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        </div>
      
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-333'/>}
                <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-333'/>
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-333'/>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
                {isSignInForm && <p className='text-center cursor-pointer' onClick={toggleSignInForm}>New to Netflix? <span className='text-red-700'>Sign up now.</span></p>}
                {!isSignInForm && <p className='text-center cursor-pointer' onClick={toggleSignInForm}>Already registered? <span className='text-red-700'>Sign In now.</span></p>}
            
            </form>
       
    </div>
  )
}

export default Login