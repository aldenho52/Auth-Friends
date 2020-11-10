import React, { useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import AddFriend from './AddFriend'
import PrivateRoute from './PrivateRoute'

const FriendList = (props) => {
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

    return (
        <Router>
        <div>
        <Link to="/add_a_friend">Add Friend</Link>
        {friends.map(friend => {
            return <p key={friend.id}>{friend.name}</p>
        })}
        <Switch>
            <PrivateRoute exact path="/add_a_friend" component={AddFriend} />
        </Switch>
        </div>
        </Router>
    )
}

export default FriendList
