import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext'
import { useContext } from "react"
import ItemCart from "../ItemCart/ItemCart";
import '../ItemCart/ItemCart.css'

const Cart = () => {
    const {cart,totalToPay,totalProducts,clearCart} = useContext (CartContext);
    
    if (cart.length === 0)
    return (
        <div>
            <p className='text'> No hay elementos en el carrito </p>
            <div className='btnContainerr'>
                <Link className='btnComenzar' to='/'> Comenzar compra</Link>
            </div>
        </div>
    )

    return (
        <div>
            <span id="contador">{totalProducts}</span>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            <p className='totalP'>Total a Pagar: ${totalToPay}</p>
                <div className='boxBtn'>
                    <div className='btnContainerr'>
                        <Link to='/checkout' className='btnComenzar'>Checkout</Link>
                    </div>
                    <div className='limpiar' onClick={clearCart}>Limpiar carrito</div>
            </div>
        </div>
    )
}
export default Cart 