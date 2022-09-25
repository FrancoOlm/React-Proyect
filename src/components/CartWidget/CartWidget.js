import './CartWidget.css'
import CartIcon from './CartIcon.svg'

const CartWidget =() =>{
    return(
        <div className='cartBtn'>
            <button className='cartBtn'>
            <img src={CartIcon}></img>
            10
            </button>
        </div>
    )
}

export default CartWidget