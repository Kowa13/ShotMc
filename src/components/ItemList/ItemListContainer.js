import ItemList from './ItemList';
import './ItemListContainer.css';
import { Container }  from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(categoryName);
    }, [categoryName])

    useEffect(() => {
        getProduct()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }, [])

    return (
        <Container>
            <h1>Productos</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products}/>
        </Container>
    );
}
 
export default ItemListContainer;

