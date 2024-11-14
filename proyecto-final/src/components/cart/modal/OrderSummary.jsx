import React from "react";
import styles from "../../../css/orderSummary.module.css";

const OrderSummary = ({ orderId, buyer, items, total, onClose }) => (
    <div className={styles.summaryContainer}>
        <h4>¡Compra realizada con éxito!</h4>
        <p>
            <strong>ID de la Orden:</strong> {orderId}
        </p>
        <h5>Detalles del Comprador:</h5>
        <p>
            <strong>Nombre:</strong> {buyer.name} {buyer.surname}
        </p>
        <p>
            <strong>Teléfono:</strong> {buyer.phone}
        </p>
        <h5>Detalles de la Orden:</h5>
        {items.length > 0 ? (
            items.map((item) => (
                <div key={item.id} className={styles.item}>
                    <p>
                        <strong>Título:</strong> {item.title}
                    </p>
                    <p>
                        <strong>Cantidad:</strong> {item.quantity}
                    </p>
                    <p>
                        <strong>Precio:</strong> ${item.price}
                    </p>
                </div>
            ))
        ) : (
            <p>No hay artículos en la orden.</p>
        )}
        <p>
            <strong>Total:</strong> ${total}
        </p>
        <button className={styles.closeButton} onClick={onClose}>
            Cerrar
        </button>
    </div>
);

export default OrderSummary;
