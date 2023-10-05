
  const urlParams = new URLSearchParams(window.location.search)
  const userId = urlParams.get('userId');
  const todo = JSON.parse(urlParams.get('todoList'))

  const todoBody = document.getElementById('todoTableBody');
  todoTableBody.innerHTML = ''

  todo.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${data.id}</td>
          <td>${data.title}</td>
          <td>${data.completed}</td>
          <td></td>
          <td></td>
    `;
    todoTableBody.appendChild(row);

  })