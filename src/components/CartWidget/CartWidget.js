import { GrCart } from 'react-icons/gr';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return ( 
        <Link as={Link} to='/cart' >
            <GrCart/>
        </Link>
    );
}
 
export default CartWidget;