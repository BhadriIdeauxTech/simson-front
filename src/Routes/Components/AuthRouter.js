import React, { Fragment } from 'react'
import AuthPage from './AuthPage'
import { Routes, Route } from 'react-router-dom'
import { anonymous } from '../config/user'

const AuthRouter = ({ isAuthenticated }) => {

  console.log(anonymous, isAuthenticated, 'anonymous')
  return (
    <Fragment>
      {
        isAuthenticated ? (
          <AuthPage isAuthenticated={isAuthenticated} />
        ) : (
          <Routes>
            {anonymous.map(({ routePath, Component }) => {
              return (
                <Route
                  key={routePath}
                  path={routePath}
                  element={<Component />}
                ></Route>
              )
            })}
          </Routes>
        )
      }
    </Fragment >
  )
}

export default AuthRouter
