import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { dataBase } from "../../services/firebase/firebase"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const [cargando,setCargando] = useState(true)
    const {productId} = useParams()
    
    useEffect(()=>{
        const docRef = doc(dataBase, "productos", productId)
        getDoc(docRef).then (response =>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).finally(()=>{
            setCargando(false)
        })
},[productId])

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