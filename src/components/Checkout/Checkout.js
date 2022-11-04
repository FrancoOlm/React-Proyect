import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import {dataBase} from '../../services/firebase/firebase'
import { useNavigate } from "react-router-dom"
import  ClientForm  from '../Form/Form'
import Swal from "sweetalert2"
import '../ItemListContainer/spiner.css'
import '../Form/style.css'
import { NotificationContext } from "../../services/NotificationService/NotificationService"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { setNotification } = useContext(NotificationContext)
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
            const batch = writeBatch(dataBase)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(dataBase, 'productos')
    
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
            } else {
                setNotification('', `❌ Hay productos fuera de Stock`) 
            }
        } catch (error) {

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