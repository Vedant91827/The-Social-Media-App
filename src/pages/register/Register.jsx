import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    //To fetch the api created 
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    })
    const [err, setErr] = useState(null);
    
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs);
        }catch(err){
            setErr(err.response.data)
        }
    };
    
    console.log(err);
  return (
    <div className='register'>
        <div className='card'>
            {/* Left Side */}
            <div className='left'>
                <h1>The Social Book</h1>
                <h2>Few Clicks away to create your first Social Book account !</h2>
                <span>Do you have an account ?</span>
                <br /><br />
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </div>
            {/* Right Side */}
            <div className='right'>
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder='Username' name="username" onChange={handleChange} autoComplete='off'/>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                    <input type="password" placeholder='Password' name="password" onChange={handleChange} autoComplete='off'/>
                    <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
)
};

export default Register;
