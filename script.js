import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase подключен, пробую базу...");

// Пытаемся записать тестовые данные в базу
const testRef = ref(db, 'test');

set(testRef, {
    message: "Привет из GitHub Pages!",
    time: new Date().toLocaleString()
})
.then(() => {
    console.log("Запись в базу прошла успешно!");
})
.catch((error) => {
    console.error("Ошибка записи в базу:", error);
});

// Пытаемся прочитать эти данные
onValue(testRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Данные из базы:", data);
}, (error) => {
    console.error("Ошибка чтения из базы:", error);
});
