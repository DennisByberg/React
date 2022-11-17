import "./style.css";
import { app as firebase } from "./firebase-config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  onSnapshot,
} from "firebase/firestore";

const auth = getAuth(firebase);
const googleAuthProvider = new GoogleAuthProvider();

const loginBtn = document.querySelector(".login");
const logoutBtn = document.querySelector(".logout");
const section = document.querySelector("section");

loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleAuthProvider).then((auth) => console.log(auth));
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => console.log("logged out"));
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.classList.remove("show");
    logoutBtn.classList.add("show");
    document.querySelector("h3").innerHTML = "";
  } else {
    logoutBtn.classList.remove("show");
    loginBtn.classList.add("show");
  }
});

//firestore section

const db = getFirestore(firebase);

const colRef = collection(db, "todos");

const form = document.querySelector("form");
const input = document.querySelector("input");
const h3 = document.querySelector("h3");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const docRef = doc(colRef);

  if (auth.currentUser) {
    await setDoc(docRef, { todoContent: input.value });
  } else {
    h3.textContent = "please log in";
  }
});

onSnapshot(colRef, (col) => {
  section.innerHTML = "";

  col.forEach((doc) => {
    section.innerHTML += `<div>
      <p>${doc.data().todoContent}</p>
    </div>`;
  });
});
