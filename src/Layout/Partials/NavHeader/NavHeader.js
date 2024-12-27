import { Row } from 'antd'
import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BtnSideHolder, HeaderIconHolder, LogoHolder } from '../../../Modules/Login/style'


const NavHeader = ({ collapse, setCollapse }) => {

  const collapsed = collapse
  const setCollapsed = setCollapse

  return (
    <>
      <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Row style={{ alignItems: 'center' }}>
            <LogoHolder>
              <h1>Simson</h1>
            </LogoHolder>
            <BtnSideHolder>
              <AiOutlineMenuUnfold className='header__icon' onClick={() => setCollapsed(!collapsed)} />
            </BtnSideHolder>
          </Row>
        </div>
        <HeaderIconHolder>

        </HeaderIconHolder>
      </Row>

    </>
  )
}

export default NavHeader
