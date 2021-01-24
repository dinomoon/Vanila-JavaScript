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
    }

    if (number > 0) {
      value.style.color = '#ff6b6b';
    } else if (number < 0) {
      value.style.color = '#5c7cfa';
    } else {
      value.style.color = '#495057';
    }

    value.textContent = number;
  });
});
