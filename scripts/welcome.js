const image = document.getElementsByTagName('img')[0];
const srcs = [,'pix3.jpeg','pix2.jpeg','pix6.jpg','pix7.jpeg'];
let index = 0;

let interval = setInterval(() => {
    if (index == srcs.length - 1) {
        index = 0;
    } else {
        index++;
    };
    image.src = `img/${srcs[index]}`;
}, 4000);


const eventParent = document.getElementById('events');

let i = 0;

while (i < 10) {
    eventParent.innerHTML = eventParent.innerHTML + "<div class=\"event\"> \
    <div class=\"img\"></div> \
    <div class=\"info\"></div> \
    </div>";
    i ++;
};

let increment = 10;

function loadMore() {
    j = i + increment;
    while (i < j) {
        eventParent.innerHTML = eventParent.innerHTML + `<div class=\"event\"> \
        <div class=\"img\"></div> \
        <div class=\"info\"> ${i} </div> \
        </div>`
        i ++
    };
    increment = increment + 10;
};