import React, { useState } from 'react'
import { StyledForm, StyledLoginButton, StyledLoginmenu, TopLoginmenu } from './style'
import { Col, Form, Input } from 'antd'
import { Row } from '../../Components/Row'
import request from '../../Connect/request'
import RegisterMenu from '../RegisterMenu/RegisterMenu'
import { Modal } from '../../Components/Modal'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { userLogin } from '../../Store/LoginSlice'
import { useEffect } from 'react'

const LoginMenu = ({ modalclosee,triggerr,prodtrigger}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm()
  const [registertrigger,setRegistertrigger] = useState(0)

  // ======  Modal Title and Content ========
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    form.resetFields()
  }, [prodtrigger,triggerr])
  
  const showModal = () => {
    setIsModalOpen(true);

  };

  const FormCancel = () => {
    setRegistertrigger(registertrigger + 1)
  }

  const modalclose = () => {
    handleOk();
  }

  const handleOk = () => {
    console.log('Clallll')
    setIsModalOpen(false);
    FormCancel()
  };
  const handleCancel = () => {
 
    setIsModalOpen(false);
    form.resetFields()
  };
  const onRegister = () => {
    modalclose()
    setRegistertrigger(registertrigger + 1)
    setModalContent(<RegisterMenu modalclose={modalclose} Regtrigger={registertrigger} handleOk={handleOk} />);
    showModal();
  }
  const onFinish = (value) => {
    AddUser(value)
    console.log(value, 'Successsss')
  }

  const onFinishFailed = (value) => {
    console.log(value, "Failedddddddd")
  }

  const dispatch = useDispatch();
  const URL = 'login'
  
  const AddUser = (values) => {
    request.post(`${URL}`, values)

      .then(function (response) {
        if (response.status === 200) {
          console.log(response, 'userrrrrrrrrrrrrr');
          const username = response.data;
          console.log(username, 'usernameusername');
          toast.success('You are logged in Successfully');
          dispatch(userLogin(username));
          form.resetFields();
          modalclosee()
        } else {
          toast.error('Wrong User Details, Please Try Again');
        }
      })
      .catch(function (error) {
        toast.error('Login Failed ');
        console.error(error, 'Faileddd');
      });
  }

  return (
    <StyledLoginmenu>
      <TopLoginmenu><h1>Login to your account</h1></TopLoginmenu>

      <StyledForm>
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            name={'email'}
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input placeholder='Email ID' style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item
            wrapperCol={{

              span: 24,
            }}
          ><Col span={24} md={24}>
              <StyledLoginButton htmlType='submit'>LOGIN</StyledLoginButton>
            </Col>

            <Row gutter={[12, 12]} style={{ marginTop: '20px' }}>
              <Col span={24} md={8}>
                No account yet?
              </Col>
              <Col span={24} md={16}>

                <a onClick={() => { onRegister() }}>REGISTER HERE</a>
              </Col>
            </Row>

          </Form.Item>
        </Form>
      </StyledForm>

      <Modal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={500} modalContent={modalContent} />

    </StyledLoginmenu>
  )
}

export default LoginMenu