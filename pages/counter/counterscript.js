var count = 0;
var countSpan = document.getElementById('count');

function increment() {
  count++;
  countSpan.textContent = count;
}

function decrement() {
  count--;
  countSpan.textContent = count;
}

function reset() {
  count = 0;
  countSpan.textContent = count;
}

var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');
var resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);
