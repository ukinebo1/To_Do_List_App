document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      var task = taskInput.value.trim();
  
      if (task !== '') {
        var li = document.createElement('li');
        var editButton = document.createElement('button');
        var deleteButton = document.createElement('button');
  
        li.textContent = task;
  
        editButton.textContent = 'Edit';
        editButton.className = 'editButton';
        editButton.addEventListener('click', function() {
          var newText = prompt('Edit the task:', li.textContent);
          if (newText !== null && newText.trim() !== '') {
            li.textContent = newText.trim();
          }
        });
  
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', function() {
          taskList.removeChild(li);
        });
  
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  });
  