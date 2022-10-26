
import React from 'react'
import '../ItemCart/ItemCart.css'
import '../../asyncMock'
import { useCart} from '../../CartContext/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct} = useCart ();

return (    
    <div className='cartContainer'>

        <div className='productName'>
            <h2>Producto</h2>
            <h1 className="nombre">{product.nombre}</h1>
            <img src={product.img}/>
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

        <button className='BtnEliminar' onClick={()=>removeProduct(product.id)}>eliminar
        </button>
    </div>
)
}

export default ItemCart