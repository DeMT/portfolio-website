import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css';
import {Route} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
function App() {
  return (
    <div className="App">
      <Route exact path = "/shop" component = {Shop} />
      <Route exact path = "/" component = {Homepage} />
    </div>
  );
}

export default App;
