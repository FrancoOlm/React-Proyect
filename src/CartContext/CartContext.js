import  {useState, useEffect, useContext,createContext} from 'react'

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children} ) => {
	const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)
	
	useEffect(() => {
		updateTotalProductsAdded()
		updateTotalToPay()
	}, [cart])

const addProduct = (item,newQuantity,) => {
const newCart = cart.filter ( prod =>prod.id !== item.id)
newCart.push ({...item, quantity: newQuantity})
setCart (newCart)
}

const clearCart = () => setCart ( [ ] )

const isInCart = (id) => { return cart.find (product =>product.id ===id) ? true : false }

const removeProduct = (id) => setCart (cart.filter ( product => product.id !== id))

const updateTotalProductsAdded = () => {
	let count = 0
	cart.forEach(prod => {
		count += prod.quantity
	})
	setTotalProductsAdded(count)
}

const updateTotalToPay = () => {
	let total = 0
	cart.forEach(prod => {
		total += prod.quantity * prod.precio
	})
	setTotalToPay(total)
}

const getQuantity = () => {
	let accu = 0

	cart.forEach(prod => {
		accu += prod.quantity
	})

	return accu
}

return (
<CartContext.Provider value= {{
	clearCart, 
	isInCart, 
	removeProduct, 
	addProduct, 
	getQuantity,
	totalProductsAdded,
	totalToPay,
	cart ,
	}}>
	{children}
</CartContext.Provider> 
)
}

export const useCart = () => {
    return useContext(CartContext)
} 