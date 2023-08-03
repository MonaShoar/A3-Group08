document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  function createToDoElement(task) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const text = document.createTextNode(task);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        document.getElementById('dingSound').play();
      } else {
        li.classList.remove('checked');
      }
    });

    checkbox.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    deleteBtn.addEventListener('click', function () {
      li.classList.add('delete');
      setTimeout(function () {
        taskList.removeChild(li);
      },500);
    });
  }

  addBtn.addEventListener('click', function () {
    const task = taskInput.value.trim();
    if (task !== '') {
      createToDoElement(task);
      taskInput.value = '';
    }
  });
});
