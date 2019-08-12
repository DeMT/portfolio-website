import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './component/header/header.component'
import LoginPage from './pages/login-page/login-page.component'
import { auth, createUserProfile } from './firebase/firbase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {

  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot((snapShot) => {


          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    }
    )
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {

    return (

      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" render={() => (this.props.currentUser ? <Redirect to="/" /> : <LoginPage />)} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser })

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
