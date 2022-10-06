import Item from "./Item";
import { Container }  from 'react-bootstrap';

const ItemList = ({ products }) => {
    return ( 
        <Container>
            <h1>ItemList</h1>
            {products.map((product) => (
                <Item key={product.id} product={product}/>
            ))} 
        </Container>
    );
}
 
export default ItemList;