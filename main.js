var counter = 0;
var counterDOM = document.querySelector('#cnt');
var buttonPlus = document.querySelector('.btn-plus');
var buttonMinus = document.querySelector('.btn-minus');

function updateCounterDOM() {
    counterDOM.innerHTML = counter;
}

buttonPlus.addEventListener(
    'click',
    () => {
        counter++;
        updateCounterDOM();
    }
)

buttonMinus.addEventListener(
    'click',
    () => {
        counter--;
        updateCounterDOM();
    }
)

updateCounterDOM();