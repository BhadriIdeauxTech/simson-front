import React, { useEffect, useState } from 'react'
import { StyledDetails, StyledProductDetails } from '../../Login/style'
import Input from '../../../Components/Input'
import { Row } from '../../../Components/Row'
import { Card, Col, Form } from 'antd'
import { Container } from '../../../Components/Container'
import Button from '../../../Components/Button'
import Flex from '../../../Components/Flex'
import { useSelector } from 'react-redux'
import request from '../../../Connect/request'
import { toast } from 'react-toastify'
import { CustomUpload } from '../../../Components/CustomUpload'
// import {useHistory }  from 'react-router-dom'
// import { add } from '../../../Store/imageSlice'


const ProductDetails = () => {

  const [form] = Form.useForm();
  const [selectedImgUrl, setSelectedImgUrl] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState(null)
  // const history = useHistory();
  // const [imgUrl, setImgUrl] = useState(null);

  const selectedimage = useSelector(store => store.addproducts.products)
  console.log(selectedimage, 'selectedimage')

  const onFinishFailed = (values) => {
    console.log(values, 'Failedddd')
  }

  const onFinish = (values) => {

    const formData1 = new FormData();
    formData1.append('productName', values?.productName)
    formData1.append('metaTitle', values?.metaTitle ? values?.metaTitle : '')
    formData1.append('metaKeywords', values?.metaKeywords ? values?.metaKeywords : '')
    formData1.append('description', values?.description ? values?.description : '')
    formData1.append('friendly', values?.friendly ? values?.friendly : '')

    if (values?.image && values.image.length > 0) {
      values.image.forEach((file, index) => {
        formData1.append(`image`, file.originFileObj);
      });
    } else {
      console.error('No images selected');
    }

    console.log('called formData1111111', [...formData1.entries()])

    Post_Product(formData1);

  };


  useEffect(() => {
    setSelectedImgUrl(selectedImgUrl)
  }, [selectedImgUrl])

  console.log(selectedFiles, 'fileeeeeeeeeeee')


  const Post_Product = (values) => {

    console.log([...values.entries()], 'llllllllll rr');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };


    request.post('add', values, config)
      .then(function (response) {
        // AddtoDisplay()
        console.log(response, 'fdddddddddddddddddddd');

        if (response.status == 200) {
          console.log('calleddd')
          // dispatch(add({ ...values, imgUr l: response.data.url }));
          // DisplayImage()
          form.resetFields();
          toast.success('Successfully Added Products');
        }
        else {
          toast.error('Failed');
          console.log('Products details failed');
        }
      })

      .catch(function (error) {
        console.log(error, 'l Pro');
      });
  }


  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form
        form={form}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }} autoComplete='off'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <StyledProductDetails><h1 style={{ color: "#435763" }}>Product Details</h1>
          <StyledDetails><Container><Card style={{ background: "#993366" }}>
            <Row gutter={[24, 24]}>

              <Col span={24} md={12}>
                <Input
                  rules={[
                    {
                      required: true,
                      message: 'Please enter product Name',
                    },
                  ]} label={"Product Name"} name={'productName'} placeholder={'Product Name'} />
              </Col>

              <Col span={24} md={12}>
                <CustomUpload
                  rules={[
                    {
                      required: true,
                      message: 'Please Select product Image',
                    },
                  ]} label={'Upload'} name={'image'} listType='picture-card' maxCount={1} accept='.png,.jpeg,.jpg' />
              </Col>
            </Row>

            {/* <FormSubTitle>SEO Information</FormSubTitle>

            <Row gutter={[24, 24]}>

              <Col span={24} md={12}>
                <Input label={"Meta Title"} name={'metaTitle'} placeholder={'Meta Title'} />
              </Col>

              <Col span={24} md={12}>
                <Input label={"Meta Description"} name={'description'} placeholder={'Meta Description'} />
              </Col>

              <Col span={24} md={12}>
                <Input label={"Meta Keywords"} name={'metaKeywords'} placeholder={'Meta Keywords'} />
              </Col>


              <Col span={24} md={12}>
                <Input label={"Friendly URL"} name={'friendly'} placeholder={'Friendly URL'} />
              </Col>
            </Row> */}
            <Flex center gap={'20px'} style={{ margin: '10px' }}>
              <Button.Success text={'ADD'} htmlType={'submit'} />
              <Button.Danger text={'RESET'} onClick={() => onReset()} />
            </Flex>
          </Card>
          </Container>
          </StyledDetails>
        </StyledProductDetails>
      </Form>
    </div>
  )

}

export default ProductDetails