window.addEventListener('load', () => {
  const ul = document.querySelector('ul');
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const title = input.value;
    if (title === '') return;
    const item = document.createElement('li');
    item.textContent = title;

    item.addEventListener('click', () => {
      item.classList.toggle('clicked');
    })
    const close = document.createElement('span');
    close.textContent = 'X';
    close.classList.add('close');

    close.addEventListener('click', () => {
      close.parentNode.remove();
    })
    item.appendChild(close);
    ul.appendChild(item);

    input.value = '';
  })
})