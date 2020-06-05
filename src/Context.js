import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Context = React.createContext();

function ContextProvider({children}) {
    const [state, setState] = useState({
        login: "test",
        password: '1234'
    })
    const [isAuth, setIsAuth] = useState(false)
    const [filteredArray, setFilteredArray] = useState([])

    const handleLogin = () => {
        setIsAuth(true)
    }

    const handleLogout = () => {
        setIsAuth(false)
    }

    const filterName = (arr) => {
        const filterTest = arr.filter()
    }

    return (
        <Context.Provider value={{state, handleLogin, isAuth}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

