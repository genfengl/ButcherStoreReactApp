const cartList = []

const Cart = () => {
    return (
        <div className="cart-dropdown">
             {cartList.map((cartItem) => {
            <ul>{cartItem.title}
                <li>{cartItem.price}</li>
                <li>{cartItem.category}</li>
            </ul>
             })}
        </div>
    )
}

export default Cart