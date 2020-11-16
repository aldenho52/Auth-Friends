import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import FriendList from './components/FriendList'
import Login from './components/Login'
import AddFriend from './components/AddFriend'
import EditForm from './components/EditForm'
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
  }, [])

  const logout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      }

  return (
    <Router>
      <div className="App">
      <div className='nav-bar' >
        {((!isLoggedIn) ? ( <Link className='nav-link' to="/login">Login</Link>) : (<div></div>))}

        {((isLoggedIn) ? ( <Link className='nav-link' to="/" onClick={logout}>Logout</Link>) : (<div></div>))}
        

        { ((isLoggedIn) ? ( <Link className='nav-link' to="/protected">Friends</Link>) : (<div></div>)) }
      </div>


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

        <Route path='/edit-friend/:id' render={(props) => {
          return <EditForm {...props} setFriends={setFriends}/>
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