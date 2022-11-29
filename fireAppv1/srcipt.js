// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQtWcvjf6BG7dIvzxBFgVWP4rbjRDZJUY",
  authDomain: "todos-app-fc128.firebaseapp.com",
  projectId: "todos-app-fc128",
  storageBucket: "todos-app-fc128.appspot.com",
  messagingSenderId: "81702271182",
  appId: "1:81702271182:web:146a45cdbfee73c544389f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const inputEl = document.querySelector("#input-todo");
const buttonEl = document.querySelector("#add-todo");
const ul = document.querySelector("#todos");

async function saveToDatabase(todoItem) {
  try {
    await addDoc(collection(db, `todos`), {
      todo: todoItem,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getAllTodos() {
  const todos = await getDocs(collection(db, `todos`));
  console.log(todos);

  todos.forEach((todo) => {
    console.log(todo.id);
    console.log(todo.data());
    const template = `<li>${todo.data().todo}</li>`;
    ul.insertAdjacentHTML("beforeend", template);
  });
}
getAllTodos();

buttonEl.addEventListener("click", () => {
  const todoItem = inputEl.value;

  saveToDatabase(todoItem);
  ul.textContent = "";
  getAllTodos();
});
