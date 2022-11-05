import { useState } from "react"
import  './ItemCount.css'

const ItemCount =({stock, initial =1,onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)
    
    const sumar =()=>{
        if(quantity < stock ) {
            setQuantity(quantity+1)
        }
    }
    const restar =()=>{
        if(quantity > 1) {
            setQuantity (quantity -1)
        }
    }
    return(
        <div className="counterContainer">
            <div className="contador">
                <button className="btnSumRes" onClick={restar}>-</button>
                <h3>{quantity}</h3>
                <button className="btnSumRes" onClick={sumar} >+</button>
            </div>
            <button className="btnAgregarAlCarrito" onClick={() => onAdd (quantity)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount