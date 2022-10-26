import  '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../CartContext/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, categoria, img , stock, descripcion,wallpaper,memory,processors,architecture,accelerator}) =>{
    const [goToCart, setGoToCart] = useState (false)
    const {addProduct} = useCart ();
    const onAdd = (quantity) => {
        const productToAdd = {
            id,
            nombre,
            categoria,
            precio,
            descripcion,
            quantity
        }
        setGoToCart(true);
        addProduct (productToAdd, quantity);
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
                    <p>${precio}</p>
                    {goToCart
                ?
                    <div className='btnContainerr'>
                        <Link className='btnComenzar' to='/cart'>Ir al carrito</Link>
                    </div>
                :<ItemCount onAdd={onAdd} stock={stock}/>
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