import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './component/header/header.component'
import LoginPage from './pages/login-page/login-page.component'
import { auth } from './firebase/firbase.utils'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'currentUser': null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ 'currentUser': user })
    }
    )
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {

    return (

      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
