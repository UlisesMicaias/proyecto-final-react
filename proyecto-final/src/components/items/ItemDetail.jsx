import React from "react";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "../btn/ItemQuantitySelector";
import styles from "../../css/itemDetail.module.css";

const ItemDetail = ({ item, onAdd }) => {
    return (
        <div className={styles.itemDetail}>
            <img src={item.img_url} alt={item.title} className={styles.itemImage} />
            <div className={styles.itemInfo}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <p className={styles.itemPrice}>Precio: ${item.price}</p>
                <p className={styles.itemGenre}>Género: {item.genre}</p>
                <p className={styles.itemDuration}>Duración: {item.duration} minutos</p>
                <p className={styles.itemDate}>Fecha: {item.date}</p>
                <p className={styles.itemDirector}>Director: {item.director_name}</p>
                <p className={styles.itemProductCompany}>Compañía: {item.production_company}</p>
                <ItemQuantitySelector onAdd={onAdd} />
                <Link to="/" className={styles.link}>
                    <button className={styles.backButton}>Volver al listado</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;
