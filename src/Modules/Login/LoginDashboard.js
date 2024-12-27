import { Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { Row } from '../../Components/Row'
import { useNavigate } from 'react-router-dom'
import { DashCardHolder} from './style'
import request from '../../Connect/request'
import { toast } from 'react-toastify'
import { FaUsers,FaShoppingCart } from 'react-icons/fa'

const LoginDashboard = () => {

  const navigate = useNavigate()
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    DisplayCustomer();
  }, [])

  const DisplayCustomer = () => {
    request.get('count')
      .then(function (response) {
        console.log(response, 'llllllllllll res');
        setDataSource(response.data);
      })
      .catch(function (error) {
        toast.error('Something went Wrong')
      })
  }

  return (
    <div><h1 style={{ textAlign: 'center', fontSize: '1.5rem', color: "#435763",marginBottom:'25px' }}>DASHBOARD</h1>
      <Row gutter={[24, 24]}>
        <Col span={24} sm={12} md={12}>
          <DashCardHolder onClick={()=>navigate('/viewCustomers')}>
          <Row gutter={[12, 12]} style={{alignItems:'center'}}>
              <Col span={6} style={{display:'flex',justifyContent: 'center'}}>
                <FaUsers size={34} color='#fff'/>
              </Col>
              <Col span={18}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <h1 style={{color:'#fff',fontSize:'1.2rem'}}>Total Customers</h1>
                  </Col>
                  <Col span={24}>
                    <h1 style={{color:'#fff',fontSize:'1.4rem'}}>{dataSource?.total_customer}</h1>
                  </Col>
                </Row>
              </Col>
            </Row>
          </DashCardHolder>
        </Col>
        <Col span={24} sm={12} md={12} >
          <DashCardHolder onClick={()=>navigate('/viewproduct')}>
            <Row gutter={[12, 12]} style={{alignItems:'center'}}>
              <Col span={6} style={{display:'flex',justifyContent: 'center'}}>
                <FaShoppingCart size={34} color='#fff'/>
              </Col>
              <Col span={18}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <h1 style={{color:'#fff',fontSize:'1.2rem'}}>Total Products</h1>
                  </Col>
                  <Col span={24}>
                    <h1 style={{color:'#fff',fontSize:'1.4rem'}}>{dataSource?.total_products}</h1>
                  </Col>
                </Row>
              </Col>
            </Row>
          </DashCardHolder>
        </Col>
      </Row>
    </div>
  )
}


export default LoginDashboard