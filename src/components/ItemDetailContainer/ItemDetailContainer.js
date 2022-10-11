import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
import Counter from '../Counter/Counter.js'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const [cargando,setCargando] = useState(true)
    const {productId} = useParams()
    useEffect(()=>{
        getProductsById(productId).then(response =>{
                setProduct(response)
            }).finally(()=>{
                setCargando(false)
            })

    },[])

    if(cargando){
        return ( 
            <div className="loader">Loading...</div>
            )
    }
    return(
        <ItemDetail key={product.id} {...product}/>
    )
}

export default ItemDetailContainer