import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

const app = initializeApp(firebaseConfig);
console.log("Firebase успешно подключен!");
