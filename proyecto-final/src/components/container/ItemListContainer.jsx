import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config"; 
import ItemList from "../items/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { genresId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                let q = collection(db, "products");
                if (genresId) {
                    q = query(q, where("genre", "==", genresId));
                }

                const querySnapshot = await getDocs(q);
                const fetchedItems = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (fetchedItems.length === 0) {
                    setError("No se encontraron productos.");
                } else {
                    setItems(fetchedItems);
                }
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setError("Hubo un error al cargar los productos.");
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [genresId]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>
                {genresId ? `Género: ${genresId}` : "Todos los Productos"}
            </h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
