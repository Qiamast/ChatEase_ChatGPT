let input = document.querySelector('input');
let button = document.querySelector('button');
let conversation = document.querySelector('.conversation');

// Retrieve the conversation history from local storage
let history = JSON.parse(localStorage.getItem('conversation')) || [];

// Display the conversation history
for (let i = 0; i < history.length; i++) {
  conversation.innerHTML += `<p>${history[i]}</p>`;
}

button.addEventListener('click', function() {
  let message = input.value;
  conversation.innerHTML += `<p>You: ${message}</p>`;
  input.value = '';

  // Save the conversation to local storage
  history.push(`You: ${message}`);
  localStorage.setItem('conversation', JSON.stringify(history));
});
