console.log("gradebook.js is loaded");

function addStudentRow(studentName, grades) {
  console.log("addStudentRow called with:", studentName, grades);
  // This function will be filled in future assignments
}

function calculateAverages() {
  console.log("calculateAverages called");
  // This function will be filled in future assignments
}
console.log("gradebook.js is loaded");

// Fetch grade data from the server
async function fetchGradeData() {
  try {
    const response = await fetch('http://localhost:3000/api/grades');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data received from server:", data);
    populateGradebook(data);
  } catch (error) {
    console.error('Error fetching grade data:', error);
  }
}

// Dynamically populate table with data
function populateGradebook(data) {
  const tableBody = document.getElementById('gradebook-body');
  tableBody.innerHTML = ''; // Clear existing content

  data.forEach((entry) => {
    addStudentRow(entry.name, [entry.assignment, entry.grade]);
  });
}

// Add a single student row to the table
function addStudentRow(studentName, grades) {
  console.log("addStudentRow called with:", studentName, grades);

  const tableBody = document.getElementById('gradebook-body');
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = studentName;
  row.appendChild(nameCell);

  const assignmentCell = document.createElement('td');
  assignmentCell.textContent = grades[0]; // assignment
  row.appendChild(assignmentCell);

  const gradeCell = document.createElement('td');
  gradeCell.textContent = grades[1]; // grade
  row.appendChild(gradeCell);

  tableBody.appendChild(row);
}

// Placeholder for future average calculations
function calculateAverages() {
  console.log("calculateAverages called");
}

// Automatically load data on page load
fetchGradeData();
