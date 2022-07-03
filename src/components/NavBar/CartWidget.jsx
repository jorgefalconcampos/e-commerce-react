import logo from "../../images/cart.png"

const CartWidget = () => {
    return (
        <div className="w-15">
            <img src={logo} alt="" className="w-25" aria-label="Carrito de compras" />
        </div>
    )
}

export default CartWidget;