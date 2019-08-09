import React from 'react'
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
import './login-page.style.scss'
const LoginPage = () =>{
    return(
        <div className = "login-page">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default LoginPage