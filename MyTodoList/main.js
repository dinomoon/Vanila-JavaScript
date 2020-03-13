window.addEventListener('load', () => {
  const list = document.querySelector('#list');
  const todoItem = document.querySelector('input[type="text"]');
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if (todoItem.value !== '') {
      const listItem = document.createElement('li');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('lineThrough');
      });

      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      delBtn.className = "delBtn";

      delBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();
      });

      listItem.appendChild(checkBox);

      const txt = document.createTextNode(todoItem.value);
      listItem.appendChild(txt);
      listItem.appendChild(delBtn);

      listItem.className = 'listItem';
      list.appendChild(listItem);
    }
    todoItem.value = '';
  })
})