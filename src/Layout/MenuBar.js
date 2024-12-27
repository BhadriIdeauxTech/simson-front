
import React, { useEffect, useRef, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { ContentHeader, ContentLayout, LogoutHolder, MainContent, MainLayout, SideBar } from './Style'
import NavHeader from './Partials/NavHeader/NavHeader';
import SideMenu from './Partials/Menu/SideMenu';
import { Modal } from '../Components/Modal';
import Flex from '../Components/Flex';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { superAdminLogout } from '../Store/AdminLoginSlice';


const AdminLayout = ({ children }) => {

  const [collapse, setCollapse] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const SiderRef = useRef(null)
  const Headerref = useRef(null)
  
  const [marginHeight, setMarginHeight] = useState('')
  useEffect(() => {

    setMarginHeight(Headerref.current.scrollHeight)
  }, [windowWidth])
  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth)
    if (windowWidth < 992) {
      setCollapse(true)
    }
    else {
      setCollapse(false)
    }
  }, [windowWidth])

  const AdminLogOut=()=>{
    dispatch(superAdminLogout());
    navigate('/login')
  }

  const LogOutModal = () => (
    <div>
      <h1 style={{ fontSize: '1.2rem' }}>Are you Sure You Want to Logout ?</h1>
      <br />
      <Flex gap={'20px'} W_100 center verticallyCenter>
        <Button.Success text={'Logout'} onClick={AdminLogOut}/>
        <Button.Danger text={'Cancel'} onClick={handleOk}/>
      </Flex>
    </div>

  )

  const onViewStudent = () => {
    setModalContent(<LogOutModal />);
    setModalTitle("Log Out");
    showModal();
  }

  const LogOutBtn = () => {
    return (
      <LogoutHolder>
        <h3 onClick={onViewStudent}>Logout</h3>
      </LogoutHolder>
    )
  }

  return (
    <MainLayout >
      <ContentHeader ref={Headerref} collapsed={collapse}>
        <NavHeader collapse={collapse} setCollapse={setCollapse} />
      </ContentHeader>

      <SideBar ref={SiderRef} collapsed={collapse}>
        <SideMenu />
        <LogOutBtn />
      </SideBar>
      <ContentLayout collapsed={collapse} >
        <MainContent height={marginHeight}>
          {children}
        </MainContent>
      </ContentLayout>

      <Modal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={400} modalTitle={modalTitle} modalContent={modalContent} />

    </MainLayout>
  )
};
export default AdminLayout;