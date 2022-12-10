const firebaseConfig = {
  apiKey: "AIzaSyAylrQLOuZRVBTDAtnyTqW7h2gXMNaRTcM",
  authDomain: "evento-5e850.firebaseapp.com",
  databaseURL: "https://evento-5e850-default-rtdb.firebaseio.com",
  projectId: "evento-5e850",
  storageBucket: "evento-5e850.appspot.com",
  messagingSenderId: "630414628417",
  appId: "1:630414628417:web:79e3f13746581b628b58c0"
};
firebase.initializeApp(firebaseConfig);

const login = async (e) => {
  e.preventDefault()
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.database().ref(`users/ayomidetommiwa`).on('value', snapshot => {
    if (snapshot.val() == null) {
      console.log("Not found")
    } else {
      console.log("Found")
    }
  })
  console.log(email);
  return false
}
document.getElementsByTagName("form")[0].addEventListener("submit", login)