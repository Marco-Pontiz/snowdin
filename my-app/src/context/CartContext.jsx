import React, {useState, useContext}from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart)
    }

    console.log('carrito', cart);

    const totalPrice = () => { return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);}
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const removeCart = (id) => { return setCart(cart.filter(product => product.id !== id))}

    const isInCart = (id) => { return cart.find(product => product.id === id) ? true : false;}

    const clearCart = () => setCart([]);

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return(
        <CartContext.Provider value={{
            removeCart,
            isInCart,
            clearCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider