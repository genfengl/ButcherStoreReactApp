import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
          const res = await fetch('/api/butcher')
          const data = await res.json()
          setItems(data)
        }
        getItems()
      }, [])
    
    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    const addOneToCart = (id) => {
        const quantity = getProductQuantity(id)
        const product = items.find((item) => {
            return item._id === id
        })
        console.log(product)

        if (quantity === 0) {   // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id, 
                        quantity: 1,
                        price: product.price
                    }
                ]
            )
        } else {    // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                )
            )
        }
    }

    const removeOneFromCart = (id) => {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {    // delete the item from cart if quantity is just 1
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }

    const deleteFromCart = (id) => {
        setCartProducts(cartProducts => 
                cartProducts.filter(product => {
                    return product.id !== id;
                })
            )
    }

    const getTotalCost = () => {
        
        let totalCost = 0
        cartProducts?.map((cartItem) => {
            
            totalCost += (cartItem.price * cartItem.quantity) 
        })
        return totalCost
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider