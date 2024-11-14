import React from "react";
import Item from "./Item";
import styles from "../../css/itemList.module.css";


const ItemList = ({ items }) => {
    if (items.length === 0) {
        return <p className={styles.noProducts}>No hay productos disponibles en esta categoría.</p>;
    }

    return (
        <div className={styles.itemList}>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;



