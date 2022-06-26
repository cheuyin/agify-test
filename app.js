const nameInput = document.querySelector("input#name");
const sendButton = document.querySelector("button");
const ageDisplay = document.querySelector("p#age");
const dataPointsDisplay = document.querySelector("p#data_points");

const apiURL = "https://api.agify.io?";

sendButton.addEventListener("click", handleButton)

function handleButton() {
  getData().then(data => showData(data));
}

async function getData() {
  const name = nameInput.value;
  const fetchPromise = await fetch(apiURL + "name=" + name);
  return await fetchPromise.json();
}

function showData(data) {
  ageDisplay.textContent = data.age;
  dataPointsDisplay.textContent = data.count;
}