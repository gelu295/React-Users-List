import React, {useState, useEffect} from 'react'
import UsersList from '../components/UsersList'

import Header from '../components/Header'

import styles from '../styles/Users.css'




function Users() {
    const [usersList, setUsersList] = useState([])
    const [filteredUsersList, setFilteredUsersList] = useState([])
    const [inputText1, setInputText1] = useState("")

    const url = 'https://jsonplaceholder.typicode.com/users'

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
               return user
           } 
        })
        
        setFilteredUsersList(filteredUsers)
        
    }

    const sortByKey = (array, key) => {
        const sorted = [...array].sort((a, b) => {
            let x = a[key]
            let y = b[key]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        })
        console.log(usersList)
        setUsersList(sorted)
    }

    return (
        <div className="border">
            <Header usersList={usersList} filterUsers={filterUsers} inputText1={inputText1} setInputText1={setInputText1} sortByKey={sortByKey}/>
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