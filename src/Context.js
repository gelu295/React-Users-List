import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Context = React.createContext();

function ContextProvider({children}) {
    const [state, setState] = useState({
        login: "test",
        password: '1234'
    })
    const [isAuth, setIsAuth] = useState(false)

    const handleLogin = () => {
        setIsAuth(true)
    }

    const handleLogout = () => {
        setIsAuth(false)
    }


    return (
        <Context.Provider value={{state, handleLogin, isAuth}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

