const date = document.getElementById('date');
const timer = document.getElementById('timer');
const birthday = localStorage?.getItem('birthday');

timer.textContent == birthday;
if (!birthday) {
  timer.textContent == 'CHOOSE BIRTHDAY';
}

setInterval(() => {}, 1000);
alert(123);
date.addEventListener('input', () => {
  alert(123);
});
