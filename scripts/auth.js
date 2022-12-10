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
  document.getElementById("submit").innerText = "Loading..."
  const orgName = document.getElementById("orgName").value;
  const password = document.getElementById("password").value;
  firebase.database().ref(`users/${orgName}`).on('value', snapshot => {
    if (snapshot.val() == null) {
      document.getElementById("err").innerText = "Account does not exist"
      document.getElementById("submit").innerText = "Login"
    } else {
      if (snapshot.val().password == password) {
        localStorage.setItem("orgName", orgName);
        document.location.href="host.html"
      } else {
        document.getElementById("err").innerText = "Password is incorrect"
      }
    }
  })
}
document.getElementById("login").addEventListener("submit", login);

