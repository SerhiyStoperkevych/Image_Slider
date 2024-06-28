const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');


const images = [cat1, cat2, cat3];
const colors = [first, second, third];


let current = 0;
let nok = 0

function usu(element) {
    images[current].style.display = "none";
    colors[nok].style.backgroundColor = "white";
    (element === 1) ? current++ : current--;
    (element === 1) ? nok++ : nok--;

    if (element === 1 ) {
        if (current >= images.length) {
            current = 0;
            nok = 0;
        }
    } else {
        if (current < 0) {
            current = images.length - 1;
            nok = colors.length - 1;
        }
    }

    images[current].style.display = "block";
    colors[nok].style.backgroundColor = "pink";
};

function stat(element) {
    images.forEach(image => image.style.display = "none");
    colors.forEach(color => color.style.backgroundColor = "white");

    images[element].style.display = "block";
    colors[element].style.backgroundColor = "pink";
};


increase.addEventListener('click', () => usu(1));

decrease.addEventListener('click', () => usu(0));

first.addEventListener('click', () => stat(0));

second.addEventListener('click', () => stat(1));

third.addEventListener('click', () => stat(2));
