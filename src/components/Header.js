import React, {useState, useEffect} from 'react'
import styles from '../styles/Header.css'

const Header = ({filterUsers, inputText1, usersList, sortByKey}) => {

    const [inputText, setInputText] = useState("")
    const [sortBy, setSortBy] = useState("Sort by:")


    console.log(inputText1, 'header')
    const handleInputChange = (event) => {
        const {value} = event.target
        setInputText(value)
    }
    
    useEffect(() => {
            filterUsers(inputText)
    }, [inputText])

    useEffect(() => {
        sortByKey(usersList, sortBy)
    }, [sortBy])


    const changeSortName = (name) => {
        setSortBy(name)
    }

    return (
        <header>
            <div className="logo-name">
                <h4>User's List</h4>
                <input type="text" name="inputText" value={inputText} onChange={handleInputChange}/>
            </div>
            <ul>
            </ul>
            <div className="dropdown">
                    <button className="dropbtn">{sortBy}</button>
                    <ul>
                        <li onClick={() => changeSortName("name")}>name</li>
                        <li onClick={() => changeSortName("username")}>username</li>
                    </ul>
            </div>
        </header>
    )
}

export default Header;