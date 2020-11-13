import React from 'react'
import { useHistory } from 'react-router-dom'

const FriendList = (props) => {
const { friends } = props
const { push } = useHistory();


    return (
        <div>
        <button onClick={()=>{push('/add-friend')}}>Add Friend</button>
        {friends.map(friend => {
            return <p key={friend.id}>{friend.name}</p>
        })}
        </div>
    )
}

export default FriendList