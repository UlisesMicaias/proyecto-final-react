import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    return item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : null;
                }
                return item;
            }).filter(Boolean);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

