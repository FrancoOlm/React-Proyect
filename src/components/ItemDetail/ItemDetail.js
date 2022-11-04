import  '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../CartContext/CartContext'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../services/NotificationService/NotificationService'

const ItemDetail = ({id, nombre, precio, categoria, img , stock, descripcion,wallpaper,memory,processors,architecture,accelerator}) =>{
    const [goToCart, setGoToCart] = useState (false)
    const {addProduct} = useCart ();
    const { setNotification } = useContext(NotificationContext)
    const onAdd = (quantity) => {
        const productToAdd = {
            id,
            nombre,
            categoria,
            precio,
            descripcion,
            quantity,
            img
        }
        setGoToCart(true);
        addProduct (productToAdd, quantity);
        setNotification('success', `✅ Se agrego correctamente ${quantity} ${nombre}`) 
    }
    return(
        <div className='ContainerGeneral'>
            <div className='tituloContainer'>
                <h3>{nombre}</h3>
            </div>

        <div className='detailContainer'>
            <img className='imgContainer' src={img} alt='Imagen de los productos'/>
        <div>

            <div className='descriptionContainer'>
                <h2>Detalle del producto</h2>
                <ul>
                    <li>{descripcion}</li>
                    <li>{memory}</li>
                    <li>{processors}</li>
                    <li>{architecture}</li>
                    <li>{accelerator}</li>
                </ul>
                <div className='Contador'>
                    <p className='precio'>${precio}</p>
                    {goToCart
                ?
                    <div className='btnContainerr'>
                        <Link className='btnComenzar' to='/cart'>Ir al carrito</Link>
                    </div>
                : stock !== 0?<ItemCount onAdd={onAdd} stock={stock}/> : <p className='fstock'>Fuera de stock</p>
                    }
                </div>
            </div>
        </div>
    </div>
        <div className='wallpaper'>
            <img src={wallpaper} alt='Wallpapers'/>
        </div>
</div>
    )
}
export default ItemDetail