import React, {useState, useEffect} from 'react'

import TestUsersList from '../../components/TestComponents/TestUserList'
import TestSingleUser from '../../components/TestComponents/TestSingleUser'
import TestHeader from '../../components/TestComponents/TestHeader'

const TestUsersPage = () => {
    const [usersData, setUsersData] = useState([])
    const [inputTextValue, setInputTextValue] = useState("")
    const [sortValue, setSortValue] = useState("")

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setUsersData(data))
    },[])

    const filteredUsersList = inputTextValue ? usersData.filter(user => {
        return user.name.includes(inputTextValue) || user.username.includes(inputTextValue)
    }) : usersData

    const sortedUsersList = sortValue ? filteredUsersList.sort((prev, next) => {
        return prev[sortValue] > next[sortValue]
    }) : filteredUsersList


    const usersList = filteredUsersList.map(user => {
        return <TestSingleUser user={user}/>
    })


    return (
        <div>
            <TestHeader inputTextValue={inputTextValue} setInputTextValue={setInputTextValue} setSortValue={setSortValue}/>
            <TestUsersList/>
            {usersList}
        </div>
    )
}

export default TestUsersPage