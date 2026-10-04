const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');

// Add student to table
form.addEventListener('submit', e => {
  e.preventDefault();

  const studentId = document.getElementById('studentId').value;
  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;
  const year = document.getElementById('year').value;
  const email = document.getElementById('email').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${studentId}</td>
    <td>${name}</td>
    <td>${course}</td>
    <td>${year}</td>
    <td>${email}</td>
  `;

  studentList.appendChild(row);
  form.reset();
});

// Search students
searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  const rows = studentList.getElementsByTagName('tr');

  Array.from(rows).forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
});
