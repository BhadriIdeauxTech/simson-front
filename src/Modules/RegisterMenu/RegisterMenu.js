import React, { useEffect } from 'react'
import { StyledForm, StyledRegisterButton, StyledRegistermenu, TopRegistermenu } from './style'
import { Form, Input, InputNumber } from 'antd'
import request from '../../Connect/request'
import { Select } from '../../Components/Select'
import { toast } from 'react-toastify'


const RegisterMenu = ({ modalclose, Regtrigger, handleOk }) => {

  const [form] = Form.useForm();

  const URL = 'register'

  const onFinish = (values) => {
    AddCustomer(values)
    console.log(values, 'Successsss')
  }

  const onFinishFailed = (value) => {
    console.log(value, "Failedddddddd")
  }

  useEffect(() => {
    form.resetFields()
  }, [Regtrigger])

  const AddCustomer = (values) => {
    request.post(`${URL}`, values)
      .then(function (response) {
        if (response.status === 200) {
          toast.success("Registered Successfully !!!")
          modalclose()
          handleOk()
          form.resetFields()
        }
      })
      .catch(function (error) {
        toast.error("Registration Failed")
        console.log(error, 'Faileddd')
      })
  }
  const gender = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    },
    {
      label: 'Others',
      value: 'others'
    },

  ];

  return (
    <StyledRegistermenu>
      <TopRegistermenu>
        <h1>New Account Register</h1> </TopRegistermenu>
      <StyledForm>
        <Form
          form={form}
          name="register"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name={['name']}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item
            name={['email']}
            form={form}
            rules={[
              {
                type: 'email',
                required: true
              },
            ]}
          >
            <Input placeholder='Email ID' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 8, // Minimum password length
                message: 'Password must be at least 8 characters long',
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, // Strong password pattern
                message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)',
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item
            name={['address']}

            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Address' />
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select options={gender} placeholder={'Select Your  Gender'} style={{ padding: '20px' }} />
          </Form.Item>

          <Form.Item name={['phone']}>
            <InputNumber placeholder='WhatsApp Number' maxLength={10} minLength={10} style={{ width: '100%', padding: "7px" }} />
          </Form.Item>
          <Form.Item name={['pinCode']}>
            <InputNumber placeholder='Pincode' style={{ width: '100%', padding: "7px" }} />
          </Form.Item>
          <StyledRegisterButton htmlType='submit'>CREATE AN ACCOUNT</StyledRegisterButton>
        </Form>
      </StyledForm>
    </StyledRegistermenu>
  )
}
export default RegisterMenu