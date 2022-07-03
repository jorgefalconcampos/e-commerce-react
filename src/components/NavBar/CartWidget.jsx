import { Cart } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({items}) => {
    return (
        <>
        <Badge pill bg="primary" className="mx-1">2</Badge>
        <span className="visually-hidden">items en carrito</span> {/* a11y */}
        <Cart className="" color="white" size={30}/>
        </>
    )
}

export default CartWidget;