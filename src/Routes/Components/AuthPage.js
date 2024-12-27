import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { adminAuthenticated } from '../config/user'
import Flex from '../../Components/Flex'
import styled from 'styled-components'
import AdminLayout from '../../Layout/MenuBar'

const PageFlex = styled(Flex)`
  overflow: hidden;
`
const AuthPage = ({ isAuthenticated }) => {

  const navigate = useNavigate()
  console.log(isAuthenticated, 'Auth')
  
  useEffect(() => {
    if (!isAuthenticated) {
      console.log(isAuthenticated, 'called')
      navigate('/')
    }
  }, [isAuthenticated,navigate])

  return (
    <PageFlex>
      {isAuthenticated && (
        <>
          <AdminLayout>
            <Routes>
              {adminAuthenticated.map(({ routePath, Component }) => {
                return (
                  <Route
                    key={routePath}
                    path={routePath}
                    element={<Component />}
                  ></Route>
                )
              })}
            </Routes>
          </AdminLayout>
        </>
      )}
    </PageFlex>
  )
}

export default AuthPage
