import { useState } from "react"
import  './counter.css'
const Counter =({onAdd}) =>{
    const [count, setCount] = useState(0)
    
    let stock = 10
    const sumar =()=>{
        if(count !== stock ) {
            setCount(count+1)
            stock = stock - count
            console.log("Stock actual:" +stock)
        }
    }
    const restar =()=>{
        if(count > 0) {
            setCount (count -1)
            stock = stock - count
            console.log("Stock actual:" +stock)
        }
    }
    return(
        <div className="counterContainer">
            <div className="contador">
                <button className="btnSumRes" onClick={sumar} >+</button>
                |<h2>{count}</h2>|
                <button className="btnSumRes" onClick={restar}>-</button>
            </div>
            <button className="btnAgregarAlCarrito" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Counter