import { Link } from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext'
import { useContext } from "react"
import ItemCart from "../ItemCart/ItemCart";
import '../../asyncMock'
import '../ItemCart/ItemCart.css'
import { getProducts } from '../../asyncMock';

const Cart = () => {
    const {cart,totalToPay,totalProducts,} = useContext (CartContext);

    console.log (cart);
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
            <p>Total a Pagar: ${totalToPay}</p>
            <h3>Generar Orden</h3>
        </div>
    )
}
export default Cart 