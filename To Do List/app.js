(function () {
  const todoInput = document.querySelector(".todo-input");
  const todoSubmitBtn = document.querySelector(".todo-submit-btn");
  const todoList = document.querySelector(".todo-list");
  const filterList = document.querySelector(".filter-list");

  const addListener = (e) => {
    e.preventDefault();

    if (todoInput.value === "") {
      alert("빈칸이네요?");
    } else {
      // li생성
      const li = document.createElement("li");
      li.className = "list-item";

      // 텍스트 넣기
      const newTodo = document.createElement("div");
      newTodo.textContent = todoInput.value;
      li.appendChild(newTodo);

      // 완료 버튼 널기
      const completeBtn = document.createElement("button");
      completeBtn.classList.add("complete-btn");
      completeBtn.innerHTML = '<i class="fas fa-check"></i>';
      li.appendChild(completeBtn);

      // 삭제 버튼 넣기
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      li.appendChild(deleteBtn);

      // li넣기
      todoList.appendChild(li);

      // todoInput 비우기
      todoInput.value = "";
    }
  };

  todoSubmitBtn.addEventListener("click", addListener);
  todoList.addEventListener("click", (e) => {
    const clickedItem = e.target;
    switch (e.target.classList[0]) {
      case "complete-btn":
        clickedItem.parentNode.classList.toggle("completed");
        break;
      case "delete-btn":
        clickedItem.parentNode.classList.add("deleted");
        clickedItem.parentNode.addEventListener("transitionend", () => {
          clickedItem.parentNode.remove();
        });
        break;
    }
  });
  filterList.addEventListener("click", (e) => {
    const lists = todoList.childNodes;
    console.log(e.target.value);
    lists.forEach((list) => {
      switch (e.target.value) {
        case "all":
          list.style.display = "flex";
          break;
        case "completed":
          if (list.classList.contains("completed")) {
            list.style.display = "flex";
          } else {
            list.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!list.classList.contains("completed")) {
            list.style.display = "flex";
          } else {
            list.style.display = "none";
          }
          break;
      }
    });
  });
})();
