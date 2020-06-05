import React, {useState, useEffect} from 'react'
import styles from '../styles/Header.css'

const Header = ({filterUsers}) => {

    const [inputText, setInputText] = useState("")

    const handleInputChange = (event) => {
        const {value} = event.target
        setInputText(value)
        console.log(inputText, 'inpuit')
        filterUsers(inputText)
    }

    
    return (
        <header>
            <div className="logo-name">
                <h4>User's List</h4>
                <input type="text" name="inputText" value={inputText} onChange={handleInputChange}/>
            </div>
        </header>
    )
}

export default Header;