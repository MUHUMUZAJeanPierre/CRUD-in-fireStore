const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDym3a-ktnI8go2tKwh7S0XdrkuEGCOJRc",
  authDomain: "muvi-b281b.firebaseapp.com",
  projectId: "muvi-b281b",
  storageBucket: "muvi-b281b.appspot.com",
  messagingSenderId: "215125388445",
  appId: "1:215125388445:web:42eb658932b291982ab874",
  measurementId: "G-7DQQ66DG97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// addDoc(collection(db, "studentData"), {
//   studentName: "Muhumuza",
//   studentId: 1234,
//   studentEmail: 'muhumuzajeanpierre95@gmail.com'
// }).then((response)=>{
//   console.log('successefully created')
// }).catch((error)=>{
// console.log('error', error)
// })

// updateDoc(doc(db, "studentData", "lqXtCAlKjZUonHClo7dI"),{
//   studentName: "Jean Pierre",
//   studentId: 1987,
//   studentEmail: 'jeanPierre95@gmail.com',
//   studentPhone: 23456789
// }).then((response)=>{
//   console.log('Jean already executed')
// }).catch((error)=>{
//   console.log('error', error);
// })
deleteDoc(dc(db, "studentData", "WJCsWFm9ygT2O6e2XoaS"), {}).then(
  (response) => {
    console.log("successfully deleted");
  }
).catch((error)=>{                                               
  console.log('error', error);
})
getDoc()