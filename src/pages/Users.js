import React, {useState, useEffect} from 'react'
import UsersList from '../components/UsersList'

import Header from '../components/Header'

import styles from '../styles/Users.css'




function Users() {
    const [usersList, setUsersList] = useState([])
    const [filteredUsersList, setFilteredUsersList] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/users'

    // const url1 = 'https://api.woodpecker.co/rest/v1/campaign_list'
    // useEffect(() => {
    //     fetch(url1, {
    //         headers: {
    //             "Authorization": '87734.5503cc2a0b57d4e9d3d1b757cc9d18521d6f44f8997502ade00e3371aa2a3085'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data, 'HERE KUREW'))
    // }, [])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setUsersList(data))
    },[])

    const listElement = usersList.map((user, i) => {
        return <UsersList user={user} />
    })

    const filteredListElement = filteredUsersList.map((user, i) => {
        return <UsersList user={user} />
    })

    const test1 = filteredUsersList.length === 0 ? listElement : filteredListElement


    const filterUsers = (string) => {
        
        let filteredUsers = usersList.filter((user) => {
           if(user.name.includes(string) || user.username.includes(string)) {
                console.log(user)
           } 
        })
        
        // setFilteredUsersList(filteredUsers)
        
        console.log(filteredUsersList, 'w funkcji')
    }

    console.log(filteredUsersList, 'poza')

    return (
        <div className="border">
            <Header usersList={usersList} filterUsers={filterUsers}/>
            <div className="users-container users-styles">
                <div className="member-name">Member name</div>
                <div className="username">Username</div>
                <div className="mobile">Mobile</div>
                <div className="email">Email</div>
                <div className="operation">Operation</div>
                <div className="action">Action</div>
            </div>
            {test1}
        </div>
        
    )
}

export default Users