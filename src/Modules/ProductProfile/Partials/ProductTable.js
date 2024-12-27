import { Button,Image, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Container } from '../../../Components/Container'
import { StyledProductTable, StyledTable } from '../../Login/style'
import request, { BASEURL } from '../../../Connect/request'
import { DeleteOutlined } from '@ant-design/icons'
import DeleteProducts from './DeleteProducts'
import { Modal } from '../../../Components/Modal'
import Flex from '../../../Components/Flex'
import { EditOutlined } from '@ant-design/icons'
import EditProducts from './EditProducts'


const ProductTable = () => {

  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callFunction, setCallFunction] = useState(0);


  console.log(BASEURL)

  // const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  // const handleDelete = (productId) => {
  //   dispatch(remove(productId));
  //   handleOk();
  // };
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    DisplayImage();
  }, [])

  useEffect(() => {
    if (callFunction) {
      // setImgUrl(null)
      DisplayImage();
    }
  }, [callFunction])

  useEffect(() => {
    setImgUrl(imgUrl)
  }, [imgUrl])


  const updateFunction = () => {
    setCallFunction(callFunction + 1);
  }

  console.log(callFunction, 'callFunction')

  const DisplayImage = () => {
    request.get('display')
      .then(function (response) {
        console.log(response, 'llllllllllll res');
        const blob = response.data;
        setImgUrl(blob);
        console.log(response.data, 'jjjjjj')
      })
  }

  console.log(imgUrl, 'lllllllllllllll imgurl')

  const removeProduct = (record) => {
    setModalContent(
      <DeleteProducts handleOk={handleOk} product={record} updateFunction={updateFunction} />
    );
    showModal();
  };

  const editProducts = (record) => {
    setModalContent(
      <EditProducts RecdData={record} handleOk={handleOk} updateFunction={updateFunction} />
    );
    showModal();
  };

  const TableValue = [
    {
      title: 'Serial no',
      render: (text, record, rowIndex) => rowIndex + 1,
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
    },
    {
      title: 'Product Image',
      dataIndex: 'url',
      render: (url) => {
        if (url) {
          return <Image src={`${BASEURL}${url}`} alt="Product Image" width={100} height={100} />;
        } else {
          return <span>No Image Available</span>;
        }
      }
    },
    {
      title: "Action",
      render: (text, record) => (<Flex center gap={'20px'}>
        <Button onClick={() => { removeProduct(record) }} icon={<DeleteOutlined />} />
        <Button onClick={() => { editProducts(record) }} icon={<EditOutlined />} />
      </Flex>
      )
    }

  ]
  return (
    <div>
      <StyledTable><h1 style={{ color: "#435763" }}>View Products</h1></StyledTable>

      <Container>
        <StyledProductTable>
          <Table columns={TableValue} dataSource={imgUrl} style={{ marginTop: '50px' }} />
        </StyledProductTable>
      </Container>
      <Modal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={800} modalTitle={modalTitle} modalContent={modalContent} />
    </div>
  )
}

export default ProductTable