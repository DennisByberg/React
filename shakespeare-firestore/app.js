import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjIT6s1ySaOU1ayZhZ4x7I77IvXBzvLCY",
  authDomain: "shakespeare-app.firebaseapp.com",
  projectId: "shakespeare-app",
  storageBucket: "shakespeare-app.appspot.com",
  messagingSenderId: "100303461624",
  appId: "1:100303461624:web:38e2ad8aa562c3b3d1ef0d",
};

const app = initializeApp(firebaseConfig); // app
const db = getFirestore(app); // db
const inputInsult = document.querySelector("#input-insult"); // input 1
const inputPlay = document.querySelector("#input-play"); // input 2
const ul = document.querySelector("ul"); // ul
const buttonEl = document.querySelector("button"); // add to db

async function saveToDatabase(insultItem, playItem) {
  try {
    await addDoc(collection(db, `Insults`), {
      Insult: insultItem,
      Play: playItem,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getAllInsults() {
  const insults = await getDocs(collection(db, `Insults`));
  insults.forEach((insult) => {
    const template = `<li>${insult.data().Insult} - ${insult.data().Play}</li>`;
    ul.insertAdjacentHTML("beforeend", template);
  });
}

// Call 1
getAllInsults();

buttonEl.addEventListener("click", () => {
  const insultItem = inputInsult.value; // input 1
  const playItem = inputPlay.value; // input 2
  saveToDatabase(insultItem, playItem);

  // Call 2
  getAllInsults();

  // Call Clear
  clear();
});

// Clear Ul + inputs.
function clear() {
  inputInsult.value = "";
  inputPlay.value = "";
  ul.textContent = "";
}
