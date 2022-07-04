import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Dropdown, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const getProductDetail= async ()=>{
        let url = `https://my-json-server.typicode.com/AhnBy/coding.stg/reactProject/hnm-react-router-practice/products/${id}`; //https://my-json-server.typicode.com/AhnBy/coding.stg
        let response = await fetch(url)
        let data = await response.json();
        console.log(data);
        setLoading(false);
        setProduct(data);
    }
    useEffect(()=>{
        getProductDetail()
    },[])
    if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container className='product-detail-card'>
        <Row>
            <Col className='product-img'>
                <img src={product?.img} />
            </Col>
            <Col>
                <div className='product-info'>{product?.title}</div>
                <div className='product-info'>\ {product?.price}</div>
                <div className='choice'>
                    {product?.choice ? 'Conscius choice' : ''}
                </div>
                <Dropdown className='drop-down'>
                    <Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>사이즈 선택</Dropdown.Toggle>
                    <Dropdown.Menu>{product?.size.length > 0 && product.size.map((item) => (
                        <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
                    ))}</Dropdown.Menu>
                </Dropdown>
                <Button variant='dark' className='add-button'>
                    추가
                </Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail