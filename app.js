let jokesArr = [];
const button = document.querySelector('button');
const pEl = document.querySelector('p');

// Disable button until jokes are loaded
button.disabled = true;

// Load jokes from external JSON file
fetch('jokes.json')
  .then(response => response.json())
  .then(data => {
    jokesArr = data.jokes;
    button.disabled = false; // Enable button after loading
  })
  .catch(error => {
    console.error("Error loading jokes:", error);
    pEl.innerText = "Failed to load jokes. Try again later.";
  });

// On button click, show random joke
button.addEventListener('click', () => {
  let random = Math.floor(Math.random() * jokesArr.length);
  pEl.innerText = jokesArr[random];
});
