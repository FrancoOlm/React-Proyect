import './Navbar.css'
import Logo from '../assets/logo.png'
import Boton from '../BotonEstandar/btn.js'
import CartWidget from '../CartWidget/CartWidget'

const Navbar =() =>{
    return(
        <nav>
            <img className='logo' src={Logo}/>
            <div className="btnContainer">
                <button className='btn' >Inicio</button>
                <button className='btn' >AMD</button>
                <button className='btn'>INTEL</button>
            </div>
        <CartWidget/>
        </nav>
    )
}

export default Navbar

