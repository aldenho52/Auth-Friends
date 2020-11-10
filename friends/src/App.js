import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import FriendList from './components/FriendList'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);


  const logout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      }

  return (
    <Router>
      <div className="App">
        
        <ul>
        {((!isLoggedIn) ? (<li> <Link to="/login">Login</Link></li>) : (<div></div>))}
        <li>
          <Link to="#" onClick={logout}>Logout</Link>
        </li>
        { ((isLoggedIn) ? (<li> <Link to="/protected">Friends</Link></li>) : (<div></div>)) }
        </ul>

        <h1>Friends</h1>
        <Switch>
      
        <PrivateRoute exact path ='/protected' component={FriendList} />
    
        <Route exact path="/login" render={(props)=>{
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />

        <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Route exact path="/add_a_friend" render={(props)=>{
//   return <AddFriend {...props}  />
// }} />