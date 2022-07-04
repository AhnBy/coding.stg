import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState("");
    const getProducts = async () => {
        try {
        let searchQuery = query.get('q') || "";
            let url = `https://my-json-server.typicode.com/AhnBy/coding.stg/reactProject/hnm-react-router-practice/products?q=${searchQuery}`  //https://my-json-server.typicode.com/AhnBy/coding.stg
            let response = await fetch(url);
            let data = await response.json();
            if (data.length < 1) {
                if (searchQuery !== "") {
                setError(`${searchQuery}와 일치하는 상품이 없습니다`);
                } else {
                throw new Error("결과가 없습니다");
                }
            }
            setProductList(data);
        } catch (err) {
            setError(err.message);
        }
    }
    useEffect(()=>{
        getProducts()
    },[query])
  return (
    <Container>
        {error ? (
            <Alert variant="danger" className="text-center">
                {error} 
            </Alert>
        ) : (
        <Row>
            {productList.length > 0 && productList.map((item) => (
                <Col md={3} sm={12} key={item.id}>
                    <ProductCard item={item} />
                </Col>
            ))}
        </Row>
      )}
    </Container>

  )
}

export default ProductAll