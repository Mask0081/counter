let cont = document.querySelector('.container');
let itemone = document.querySelector('.item1');
let itemcount = document.querySelector('.itemcount'); // Corrected class name
let btnminus = document.querySelector('.btnminus');
let btnplus = document.querySelector('.btnplus');

let count = 0;

function updateCounter() {
    itemcount.textContent = count;
}

btnplus.addEventListener('click', function() {
    count++;
    updateCounter();
});

btnminus.addEventListener('click', function() {
    if (count > 0) {
        count--;
        updateCounter();
    }
});