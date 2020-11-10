import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FriendList from './components/FriendList'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <Router>
      <div className="App">
      
        <h1>Friends</h1>
        <Switch>
        <PrivateRoute exact path ='/protected' component={FriendList}/>
        <Route path="/login" render={(props)=>{
          return <Login {...props} />
        }} />
        <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
