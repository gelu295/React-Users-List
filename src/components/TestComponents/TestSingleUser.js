import React from 'react'

import styles from '../../styles/TestStyles/TestSingleUser.css'

const TestSingleUser = ({user}) => {
    return (
        <div className="single-user-container">
            <div className="single-user">{user.name}</div>
            <div className="single-user">{user.username}</div>
        </div>
    )
}

export default TestSingleUser