import React, { useContext } from 'react'
import './login.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className='login animate__bg'>
            <div className='card'>
                {/* Left Side */}
                <div className='left'>
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque,</p>
                    <span>Do you have account</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                {/* Right Side */}
                <div className='right'>
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder='Username' autoComplete='off'/>
                        <input type="password" placeholder='Password' autoComplete='off'/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login