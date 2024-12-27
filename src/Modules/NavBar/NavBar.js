import React, { useState } from 'react'
import { CollapseNav, Iconplace, LoginIcon, LogoPlace, NavigationBar, UserName } from './style'
import { NavData } from '../../Datas/Data'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineMenu } from 'react-icons/md'
import Button from '../../Components/Button'
import { UserOutlined } from '@ant-design/icons'
import { Modal } from '../../Components/Modal'
import LoginMenu from '../LoginMenu/LoginMenu'
import { Row } from '../../Components/Row'
import { Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../../Components/Flex'
import logo from '../../Assets/Images/Logo/Fish.svg'
import logoword from '../../Assets/Images/Logo/simson.svg'
import { useNavigate } from 'react-router-dom'
import { userLogout } from '../../Store/LoginSlice'
import { FaPowerOff } from 'react-icons/fa'
import { toast } from 'react-toastify'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [trigger, settrigger] = useState(0)

  const items = [
    {
      label: "Log in",
      value: "login"
    },
    {
      label: 'Log Out',
      value: 'logout'
    }
  ]

  const user = useSelector(store => store.loginentry.user)

  const LogOutModal = () => (
    <div>
      <h1 style={{ fontSize: '1.2rem' }}>Are you Sure You Want to Logout ?</h1>
      <br />
      <Flex gap={'20px'} W_100 center verticallyCenter>
        <Button.Success text={'Logout'} onClick={UserLogOut} />
        <Button.Danger text={'Cancel'} onClick={handleOk} />
      </Flex>
    </div>
  )

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const UserLogOut = () => {
    dispatch(userLogout());
    modalclose()
    toast.success("You Have Successfully Logged Out")
    navigate('/')
  }
  const modalclose = () => {
    handleOk();
  }
  const onLogOut = () => {
    setModalContent(<LogOutModal />);
    setModalTitle("Log Out");
    showModal();
  }
  const onLogIn = () => {
    settrigger(trigger + 1)
    setModalContent(<LoginMenu triggerr={trigger} modalclosee={modalclose} />);
    setModalTitle("Log Out");
    showModal();
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = (link) => {
    setActiveBtn(!activeBtn);
    setActiveLink(link);
  };

  console.log(user)
  return (
    <div><NavigationBar>
      <Row gutter={[24, 24]}>
        <Col span={24} md={8}>
          <LogoPlace>
            <img src={logo} alt='logo' width={'56px'} /> &nbsp;
            <img src={logoword} alt='logoword' width={'112px'} />
          </LogoPlace>
        </Col>
        <Col span={24} md={8} >
          <CollapseNav>
            {NavData.map(({ key, name, path }) => {
              return (
                <a key={key}
                  onClick={() => {
                    setIsOpen((prev) => !prev)
                    handleClick(path);
                  }}
                  href={path}
                  className={activeLink === path ? 'active' : ''}
                >
                  {name}
                </a>
              )
            }
            )}
          </CollapseNav>
        </Col>
        <Col span={24} md={8} >
          <Flex spaceBetween>
            <LoginIcon>
              <Row>
                <Col span={24} md={12}>
                  
                </Col>
                <Col span={24} md={12}>
                </Col>
              </Row>
              {
                user ?
                  (<Button icon={<FaPowerOff />} onClick={() => { onLogOut() }} />) : (
                    <>
                      <Button icon={<UserOutlined />} onClick={() => { onLogIn() }} /> &nbsp;
                    </>
                  )
              }

              &nbsp;&nbsp;&nbsp;&nbsp;<UserName><h1 style={{ color: "red" }}>{user?.name}</h1></UserName>

            </LoginIcon>

            <CollapseNav dsnone State={`${isOpen ? "none" : "flex"}`}>
              {NavData.map(({ key, name, path }) => {
                return (
                  <a key={key}
                    onClick={() => {
                      setIsOpen((prev) => !prev)
                      handleClick(path);
                    }}
                    href={path}
                    className={activeLink === path ? 'active' : ''}
                  >
                    {name}
                  </a>
                )
              }
              )}
            </CollapseNav>

            <Iconplace
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              {isOpen ? <MdOutlineMenu /> : <AiOutlineClose />}
            </Iconplace>
          </Flex>
        </Col>
      </Row>
    </NavigationBar>
      <Modal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={500} modalContent={modalContent} />
    </div>
  )
}
export default NavBar