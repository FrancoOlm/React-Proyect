import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import './spiner.css'
import { getDocs, collection, query, where} from "firebase/firestore"
import { dataBase } from "../../services/firebase/firebase"

const ItemListContainer =({greeting }) =>{
    const [products, setProductos] = useState([])
    const [cargando,setCargando] = useState(true)

    const {categoryId} =useParams()

    useEffect(()=>{
        setCargando(true)

        const collectionRef = categoryId ? query(collection(dataBase, "productos"), where('categoria', '==', categoryId)) : collection(dataBase, "productos")

        getDocs(collectionRef).then(respuesta =>{
            const productosAdaptados = respuesta.docs.map(doc =>{
                const data = doc.data()
                
                return {id: doc.id, ...data}
                
            })
            setProductos(productosAdaptados)
        }).finally (()=>{
            setCargando(false)
        })
    },[categoryId])

    if(cargando){
        return ( 
            <div className="loader">Loading...</div>
            )
    }
    return( 
    <div className="itemListContainer">
        <h1>{greeting}</h1>
        <ItemList productos={products}/>
    </div>
    )
}
export default ItemListContainer