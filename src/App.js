import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './component/header/header.component'
function App() {
  return (

    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
