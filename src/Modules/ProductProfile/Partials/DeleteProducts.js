import { Button, Card } from 'antd';
import React from 'react';
import Flex from '../../../Components/Flex';
import { toast } from 'react-toastify';
import request from '../../../Connect/request';


const DeleteProducts = ({ product, handleOk,updateFunction}) => {
  console.log(product,'productproduct')

  const onDeleteProduct = () => {

    console.log('called', product.id)
    request
      .delete(`delete/${product.id}`)
      .then(function (response) {
        toast.success('Product deleted successfully');
        handleOk();
        updateFunction();
      })
      .catch(function (error) {
        toast.error('Failed to delete product');
        console.log(error);
      });
  };

  const onCancel = () => {
    handleOk();
  };
  return (
    <Card>
      <h1>Are you sure you want to delete this product?</h1>
      <Flex center gap={'10px'} style={{ marginTop: '20px' }}>
        <Button style={{ background: 'red', color: 'white' }} onClick={onDeleteProduct} updateFunction={updateFunction}>
          Yes
        </Button>
        <Button style={{ background: 'green', color: 'white' }} onClick={onCancel}>
          No
        </Button>
      </Flex>
    </Card>
  );
};

export default DeleteProducts;