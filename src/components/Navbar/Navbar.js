import './Navbar.css'
import Logo from '../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const Navbar =() =>{
    return(
        <nav>
            <img className='logo' src={Logo} alt="Logo Navbar"/>
            <div className="btnContainer">
                <button className='btn' >INICIO</button>
                <button className='btn' >AMD</button>
                <button className='btn'>INTEL</button>
            </div>
        <CartWidget/>
        </nav>
    )
}

export default Navbar

