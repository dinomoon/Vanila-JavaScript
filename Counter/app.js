const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let number = 0;

btns.forEach((btn) => {
  const btnClassList = btn.classList;
  btn.addEventListener('click', function () {
    if (btnClassList.contains('increase')) {
      number++;
    } else if (btnClassList.contains('decrease')) {
      number--;
    } else {
      number = 0;
    }

    if (number > 0) {
      value.style.color = 'Crimson';
    } else if (number < 0) {
      value.style.color = 'RoyalBlue';
    } else {
      value.style.color = '#495057';
    }

    value.textContent = number;
  });
});
