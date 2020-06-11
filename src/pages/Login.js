import React, {useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import styles from '../styles/Login.css'

import {Context} from '../Context'

const LoginPage = (props) => {
    const {state, handleLogin, isAuth} = useContext(Context)

    const [userData, setUserData] = useState({
        userLogin: "",
        userPassword: ""
    })

    const baton = isAuth ? <Link to="/users"><button>Elo</button></Link> : <button>elo</button>

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userData.userLogin === state.login && userData.userPassword === state.password){
            handleLogin()
            console.log(props)
            props.history.push('/users')
        } else {
            alert("Please provide correct username and password!")
        }
    }


    return (
        <div className="container">
        <form className="form">
            <div className="logo">User's List App</div>
            <h2>Log in.</h2>
            <p className="login-text">Log in with your data that you entered during registration.</p>
                <div className="user-data">
                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        name="userLogin"
                        value={userData.userLogin}
                        placeholder="Enter username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="text"
                        name="userPassword"
                        value={userData.userPassword}
                        placeholder="Enter password"
                        onChange={handleChange}
                        required
                    />
                </div>
                </div>
                <button className="btn" onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )
}

export default LoginPage;