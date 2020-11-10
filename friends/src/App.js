import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import FriendList from './components/FriendList'
import Login from './components/Login'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <h1>Find a Friend</h1>
        <Switch>
        <Route path="/login" render={(props)=>{
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />
        <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
