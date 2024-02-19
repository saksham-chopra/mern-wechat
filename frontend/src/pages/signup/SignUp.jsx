import React, { useState } from 'react'
import GenderCheckbox from "./GenderCheckbox";
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
const SignUp = () => {
  const [inputs,SetInputs]=useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading,signup}=useSignup();

  const handleCheckboxChange = (gender) => {
    SetInputs({...inputs, gender});
  }
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs);
  }
  
  return (
    		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    				<h1 className='text-3xl font-semibold text-center text-gray-300'>
    					Sign Up <span className='text-blue-900'> WeChat</span>
    				</h1>
    
    				<form onSubmit={handleSubmit}>
    					<div>
    						<label className='label p-2'>
    							<span className='text-base label-text'><strong>Full Name</strong></span>
    						</label>
    						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10'
                 value={inputs.fullName} 
                 onChange={(e)=> SetInputs({...inputs,fullName:e.target.value})}
                 />
    					</div>
    
    					<div>
    						<label className='label p-2 '>
    							<span className='text-base label-text'><strong>Username</strong></span>
    						</label>
    						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
                value={inputs.username}
                onChange={(e)=>SetInputs({...inputs,username:e.target.value})}
                />
    					</div>
    
    					<div>
    						<label className='label'>
    							<span className='text-base label-text'><strong>Password</strong></span>
    						</label>
    						<input
    							type='password'
    							placeholder='Enter Password'
    							className='w-full input input-bordered h-10'
                  value={inputs.password}
                onChange={(e)=>SetInputs({...inputs,password:e.target.value})}
    						/>
    					</div>
    
    					<div>
    						<label className='label'>
    							<span className='text-base label-text'><strong>Confirm Password</strong></span>
    						</label>
    						<input
    							type='password'
    							placeholder='Confirm Password'
    							className='w-full input input-bordered h-10'
                  value={inputs.confirmPassword}
                onChange={(e)=>SetInputs({...inputs,confirmPassword:e.target.value})}
    						/>
    					</div>
    
    					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
    
    					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to={'/login'}>
    						Already have an account?
    					</Link>
    
    					<div>
              <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
    					</div>
    				</form>
    			</div>
    		</div>
    	);
    };

export default SignUp;