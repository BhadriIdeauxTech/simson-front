
import React from 'react'
import AuthRouter from './Components/AuthRouter'
import { Routes, Route } from 'react-router'

const Routers = ({ token }) => {
    const isAuthenticated = Boolean(token)

    console.log(isAuthenticated ,'lll isAuthenticated')
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <AuthRouter isAuthenticated={isAuthenticated}/>
                }
            />
        </Routes>
    )
}

export default Routers
