const inputText = document.querySelector(".input_box");
const itemLeft = document.getElementsByTagName("LI");
const count = document.getElementById("item-left-para");
const addButton = document.querySelector(".plus_image");
const uList = document.querySelector(".ul");

function add() {
  if (inputText.value == "") {
    alert("kindly fill the task");
  } else {
    let newElement = document.createElement("li");
    newElement.innerHTML = `${inputText.value}`;
    uList.appendChild(newElement);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // \U00D7 is used for Cross sign which is used to delete the task(I learned about this from Youtube)
    newElement.appendChild(span);
    count.innerHTML = `${itemLeft.length} task left.`;
  }
  inputText.value = "";
  saveData();
}

uList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("completed");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      count.innerHTML = `${itemLeft.length} task left.`;
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", uList.innerHTML); //To store our data in localstorage.
}

function showData() {
  uList.innerHTML = localStorage.getItem("data"); //To get data from localstorage
}
showData();
