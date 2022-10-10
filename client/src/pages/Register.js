import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
     <h1>Register</h1>
     <form>
        <input required type="text" placeholder="username"></input>
        <input required type="email" placeholder="email"></input>
        <input required type="password" placeholder="password"></input>
        <button>Register</button>
        <span>Do have an account?<br/>
            <Link to="/login">Login</Link>
        </span>
     </form>
    </div>
  )
}

export default Register
