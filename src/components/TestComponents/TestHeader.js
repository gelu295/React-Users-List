import React from 'react'

const TestHeader = ({inputTextValue, setInputTextValue, setSortValue}) => {
    return (
        <div>
            <button onClick={() => setSortValue("name")}>Sort By Name</button>
            <button onClick={() => setSortValue("username")}>Sort By Username</button>
            <h4>Filter</h4>
            <input type="text" value={inputTextValue} onChange={event => setInputTextValue(event.target.value)}></input>
        </div>
    )
}

export default TestHeader;