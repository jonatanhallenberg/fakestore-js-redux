import { useEffect, useState } from 'react';
import { fetchProducts } from '../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductBox } from './ProductBox';
import { Container, Row, Col } from 'react-bootstrap';
import { addToCart } from '../store/cartReducer';

export const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const loading = useSelector(state => state.products.loading);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
    }

    return <Container>
        <Row>
            {products.map(product => <Col><ProductBox product={product} onAddToCart={(product) => addProductToCart(product)} /></Col>)}
        </Row>
    </Container>
}