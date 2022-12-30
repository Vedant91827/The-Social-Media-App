import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
        <div className='card'>
            {/* Left Side */}
            <div className='left'>
                <h1>Social Book</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque,</p>
                <span>Do you have an account ?</span>
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </div>
            {/* Right Side */}
            <div className='right'>
                <h1>Register</h1>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder='Username' autoComplete='off'/>
                    <input type="password" placeholder='Password' autoComplete='off'/>
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
)
};

export default Register;
