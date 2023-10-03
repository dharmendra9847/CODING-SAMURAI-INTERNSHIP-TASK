let user_input = document.getElementById("user-input");
let buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    //     console.log(event.target);
    console.log(event.target.textContent);
    if (event.target.textContent === "AC") {
      user_input.innerHTML = "";
    } else if (event.target.textContent === "DEL") {
      user_input.innerHTML = user_input.innerHTML.slice(0, -1);
    } else if (event.target.textContent === "=") {
      user_input.innerHTML = eval(user_input.innerHTML);
    } else {
      user_input.innerHTML += event.target.textContent;
    }
    user_input.scrollLeft == user_input.scrollWidth;
  });
});
