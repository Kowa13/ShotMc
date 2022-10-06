import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container }  from 'react-bootstrap';

const Item = ({ product }) => {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        $ {product.price}
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}
 
export default Item;