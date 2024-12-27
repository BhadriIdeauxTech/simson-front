import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { Button,Col, Form, Row} from 'antd'
import Flex from '../../../Components/Flex';
import request, { BASEURL } from '../../../Connect/request';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CustomUpload } from '../../../Components/CustomUpload';

const EditProducts = ({ RecdData, handleOk, updateFunction }) => {

    console.log(RecdData, 'RecdData ')
    const [form] = Form.useForm();

    const [selectedProduct, setSelectedProduct] = useState({});

    const [ImageInitialValue, setImageInitialValue] = useState({});
    const [productName, setProductName] = useState('');

    // const base = 'http://192.168.29.66:8086'

    useEffect(() => {
        console.log('kkkkkkkkkkkkk');
        const awardsPhotoUrls = {
            product: [{
                uid: 1,
                name: `${RecdData.productName}`,
                status: 'done',
                url: `${BASEURL}${RecdData.url}`
            }]
        }
        setImageInitialValue(awardsPhotoUrls)

    }, [RecdData])

    useEffect(() => {
        if (RecdData) {
            form.setFieldsValue({ image: ImageInitialValue.product })
        }
    }, [RecdData, ImageInitialValue])



    const navigate = useNavigate();

    const onFinish = (values) => {
        EditImage(values)

        console.log(values, 'Sucessssss')
    };

    const onFinishFailed = (values) => {
        console.log(values, 'Failedddd')
    }


    useEffect(() => {
        // form.setFieldsValue({ id: selectedProduct.id })
        form.setFieldsValue({ image: ImageInitialValue.product })
        form.setFieldsValue({ productName: selectedProduct.productName })
        // form.setFieldsValue({ url: selectedProduct.url })
    }, [selectedProduct])



    useEffect(() => {
        form.setFieldsValue(RecdData)
        form.setFieldsValue({ image: ImageInitialValue.product })
    }, [RecdData, handleOk])

    useEffect(() => {
        form.setFieldsValue({ productName: RecdData.productName });
        setProductName(RecdData.productName);
    }, [RecdData]);

    console.log(RecdData, 'RecdDataRecdData')

    const EditImage = (values) => {

        console.log(values, 'llllllllllllllllll')
        let formdata = new FormData();

        // formdata.append('image', selectedFile ? selectedFile : '')
        formdata.append('productName', values?.productName)
        values?.image.forEach((file) => {
            formdata.append(`image`, file.originFileObj || '');
        });
        // formdata.append('metaTitle', values?.metaTitle ? values?.metaTitle : '')
        // formdata.append('metaKeywords', values?.metaKeywords ? values?.metaKeywords : '')
        // formdata.append('description', values?.description ? values?.description : '')
        // formdata.append('friendly', values?.friendly ? values?.friendly : '')

        console.log([...formdata.entries()], 'formdata')
        request.put(`edit/${values?.id}`, formdata)
            .then(function (response) {
                toast.success('Updated Successfully');
                updateFunction();
                onCancel();
                console.log(response, 'editttttttttttt')
            })
            .catch(function (error) {
                toast.error('Failed')
                console.log(error, 'lllll');
            });
    }

    const onCancel = () => {
        handleOk()
    }

    const [selectedImage, setSelectedImage] = useState(null);

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedFile(event.target.files[0])
    //     setSelectedImage(URL.createObjectURL(file));
    // };

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Update Products </h1>
            <Form
                form={form}
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row gutter={[24, 24]}>
                    <Col span={24} md={10}>
                        <Input name={'productName'} label={'Product Name : '} />
                        <Input name={'id'} display={'none'} />
                    </Col>
                    <Col span={24} md={14}>
                        {/* <Form.Item
                            name="url"
                            label="Image"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select an image',
                                },
                            ]}
                        > */}

                        <div>
                            {/* {selectedImage && (
                                    <ImageHolder>
                                        <img src={selectedImage} alt="Selected Image" />
                                    </ImageHolder>)} */}

                            <CustomUpload
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select product Image',
                                    },
                                ]} label={'Upload'} name={'image'} listType='picture-card' maxCount={1} accept='.png,.jpeg,.jpg' />
                        </div>
                        {/* </Form.Item> */}
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
                    <Button style={{ background: 'green', color: 'white' }} htmlType='submit' >Update</Button>
                    <Button style={{ background: 'red', color: 'white' }} onClick={onCancel} >Cancel</Button>
                </Flex>

            </Form>
        </div>
    )
}

export default EditProducts