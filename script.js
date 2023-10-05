//fetch user data
async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    return data;
    
}




//display user data in a table

function displayUsers(users){
  const userTableBody = document.getElementById('userTableBody')

  
  users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><button class="todoBtn" id="todolist" userid="${user.id}" onclick="displayTodo(this.getAttribute('userid'))">To-Do</button></td>
        <td><button class="albumBtn" userid="${user.id}" onclick="displayAlbum(this.getAttribute('userid'))">View</button></td>
      `;

      userTableBody.appendChild(row);
      row.classList.add('border-b');
    });
}


//display todo data
async function displayTodo(userId){
     const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
     const todos = await response.json(); 

      console.log('hi');

      var queryParams = new URLSearchParams({userId, todoList : JSON.stringify(todos)})
      window.location.href = `todo.html?${queryParams.toString()}`;
}

async function displayAlbum(userId){
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  const todos = await response.json(); 

   console.log('hi');

   var queryParams = new URLSearchParams({userId, albums : JSON.stringify(todos)})
   window.location.href = `albums.html?${queryParams.toString()}`;
}

document.addEventListener('DOMContentLoaded', () => {

  getData().then(displayUsers);
  

});



