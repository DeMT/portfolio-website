import React from 'react'
import { auth, createUserProfile } from '../../firebase/firbase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.style.scss'
class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            'displayName': '',
            'email': '',
            'password': '',
            'comfirmPassword': ''
        }
    }
    handleSubmit = async (event) => {
        const { displayName, email, password, comfirmPassword } = this.state
        event.preventDefault()
        if (password !== comfirmPassword) {
            alert("password don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, { displayName })
            this.setState({
                'displayName': '',
                'email': '',
                'password': '',
                'comfirmPassword': ''
            })

        } catch (error) {
            console.log(error)
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {

        return (
            <div className="sign-up">
                <h2 className="title"> I do not have a account</h2>
                <span>sign up with your email and password.</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" required />
                    <FormInput type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} label="displayName" required />
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" required />
                    <FormInput type="password" name="comfirmPassword" value={this.state.comfirmPassword} onChange={this.handleChange} label="comfirmPassword" required />
                    <CustomButton type="submit"  >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp