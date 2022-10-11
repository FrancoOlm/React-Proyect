import '../Item/item.css'
import {Link} from 'react-router-dom'

const Item =({id,nombre,precio,img,descripcion,categoria}) =>{
    return(
        <div className='productosContainer'>
            <img className='img' src={img}/>
            <div className='info'>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            </div>
            <div className='detalle'>
                <button className='btnDetalle'>
                    <Link className='link' to = {`/detail/${id}`}>Ver detalle</Link>
                </button>
            </div>
        </div>
    )
}
export default Item
