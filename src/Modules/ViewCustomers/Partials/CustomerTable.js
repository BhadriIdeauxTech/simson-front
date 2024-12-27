import React, { useEffect, useState } from 'react'
import { StyledProductTable, StyledTable } from '../../Login/style'
import { Container } from '../../../Components/Container'
import { Table } from 'antd'
import { toast } from 'react-toastify'
import request from '../../../Connect/request'

export const CustomerTable = () => {

    const [dataSource, setDataSource] = useState(null);

    useEffect(() => {
      DisplayCustomer();
    }, [])
  
    const DisplayCustomer = () => {
      request.get('details')
        .then(function (response) {
          console.log(response.data, 'ghbsdjf');
          setDataSource(response.data);
        })
        .catch(function (error) {
            toast.error('Something went Wrong')
        })
    }
  

    const TableValue = [
        {
            title: 'Sl.No',
            render: (text, record, rowIndex) => rowIndex + 1,
        },
        {
            title: 'Customer Name',
            dataIndex: 'name',
        },
        
        {
            title: 'Email',
            dataIndex: 'email',
        },
        
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
    ]

    return (
        <div>
            <StyledTable><h1 style={{ color: "#435763" }}>View Customers</h1></StyledTable>

            <Container>
                <StyledProductTable>
                    <Table columns={TableValue} dataSource={dataSource} style={{ marginTop: '50px' }} />
                </StyledProductTable>
            </Container>
        </div>
    )
}
