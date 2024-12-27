import React, { useEffect, useState } from 'react';
import { Card, Col, Input, Pagination, Select } from 'antd';
import Meta from 'antd/es/card/Meta';
import { BsWhatsapp } from 'react-icons/bs';
import { StyledButton, StyledHeading, StyledImage, StyledPagination, StyledSearch, SyledSelect } from './style';
import { Row } from '../../Components/Row';
import request, { BASEURL } from '../../Connect/request';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Flex from '../../Components/Flex';
import LoginMenu from '../LoginMenu/LoginMenu';
import { Modal } from '../../Components/Modal';


export const ProductPage = ({ imgUrl }) => {
    const [name, setName] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20); // Number of items to display per page
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [trigger, settrigger] = useState(0)

    const noProductsMessage = "Sorry , No such products available . Try Other Products . . .";

    const { Search } = Input;

    const onSearch = (value) => {
        setSearchQuery(value); // Update searchQuery as the user types
    };

    const LoginMenuOpen = () => {
        settrigger(trigger + 1)
        setModalContent(<LoginMenu handleOk={handleOk} prodtrigger={trigger} />);
        setModalTitle("Log Out");
        showModal();
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handlePageSizeChange = (newPageSize) => {
        setItemsPerPage(newPageSize);
        setCurrentPage(1); // Reset to the first page when changing page size
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const WhatsappApp = (product) => {
        const message = `Hello ${username} ! Welcome from Simson Garments,Your desired product is ${product.productName} `;
        const img1 = `${BASEURL}${product.url}`;
        console.log(img1, "img1img1img1");

        const send = {
            mobileNumber: user,
            message: message,
            img1: img1,
        }
        {
            user ? (
                request.get(`send-sms`, { params: send })
                    .then(function (response) {
                        console.log(response, 'TTTTTT');
                        toast.success("Your desired product's quote has been send to your Whatsapp");

                    })
                    .catch(function (error) {
                        console.error(error);
                        toast.error('Something went wrong while sending WhatsApp message');
                    })) : (
                LoginMenuOpen()
            )
        };
    }
    const user = useSelector(store => store.loginentry.user?.phone);
    const username = useSelector(store => store.loginentry.user?.name);

    useEffect(() => {
        setName(user);
    }, [user]);

    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // const displayedProducts = imgUrl?.slice(startIndex, endIndex);

    const displayedProducts = imgUrl?.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const card = displayedProducts?.length > 0 ? (displayedProducts?.map((product) => (
        <div key={product.productId}>
            <Col span={24} md={12} lg={6}>
                <Card
                    hoverable
                    style={{
                        width: 290,
                        textAlign: 'center',
                    }}
                    cover={<StyledImage><img src={`${BASEURL}${product.url}`} alt={product.productName} /></StyledImage>}
                >
                    <Meta style={{ color: '#666' }} title={product.productName} />

                    <div style={{ marginTop: '50px' }}>
                        <StyledButton onClick={() => WhatsappApp(product)}>
                            <div>
                                <span><BsWhatsapp className='whatsappicon' /></span>&nbsp;&nbsp;&nbsp;
                                <span >Enquire Now</span>
                            </div>
                        </StyledButton>
                    </div>

                </Card>
            </Col>
        </div>
    ))) : (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            {noProductsMessage}
        </div>
    )

    return (
        <div id='shop'>
            <StyledHeading>
                Popular In Store
            </StyledHeading>

            <Flex center style={{ marginTop: "20px" }}>
                <StyledSearch>
                    <Search
                        placeholder="Search Products Here"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </StyledSearch>
            </Flex>
            <Row>
                <Col span={24} md={12}>

                    <SyledSelect>
                        <Flex center={'true'} style={{ marginTop: "20px" }}>
                            <p>Sort by &nbsp;<span><Select
                                value={itemsPerPage.toString()}
                                onChange={(value) => handlePageSizeChange(parseInt(value))}
                                style={{ width: 80 }}
                            >
                                <Select.Option value="10">10</Select.Option>
                                <Select.Option value="20">20</Select.Option>
                                <Select.Option value="30">30</Select.Option>
                            </Select></span>
                            </p>
                        </Flex>
                    </SyledSelect>
                </Col>


                <Col span={24} md={12}>
                    <StyledPagination>
                    <Flex center={'true'} style={{ marginTop: "20px" }}>
                        <p>Pages </p>

                        <Pagination size="small"
                            // showQuickJumper
                            total={imgUrl?.length}
                            current={currentPage}
                            pageSize={itemsPerPage}
                            onShowSizeChange={handlePageSizeChange}
                            onChange={handlePageChange}
                        />
                        </Flex>
                    </StyledPagination>
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
                {card}
            </Row>

            <Modal isVisible={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} width={500} modalContent={modalContent} />
        </div >
    );
};
