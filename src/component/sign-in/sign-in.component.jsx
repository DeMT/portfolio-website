import React from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss'
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firbase.utils'
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'email': '',
            'password': ''
        }
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = async event => {
        const {email, password} = this.state
        event.preventDefault()
        await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                'email': '',
                'password': ''
            })
    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have account</h2>
                <span className="subtitle" >Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="email"
                        handleChange={this.handleChange}
                        type="email"
                        value={this.state.email}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        handleChange={this.handleChange}
                        type="password"
                        value={this.state.password}
                        label="password"
                        required />

                    <div className="buttons">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}
export default SignIn