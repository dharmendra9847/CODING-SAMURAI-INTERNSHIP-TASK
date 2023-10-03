let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

/* Add list */
function addTask() {
  if (inputBox.value === "") {
    alert(`You most write something!`);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "&#x232B";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); // whenever we addTask to list saveData() will be call
}

/* onclick */
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

/* Store tasks in the browser's local storage to persist data across sessions. */
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

/* Display this data whenever we will open or close the website again */
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
