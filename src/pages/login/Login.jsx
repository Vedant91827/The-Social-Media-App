import React, { useContext } from 'react'
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { useState } from 'react';



const Login = () => {
    
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })
    const [err, setErr] = useState(null)

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setInputs(prev=>({...prev,[e.target.name]:e.target.value }));
    };
    
    const {login} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            await login(inputs);
            navigate("/")

        } catch(err){
            setErr(err.response.data)
        }
    };

    return (
        <div className='login animate__bg'>
            <div className='card'>
                {/* Left Side */}
                <div className='left'>
                    <h1>Hello !!!</h1>
                    <h2>Good to see you again.</h2>
                    <br /><br /><br />
                    <span>Do you have account</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                {/* Right Side */}
                <div className='right'>
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder='Username' name='username' onChange={handleChange} />
                        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login