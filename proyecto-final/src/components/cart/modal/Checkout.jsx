// import React, { useState } from "react";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { useCart } from "../CartContext";
// import { db } from "../../../firebase/config";

// const Checkout = () => {
//     const { cart, cartTotal, clearCart } = useCart();
//     const [name, setName] = useState("");
//     const [surname, setSurname] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [confirmEmail, setConfirmEmail] = useState("");
//     const [orderId, setOrderId] = useState(null);
//     const [error, setError] = useState(null);

//     const handlePurchase = async () => {
//         if (email !== confirmEmail) {
//         setError("Los correos electrónicos no coinciden.");
//         return;
//         }

//         const order = {
//         buyer: { name, surname, phone, email },
//         items: cart,
//         total: cartTotal,
//         date: Timestamp.fromDate(new Date()),
//         status: "generada",
//         };

//         try {
//         const docRef = await addDoc(collection(db, "orders"), order);
//         setOrderId(docRef.id);
//         clearCart();
//         } catch (err) {
//         console.error("Error al crear la orden:", err);
//         setError("Hubo un error al procesar la orden. Inténtalo nuevamente.");
//         }
//     };

//     return (
//         <div>
//         <h2>Checkout</h2>
//         <div>
//             <label>Nombre:</label>
//             <input value={name} onChange={e => setName(e.target.value)} />
//         </div>
//         <div>
//             <label>Apellido:</label>
//             <input value={surname} onChange={e => setSurname(e.target.value)} />
//         </div>
//         <div>
//             <label>Teléfono:</label>
//             <input value={phone} onChange={e => setPhone(e.target.value)} />
//         </div>
//         <div>
//             <label>Email:</label>
//             <input value={email} onChange={e => setEmail(e.target.value)} />
//         </div>
//         <div>
//             <label>Confirmar Email:</label>
//             <input value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <h3>Total de la Orden: ${cartTotal}</h3>
//         <button onClick={handlePurchase} disabled={!name || !surname || !phone || !email || !confirmEmail}>
//             Realizar Compra
//         </button>
//         {orderId && <p>¡Gracias por tu compra! Tu número de orden es: {orderId}</p>}
//         </div>
//     );
// };

// export default Checkout;



