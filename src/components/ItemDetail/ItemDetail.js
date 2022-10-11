import  '../ItemDetail/ItemDetail.css'
import Counter from '../Counter/Counter'

const ItemDetail = ({id, nombre, precio, categoria, img , stock, descripcion,wallpaper,memory,processors,architecture,accelerator}) =>{
    return(
        <div className='ContainerGeneral'>
            <div className='tituloContainer'>
                <h3>{nombre}</h3>
            </div>
    <div className='detailContainer'>
        <img className='imgContainer' src={img}/>
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
                <Counter/>
                </div>
            </div>
        </div>
    </div>
        <div className='wallpaper'>
            <img src={wallpaper}/>
        </div>
    
</div>
    )
}

export default ItemDetail