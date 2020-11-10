import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import FriendList from './components/FriendList'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/AddFriend'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [newFriend, setNewFriend] = useState({
      id: '',
      username: '',
      email: '',
      password: ''
  })
  const [friends, setFriends] = useState([])

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
        <PrivateRoute exact path ='/protected' render={(props)=>{
          return <FriendList {...props} friends={friends} setFriends={setFriends} />
        }}/>
        <Route exact path="/login" render={(props)=>{
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />
        <Route exact path="/add_a_friend" render={(props)=>{
          return <AddFriend {...props} newFriend={newFriend} setNewFriend={setNewFriend} />
        }} />
        <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
