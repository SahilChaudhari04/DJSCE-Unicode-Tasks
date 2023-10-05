
const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get('userId');
const album = JSON.parse(urlParams.get('albums'))

const albumBody = document.getElementById('albumTableBody');
albumTableBody.innerHTML = ''

album.forEach(data => {
  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td></td>
  `;
  albumTableBody.appendChild(row);

})