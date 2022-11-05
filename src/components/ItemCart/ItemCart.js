
import React from 'react'
import '../ItemCart/ItemCart.css'
import { useCart} from '../../CartContext/CartContext'
import { useContext } from 'react'
import { NotificationContext } from '../../services/NotificationService/NotificationService'

const ItemCart = ({product}) => {
    const {removeProduct} = useCart ();
    const { setNotification } = useContext(NotificationContext)
return (    
    <div className='cartContainer'>
        <div className='productImg'>
        <img src={product.img}/>
        </div>
        <div className='productName'>
            <h2>Producto</h2>
            <h1 className="nombre">{product.nombre}</h1>
        </div>

        <div className='productU'>
            <h2>Precio por Unidad</h2>
            <p className="precioU">Precio Unidad: ${product.precio}</p>
        </div>

        <div className='productTotal'>
            <h2>Precio Total</h2>
            <h4>Cantidad de productos: {product.quantity}</h4>
            <p className="precioU">Subtotal: ${product.quantity * product.precio}</p>
        </div>

        <button className='BtnEliminar' onClick={()=>removeProduct(product.id) || setNotification('',`❌ Se elimino el producto del carrito`)}>Eliminar
        
        </button>
    </div>
    )
}
export default ItemCart