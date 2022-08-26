const srcs = ['pix6.jpg','pix3.jpeg','pix1.jpeg','pix2.jpeg','pix3.jpeg','pix4.jpeg','pix5.jpeg']

let index = 0

const image = document.getElementsByTagName('img')[0]

let interval = setInterval(() => {
    if (index == srcs.length - 1) {
        index = 0
    } else {
        index++
    }
    image.src = `img/${srcs[index]}`
}, 4000)

