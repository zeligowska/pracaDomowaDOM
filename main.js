var counter = 0;
var counterDOM = document.querySelector('#cnt');
var buttonPlus = document.querySelector('.btn-plus');
var buttonMinus = document.querySelector('.btn-minus');
var toastDOM = document.querySelector('#toast');

function updateCounterDOM() {
    counterDOM.innerHTML = counter;
}

buttonPlus.addEventListener(
    'click',
    () => {
        counter++;
        toastDOM.innerHTML = 'You added 1';
        updateCounterDOM();
        showToast();
    }
)

buttonMinus.addEventListener(
    'click',
    () => {
        counter--;
        toastDOM.innerHTML = 'You subtract 1';
        updateCounterDOM();
        showToast();
    }
)

function showToast() {
    toastDOM.className = 'show';
    setTimeout(() => {
        toastDOM.className = toastDOM.className.replace('show', '')
    }, 1500);
}

updateCounterDOM();