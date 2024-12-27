import React from 'react'
import { BackBtn, LoginDetails, StyledLogin } from './style'
import { Form } from 'antd'
import Button from '../../Components/Button'
import Flex from '../../Components/Flex'
import request from '../../Connect/request'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'
import { useDispatch } from 'react-redux'
import { superAdminLogin } from '../../Store/AdminLoginSlice'
import LoginInput from '../../Components/LoginInput'
import LoginInputPassword from '../../Components/LoginInputPassword'

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form] = useForm();
    const onFinish = (value) => {
        AllowAdmin(value)
        console.log(value, 'Successsss')
    }

    const onReset = () => {
        form.resetFields();
    }
    const onFinishFailed = (value) => {
        console.log(value, "Failedddddddd")
    }

    const URL = 'admin/login'

    const AllowAdmin = (values) => {
        request.post(`${URL}`, values)
            .then(function (response) {
                if (response.status === 200 ) {
                    toast.success('Admin Logged in Successfully')
                    console.log(response.data,'llllllll response.data');
                    dispatch(superAdminLogin(response.data))
                    navigate('/')
                }
                else {
                    toast.error('Please Enter Currect Details')
                }
            })
            .catch(function (error) {
                console.log(error.response.data.error,'llll')
                toast.error(`${error.response.data.error}`)

            })
    }

    return (
        <Form
            form={form}
            labelCol={{
                span: 24,
            }}
            wrapperCol={{
                span: 24,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            {/* <NavBar/> */}
            <StyledLogin>
                {/* <h1 style={{ textAlign: 'center', paddingBottom: "100px" }}>
                    LOGIN
                </h1> */}
                <LoginDetails>

                    <LoginInput label={'EMAIL ID : '} placeholder={'Enter Your Mail ID'} type={'email'} name={'email'} rules={[
                        {
                            required: true,
                            message: 'Please enter the Mail Id'
                        }
                    ]
                    } />
                    <br/>
                    <LoginInputPassword label={'PASSWORD : '} placeholder={'Enter the password'} name={'password'} rules={[
                        {
                            required: true,
                            message: 'Please enter the password '
                        }
                    ]} />
                    <Flex center gap={'20px'} style={{ marginTop: '40px' }}>
                        <Button.Success text={'LOG IN'} htmlType={'submit'} />
                        <Button.Danger text={'RESET'} onClick={() => onReset()} />
                    </Flex>

                    <BackBtn onClick={()=>navigate('/')}>
                        <span>Go To Website</span>
                    </BackBtn>
                </LoginDetails>
            </StyledLogin>
        </Form>
    )
}

export default LoginPage