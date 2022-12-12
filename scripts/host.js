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
// localStorage.removeItem("orgName")

const savedData = localStorage.getItem('orgName');
let length;

const createEvent = async (e) => {
  e.preventDefault()
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let location = document.getElementById("location").value;
  let date = document.getElementById("date").value;
  await firebase.database().ref(`events/${savedData}${length + 1}`).set({
    name: name,
    description: description,
    location: location,
    date: date,
    orgName: savedData,
    status: "live"
  });
  await firebase.database().ref(`users/${savedData}/events/${savedData}${length + 1}`).set({
    name: name,
    description: description,
    location: location,
    date: date,
    orgName: savedData,
    status: "live"
  })
  await firebase.database().ref(`users/${savedData}`).update({
    keys: length + 1
  })
  window.location.reload(true);
}
document.getElementById("form").addEventListener("submit", createEvent)

const displayEvents = (data) => {
  if (data === null) {
    return false;
  }
  const keys = Object.keys(data)
  const eventParent = document.getElementById('events');
  let i = 0;

  while (i < keys.length) {
    eventParent.innerHTML = eventParent.innerHTML + 
    `
      <div class="event">
        <h2> ${data[keys[i]].name} </h2>
        <h3> ${data[keys[i]].location} </h3>
        <p> ${data[keys[i]].description} </p>
      </div>
    `
    i++;
  }; 
}
const getData = async () => {
  document.getElementsByTagName("h3")[0].innerText = savedData;
  await firebase.database().ref(`users/${savedData}`).on("value", snapshot => {
    length = snapshot.val().keys
  })
  await firebase.database().ref(`users/${savedData}/events`).on("value", snapshot => {
    displayEvents(snapshot.val())
  })
}

if (savedData === null) {
  document.location.href = "login.html"
} else {
  if (savedData) {
    getData()
  }
}
