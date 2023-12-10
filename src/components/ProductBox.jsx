import { Button, Card } from 'react-bootstrap';

export const ProductBox = ({ product, onAddToCart }) => {
    return <Card style={{ width: '18rem' }}>
        {product.images.length > 0 && <Card.Img variant="top" src={product.images[0]} />}
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button variant="primary" onClick={() => onAddToCart(product)}>Add to cart</Button>
        </Card.Body>
    </Card>
}
