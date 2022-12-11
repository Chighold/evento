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

const register = async (e) => {
  e.preventDefault()
  document.getElementById("submit").innerText = "Loading..."
  const email = document.getElementById("email").value;
  const orgName = document.getElementById("orgName").value;
  const password = document.getElementById("password").value;
  const conPassword = document.getElementById("conPassword").value;
  const err = document.getElementById("err");
  if (password.length < 8) {
    err = "Password must be at least 8 characters"
  }
  if (password !== conPassword) {
    err = "Passwords do not match"
    return false;
  }
  firebase.database().ref(`users/${orgName}`).on('value', async snapshot => {
    if (snapshot.val() == null) {
      await firebase.database().ref(`users/${orgName}`).set({
        orgName: orgName,
        email: email,
        password: password,
        keys: 0
      });
      localStorage.setItem("orgName", orgName);
      document.location.href="host.html"
    } else {
      err = "Account already exists"
      document.getElementById("submit").innerText = "Register"
    }
  })
}
document.getElementById("register").addEventListener("submit", register);