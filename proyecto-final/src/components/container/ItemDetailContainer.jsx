import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useCart } from "../cart/CartContext";
import ItemDetail from "../items/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const productData = docSnap.data();
          const itemWithPrice = {
            ...productData,
            price: parseInt(productData.price.replace('$', '')) || 0,
          };
          setItem({ id: docSnap.id, ...itemWithPrice });
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };    
    fetchItem(id);
  }, [id]);

  const handleAdd = (quantity) => {
    if (item) {
      const itemWithQuantity = { 
        ...item, 
        quantity: Number(quantity) || 1
      };
      addItem(itemWithQuantity, quantity);
    }
  };

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!item) {
    return <div>El producto no existe o no está disponible.</div>;
  }

  return <ItemDetail item={item} onAdd={handleAdd} />;
};

export default ItemDetailContainer;
