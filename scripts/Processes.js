// Import the functions you need from the SDKs you need
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
  import { doc, collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCz1C7uxc11_2WSEivcjj4_Eg8VMF4SXNU",
    authDomain: "evento-614b2.firebaseapp.com",
    projectId: "evento-614b2",
    storageBucket: "evento-614b2.appspot.com",
    messagingSenderId: "372465725358",
    appId: "1:372465725358:web:71fcd5e6d6aca8fc94223f",
    measurementId: "G-32M3EHGMEM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const db = getFirestore(app)

document.getElementById('submit').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        group: document.getElementById('group').value,
        event: document.getElementById('event').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
    }

    await addDoc(collection(db, 'events'), data);
    console.log('done')
    return false
})
