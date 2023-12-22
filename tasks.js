// Query for the submit button and input task field
const submit = document.querySelector('#submit');
const newTask = document.querySelector('#newTask');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', function() {
  if (newTask.value.trim() !== '') {
    // Enable the submit button if the input field has a value
    submit.disabled = false;
  } else {
    // Disable the submit button if the input field is empty
    submit.disabled = true;
  }
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Find the task the user just submitted
  const task = newTask.value.trim();

  // Create a list item for the new task and add the task to it
  const listItem = document.createElement('li');
  listItem.textContent = task;

  // Add new element to our unordered list
  document.querySelector('ul').appendChild(listItem);

  // Clear the input field
  newTask.value = '';

  // Disable the submit button after submission
  submit.disabled = true;
});

// Prevent default form submission
document.querySelector('form').addEventListener('submit', function() {
  return false;
});