import Swal from "sweetalert2";
import { useState, createContext } from "react";
import './style.css'

export const FormData = createContext({
    name:"",
    surname:"",
    address:"",
    phone:"",
    email:""
})

const ClientForm = ({completoDatos}) => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");

const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            Swal.fire({
                title: "Completa tus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        
            })
        }
        else if (email != checkEmail && email && checkEmail) {
            Swal.fire({
            title: "Los emails no coinciden",
            html: "Por favor, intente nuevamente",
            buttons: true,
            dangerMode: true,
        })
    }

    else {
    completoDatos(
        name,
        surname,
        address,
        phone,
        email
    )
}
    
}
    return (
        <form id="form">
                <div className='myForm1' >
                <label className="form-label">Nombre</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text"   className="form-input"   placeholder="Nombre" required />

                <label className="form-label">Apellido</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text"   className="form-input"   placeholder="Apellido" required/>

                <label className="form-label">Dirección</label>
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"   className="form-input"   placeholder="Dirección"required />

                <label className="form-label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-input"   placeholder="Email" required/>

                <label className="form-label">Confirmacion de email</label>
                <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"  className="form-input"   placeholder="Email" required/>
                
                <label className="form-label">Telefono</label>
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number" className="form-input"   placeholder="Teléfono"required />

                <button className="submit" onClick = {submit} >Enviar</button>
            </div>
        </form>
    )
}
export default ClientForm