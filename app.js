const nameInput = document.querySelector("input#name");
const sendButton = document.querySelector("button");

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
      console.log(data);
    });   
}