import './CartWidget.css'
import CartIcon from './CartIcon.svg'

const CartWidget =() =>{
    return(
        <div className='cartBtnContainer'>
            <button className='cartBtn'>
            <img src={CartIcon} alt="asd"/>
            10
            </button>
        </div>
    )
}

export default CartWidget