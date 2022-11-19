const image = document.getElementsByTagName('img')[0];
const srcs = ['pix3.jpeg','pix2.jpeg','pix6.jpg','pix7.jpeg'];
let index = 0;

let interval = setInterval(() => {
    if (index == srcs.length - 1) {
        index = 0;
    } else {
        index++;
    };
    image.src = `img/${srcs[index]}`;
}, 8000);


const eventParent = document.getElementById('events');

let i = 0;

while (i < 10) {
    eventParent.innerHTML = eventParent.innerHTML + "<div class=\"event\"> \
    <div class=\"img\"></div> \
    <div class=\"info\"> \
        <h2> Student Union Party </h2> \
        <h3> Student union building, OAU campus, Ile-ife, Osun State, Nigeria. </h3> \
    </div> \
    <div class=\"like\"></div> \
    </div>"
    i ++;
};

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