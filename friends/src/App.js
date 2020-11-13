import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import FriendList from './components/FriendList'
import Login from './components/Login'
import AddFriend from './components/AddFriend'
// import PrivateRoute from './components/PrivateRoute'
import axiosWithAuth from './utils/axiosWithAuth'


function App(props) {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [friends, setFriends] = useState([])

  const getData = () => {
      axiosWithAuth()
      .get('/friends')
      .then(res => {
          setFriends(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }

  useEffect(() => {
      getData()
  }, [friends])

  const logout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      }

  return (
    <Router>
      <div className="App">
      
        <ul>
        {((!isLoggedIn) ? (<li> <Link to="/login">Login</Link></li>) : (<div></div>))}

        <Link to="/" onClick={logout}>Logout</Link>

        { ((isLoggedIn) ? (<li> <Link to="/protected">Friends</Link></li>) : (<div></div>)) }
        </ul>

        <h1>Friends</h1>
        <Switch>
      
        <Route exact path ='/protected' render={(props)=> {
          return <FriendList {...props} friends={friends} getData={getData} setFriends={setFriends} /> 
        }} />
    
        <Route exact path="/login" render={(props)=>{
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />

        <Route exact path='/add-friend' render={props => {
          return <AddFriend {...props} friends={friends} setFriends={setFriends} />
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