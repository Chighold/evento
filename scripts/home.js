

let increment = 10;

function loadMore() {
    j = i + increment;
    while (i < j) {
        eventParent.innerHTML = eventParent.innerHTML + `<div class=\"event\"> \
        <div class=\"img\"></div> \
        <div class=\"info\"> \
            <h2> Student Union Party </h2> \
        </div> \
        </div>`
        i ++
    };
    increment = increment + 10;
};

let data;
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
const fetch = async () => {
    await firebase.database().ref('events').on('value', snapshot => {
        displayData(snapshot.val())
    })
}
fetch();

const displayData = (data) => {
    const keys = Object.keys(data)
    const eventParent = document.getElementById('body');
    let i = 0;

    while (i < keys.length) {
        eventParent.innerHTML = eventParent.innerHTML + 
        `
                <div class="event">
                <div class="pic">
                    <img src="https://www.swindonalexandrahouse.co.uk/wp-content/uploads/2021/08/suprise-party-ideas.jpg" />
                </div>
                <h2> ${data[keys[i]].name} </h2>
                <h3> ${data[keys[i]].firm} </h3>
                <p> ${data[keys[i]].description} </p>
                <div>
                    <p> ${data[keys[i]].location} </p>
                </div>
            </div>
        `
        i ++;
    };
}