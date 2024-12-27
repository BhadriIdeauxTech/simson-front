import React from 'react'
import { Modal as AntdModal } from 'antd';
import styled from 'styled-components';

export const Modal = ({ modalTitle, modalContent, isVisible, handleOk, handleCancel, width,centered }) => {
  return (
    <StyledModal 
    title={modalTitle} 
    open={isVisible} 
    onOk={handleOk} 
    onCancel={handleCancel} 
    width={width}
    centered={centered}
    footer={false}
    // mask={false}
    maskClosable={false}
    >
      {modalContent}
    </StyledModal>
  )
}


const StyledModal = styled(AntdModal)`
& .ant-modal-title{
  font-size:1.5rem;
  text-transform:uppercase;
  border-bottom:1px solid rgb(235 226 226);
  /* background-color: green;
  scroll-behavior: none;
  overflow: hidden;
  height: auto !important; */

}
& .ant-modal-body{
  margin-top:20px;
}

/* .ant-modal-body {
  overflow: hidden !important;
}

.ant-modal-content {
  height: auto !important; */
/* } */
`;