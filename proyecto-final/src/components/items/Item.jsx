import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/item.module.css";

const Item = ({ item }) => {
    return (
        <div className={styles.itemCard}>
            <img src={item.img_url} alt={item.title} className={styles.itemImage} />
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemPrice}>Precio: {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className={styles.detailButton}>Ver Detalles</button>
            </Link>
        </div>
    );
};

export default Item;

