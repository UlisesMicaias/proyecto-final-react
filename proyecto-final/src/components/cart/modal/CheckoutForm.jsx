import React, { useState } from "react";
import { useCart } from "../CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import styles from "../../../css/checkoutForm.module.css";

const CheckoutForm = ({ onOrderComplete }) => {
    const { cart, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        emailConfirm: "",
    });
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email !== formData.emailConfirm) {
            setError("Los correos electrónicos no coinciden.");
            return;
        }

        const order = {
            buyer: {
                name: formData.name,
                surname: formData.surname,
                phone: formData.phone,
                email: formData.email,
            },
            items: cart,
            total: cartTotal,
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
            onOrderComplete(docRef.id, order.buyer);
        } catch (err) {
            console.error("Error al crear la orden:", err);
            setError("Hubo un error al procesar la orden. Inténtalo nuevamente.");
        }
    };

    return (
        <div className={styles.formContainer}>
            <button className={styles.closeButton} onClick={() => setOrderId(null)}>
                ✕
            </button>
            <h3>Finalizar Compra</h3>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <label>Apellido:</label>
                <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                />
                <label>Teléfono:</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <label>Confirmar Email:</label>
                <input
                    type="email"
                    name="emailConfirm"
                    value={formData.emailConfirm}
                    onChange={handleInputChange}
                    required
                />
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit">Realizar Compra</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
