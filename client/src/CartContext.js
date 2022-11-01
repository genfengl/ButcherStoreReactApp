import { createContext } from "react";


export const CartContext = createContext({
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {}
})


export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])

    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}