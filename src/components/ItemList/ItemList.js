import Item from '../Item/Item.js'
import '../ItemList/itemList.css'
const ItemList =({productos}) =>{
    return(
        <div className='caja'>
            {productos.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList