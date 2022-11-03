/* import { useContext, useState } from "react";
import {CartContext} from "../../CartContext/CartContext"
import {addDoc, collection, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import {dataBase} from '../../services/firebase/firebase'
import { useNavigate } from "react-router-dom";
import React from 'react';
import './style.css'

const Checkout =()=>{
    const {cart,totalToPay, clearCart } =useContext(CartContext)
    const navigate = useNavigate()

    const [Nombre, setName] = useState('')
    const [Apellido, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [Dirección, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')

const validate=(e) =>{
    e.preventDefault()
}

    const createOrder = async (e) =>{
        e.preventDefault()
        try{
        const objOrder ={
            cliente: {
                Nombre: '',
                Apellido:'',
                email: '',
                telefono: '',
                Dirección:''
            },
            items: cart,
            total: totalToPay
        }
        const batch = writeBatch(dataBase)
        const outOfStock = []
        
        const ids = cart.map(prod => prod.id)
        const productRef =collection(dataBase,'productos')
        const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(),'in',ids)))

        const {docs} = productsAddedFromFirestore

        docs.forEach(doc =>{
            const dataDoc =doc.data()
            const stockDataBase= dataDoc.stock

            const productAdded= cart.find(prod =>prod.id === doc.id)
            const prodQuantity = productAdded?.quantity

            if(stockDataBase >= prodQuantity){
                batch.update(doc.ref, {stock: stockDataBase - prodQuantity})
            } else{
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(dataBase, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                alert()
                clearCart()
                setTimeout(()=>{
                    navigate('/')
                },2000)
                console.log(`el id de su orden es : ${orderAdded.id}`)
            } else{
                console.log('no hay mas productos')
            }
        } catch(error) {
            console.log(error)
        }
    }


    return(
    <div>
        <h1>Complete los datos</h1>
    <form className="myForm">
        <div className='myForm1' >
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={Nombre} onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" />

            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={Apellido} onChange={(e) => setLastName(e.target.value)} placeholder="Ingrese su apellido" />

            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" placeholder="tunombre@tucorreo.com" />

            <label className="form-label">Dirección</label>
            <input type="text" className="form-control"  id="exampleFormControlInput1" value={Dirección}  onChange={(e) => setDireccion(e.target.value)} placeholder="Numero de telefono" />

            <label className="form-label">Numero de telefono</label>
            <input type="number" className="form-control"  id="exampleFormControlInput1" value={telefono}  onChange={(e) => setTelefono(e.target.value)} placeholder="Numero de telefono" />
            <input type="submit"></input>
        </div>
            </form>
        <button onClick={createOrder}>Generar Orden</button>
    </div>

    )

}

export default Checkout 



 */

import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import {dataBase} from '../../services/firebase/firebase'
import { useNavigate } from "react-router-dom"
import  ClientForm  from '../Form/Form'
import Swal from "sweetalert2"
import '../ItemListContainer/spiner.css'
import '../Form/style.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [personalData, setPersonalData] = useState(false)
    
    const [datosCompra, setDatosCompra] = useState({}) 

    const completoDatos = (name, surname, address, phone, email) =>{
            setDatosCompra({name, surname, address, phone, email})
            setPersonalData(true)
        }
    

    const { cart, totalToPay, clearCart } = useContext(CartContext)

    const navigate = useNavigate()
    
    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer:datosCompra,
                items: cart,
                total: totalToPay
            }
            console.log (objOrder)
            const batch = writeBatch(dataBase)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(dataBase, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(dataBase, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()
                setTimeout(() => {
                    navigate('/')
                }, 2000)

                const alert = () => {
                    Swal.fire({
                        title: "Orden Creada.",
                        text: `El id de su orden es: ${orderAdded.id}`,
                        icon: "success"
                    })
                }
                alert()

                console.log('success', `El id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('error','hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <div className="loader">Loading...</div>
    }

    return (    
        <div>
            <h1>Ingrese sus datos para generar la orden.</h1>
            <ClientForm completoDatos={completoDatos}/>
            { personalData 
            ?<button className="submit" onClick={createOrder}>Generar Pedido</button> 
            : ""}
        </div>
    )
}

export default Checkout