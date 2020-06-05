import React from 'react'

import styles from '../styles/UsersList.css'


function UsersList({user}) {

    return (
        <div className="user-container">
            <div className="username"><h4>{user.name}</h4></div>
            <h4>{user.username}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.email}</h4>
            <h4>test</h4>
            <h4>test</h4>
        </div>
    )
}

export default UsersList