import React, { useState } from "react";
import styles from "../../css/itemQuantitySelector.module.css"; 

const ItemQuantitySelector = ({ onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className={styles.quantitySelector}>
            <button onClick={decrement} className={styles.button}>
                -
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button onClick={increment} className={styles.button}>
                +
            </button>
            <button onClick={() => onAdd(quantity)} className={styles.addToCart}>
                Añadir al carrito
            </button>
        </div>
    );
};

export default ItemQuantitySelector;
