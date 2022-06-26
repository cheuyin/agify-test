const nameInput = document.querySelector("input#name");
const sendButton = document.querySelector("button");
const ageDisplay = document.querySelector("p");

const apiURL = "https://api.agify.io?";

sendButton.addEventListener("click", handleButton)

function handleButton() {
  const name = nameInput.value;
  const fetchPromise = fetch(apiURL + "name=" + name);
  fetchPromise
    .then(response => {
      return response.json();
    })
    .then(data => {
      ageDisplay.textContent = data.age;
    });  
}
