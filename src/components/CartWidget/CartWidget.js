import './CartWidget.css'
import CartIcon from './CartIcon.svg'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget =() =>{
    const { totalProductsAdded} = useContext(CartContext) 
    const navigate = useNavigate()
    return(
        <div className='cartBtnContainer'>
            <button to='/cart' className='cartBtn' onClick={()=> navigate('/cart')}>
            <img src={CartIcon} alt="asd"/>
            <span>{totalProductsAdded}</span>
            </button>
        </div>
    )
}

export default CartWidget