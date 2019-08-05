import React from 'react'
import './header.style.scss'
import { ReactComponent as Logo } from '../../asset/crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firbase.utils'
const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => {auth.signOut()}}>SIGN OUT</div>
                        : <Link className="option" to= "/login">SIGN IN</Link>
                }

            </div>
        </div>
    )
}
export default Header