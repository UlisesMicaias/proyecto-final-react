import React, { useState } from "react";
import { useCart } from "./CartContext";
import Modal from "./modal/Modal";
import CheckoutForm from "./modal/CheckoutForm";
import Order from "./modal/Order";
import styles from "../../css/cart.module.css";

const Cart = () => {
    const { cart, removeItem, cartTotal } = useCart();
    const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    const [orderData, setOrderData] = useState(null);

    const openCheckout = () => setCheckoutOpen(true);
    const closeCheckout = () => setCheckoutOpen(false);

    const handleOrderCompletion = (orderId, buyer) => {
        setOrderData({ orderId, buyer, items: cart, total: cartTotal });
        closeCheckout();
    };

    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.cartTitle}>Carrito de Compras</h2>
            <ul className={styles.cartList}>
                {cart.map((item) => (
                    <li key={item.id} className={styles.cartItem}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemQuantity}>Cantidad: {item.quantity}</p>
                        <p className={styles.itemPrice}>
                            Precio Total: ${item.price * item.quantity}
                        </p>
                        <button
                            className={styles.removeButton}
                            onClick={() => removeItem(item.id)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <h3 className={styles.totalPrice}>Total de la Orden: ${cartTotal}</h3>
            {cart.length > 0 && (
                <button className={styles.checkoutButton} onClick={openCheckout}>
                    Comprar
                </button>
            )}
            <Modal isOpen={isCheckoutOpen} onClose={closeCheckout}>
                <CheckoutForm onOrderComplete={handleOrderCompletion} />
            </Modal>

            {orderData && (
                <Modal isOpen={true} onClose={() => setOrderData(null)}>
                    <Order
                        isOpen={true}
                        onClose={() => setOrderData(null)}
                        orderId={orderData.orderId}
                        buyer={orderData.buyer}
                        items={orderData.items}
                        total={orderData.total}
                    />
                </Modal>
            )}
        </div>
    );
};

export default Cart;



