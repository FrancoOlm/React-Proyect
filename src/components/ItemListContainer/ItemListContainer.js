import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import './spiner.css'

const ItemListContainer =({greeting }) =>{
    const [products, setProductos] = useState([])
    const [cargando,setCargando] = useState(true)

    const {categoryId} =useParams()

    useEffect(()=>{
        setCargando(true)

        const asyncMockCategory = categoryId ? getProductsByCategory : getProducts

        asyncMockCategory(categoryId).then(respuesta =>{
            setProductos(respuesta)
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