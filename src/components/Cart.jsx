import { React } from 'react'
import { getCartProducts } from '../store/selectors/getCartProducts'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup, Button } from 'react-bootstrap'
import { removeFromCart } from '../store/cartReducer'

export const Cart = () => {
    const cartProducts = useSelector(getCartProducts);
    const dispatch = useDispatch();

    return <><h1>Cart</h1>
        <ListGroup>
            {cartProducts.length === 0 && <ListGroup.Item>Cart is empty</ListGroup.Item>}
            {cartProducts.map(product => <ListGroup.Item><Button variant="danger" onClick={() => dispatch(removeFromCart(product))}>Ta bort</Button>{product.title}</ListGroup.Item>)}
        </ListGroup>
    </>
}
