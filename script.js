import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Ссылка на корень базы данных
const dbRef = ref(db, '/');

// Подписываемся на изменения
onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    document.getElementById('status').textContent = JSON.stringify(data);
}, (error) => {
    console.error("Ошибка:", error);
    document.getElementById('status').textContent = "Ошибка подключения";
});
