import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth'

const initialFriend = {
    name: '',
    age: '',
    email: ''
}

const EditForm = props => {
    const { push } = useHistory();
    const [friend, setFriend] = useState(initialFriend);
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`/friends/${id}`)
        .then(res => {
            setFriend(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleChange = e => {
        e.persist()
        let value = e.target.value


        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/friends/${id}`, friend)
            .then(res => {
                console.log(res)
                props.setFriends(res.data)
                push('/protected')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                type="text"
                name="name"
                value={friend.name}
                onChange={handleChange}
            />
            </label>
            <label>Age:
            <input
                type="text"
                name="age"
                value={friend.age}
                onChange={handleChange}
                />
            </label>
            <label>Email:
            <input
                type="text"
                name="email"
                value={friend.email}
                onChange={handleChange}
                />
            </label>
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditForm