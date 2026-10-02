import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import firebaseConfig from "./firebase-config.js";


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


/* Create an online SSRT order */

export async function createSSRTOrder(order) {

    const orderData = {

        orderId: order.orderId,

        product: order.product,

        version: order.version,

        price: order.price,

        paymentStatus:
            order.paymentStatus || "Pending",

        orderStatus:
            order.orderStatus || "Order Placed",

        createdAt:
            serverTimestamp()

    };


    const docRef = await addDoc(
        collection(db, "orders"),
        orderData
    );


    return docRef.id;
}
