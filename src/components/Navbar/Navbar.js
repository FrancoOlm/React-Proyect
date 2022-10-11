import './Navbar.css'
import Logo from '../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const Navbar =() =>{
    return(
        <nav>
            <div className='logoContainer'>
                <img className='logo' src={Logo} alt="Logo Navbar"/>
            </div>

            <div className="btnContainer">
                <Link to='./'>
                <button className='btn' >INICIO</button>
                </Link>
                <Link to='/category/NITRO'>
                <button className='btn' >NITRO</button>
                </Link>
                <Link to='/category/PULSE'>
                <button className='btn'>PULSE</button>
                </Link>
            </div>
        <CartWidget/>
        </nav>
    )
}

export default Navbar

