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
var length;

const createEvent = async (e) => {
  e.preventDefault()
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  await firebase.database().ref(`events/${savedData}${length + 1}`).set({
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
}
document.getElementById("form").addEventListener("submit", createEvent)

const displayEvents = async (data) => {
  length = data.keys;
  const eventParent = document.getElementById('events');
  let i = 1;

  while (i < length) {
    await firebase.database().ref(`events/${savedData}${i}`).on('value', snapshot => {
      const thisData = snapshot.val()
      eventParent.innerHTML =
      `
        <div>
          <div><img src=${thisData[keys[i]]} /></div>
          <div>
            <h2>${thisData[keys[i]]}</h2>
          </div>
        </div>
      `
    })
  } 
}
const getData = async () => {
  document.getElementsByTagName("h3")[0].innerText = savedData;
  await firebase.database().ref(`users/${savedData}`).on("value", snapshot => {
    displayEvents(snapshot.val())
  })
}

if (savedData === null) {
  document.location.href = "login.html"
} else {
  getData()
}
